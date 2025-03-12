import { useState, useEffect } from "react"; // أضفنا useEffect
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import FilterSection from "./FilterSection";
import OrdersTable from "./OrdersTable";
import ReusablePopup from "./PopupDetails";
import Pagination from "./Pagination";
import EditOrderForm from "./EditOrderForm";
import OrderDetails from "./OrderDetailsModal";
import axiosInstance from "../../URL/axiosConfig";
import { Investment } from "../../URL/URL";

const Dashboard = () => {
  const [orders, setOrders] = useState([]); 
  const [filteredOrders, setFilteredOrders] = useState([]); 
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const [isEditMode, setIsEditMode] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const ordersPerPage = 7; 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(Investment); 
        const data = response.data.data; 
        setOrders(data);
        setFilteredOrders(data); 
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("فشل في جلب البيانات. يرجى المحاولة مرة أخرى."); // عرض رسالة خطأ
      } finally {
        setLoading(false); // إيقاف حالة التحميل
      }
    };

    fetchData(); // استدعاء الدالة لجلب البيانات
  }, []); // سيتم تشغيلها مرة واحدة عند تحميل المكون

  // فلترة الطلبات حسب البحث
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = orders.filter(
      (order) =>
        order.id.toString().includes(query) || order.name.includes(query)
    );
    setFilteredOrders(filtered);
    setCurrentPage(1); // نرجع للصفحة الأولى عند البحث
  };

  // فلترة الطلبات حسب الحالة
  const handleFilterChange = (status) => {
    if (status === "all") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter((order) => order.status === status));
    }
    setCurrentPage(1); // نرجع للصفحة الأولى عند التصفية
  };

  // عرض تفاصيل الطلب
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsEditMode(false); // وضع العرض العادي (ليس التعديل)
  };

  // تعديل الطلب
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsEditMode(true); // وضع التعديل
  };

  // إغلاق النافذة المنبثقة
  const handleClosePopup = () => {
    setSelectedOrder(null);
  };

  // حفظ التعديلات على الطلب
  const handleSaveOrder = async (updatedOrder) => {
    try {
      // إرسال التعديلات إلى الـ API
      const response = await axiosInstance.put(
        `/orders/${updatedOrder.id}`,
        updatedOrder
      );

      // تحديث الحالة المحلية بالبيانات الجديدة
      const updatedOrders = orders.map((order) =>
        order.id === updatedOrder.id ? response.data.data : order
      );
      setOrders(updatedOrders);
      setFilteredOrders(updatedOrders);

      toast.success("تم التعديل بنجاح!"); // عرض رسالة نجاح
    } catch (error) {
      console.error("Error updating order:", error);
      toast.error("فشل في تعديل الطلب. يرجى المحاولة مرة أخرى."); // عرض رسالة خطأ
    }
  };

  // تغيير الصفحة
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // حساب البيانات المعروضة في الصفحة الحالية
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  return (
    <div
      dir="rtl"
      className="min-h-[86vh] bg-gray-100 flex flex-col lg:w-[100%]"
    >
      <Header />
      <div className="flex-grow p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="ابحث برقم الطلب أو الاسم..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="lg:w-[30%] p-2 border rounded"
          />
        </div>
        <FilterSection onFilterChange={handleFilterChange} />
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
          </div>
        ) : (
          <>
            <OrdersTable
              orders={currentOrders}
              onEditOrder={handleEditOrder}
              onViewDetails={handleViewDetails}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredOrders.length / ordersPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
      <ReusablePopup
        isOpen={!!selectedOrder}
        onClose={handleClosePopup}
        title={
          isEditMode
            ? `تعديل الطلب #${selectedOrder?.id}`
            : `تفاصيل الطلب #${selectedOrder?.id}`
        }
      >
        {isEditMode ? (
          <EditOrderForm
            order={selectedOrder}
            onSave={handleSaveOrder}
            onClose={handleClosePopup}
          />
        ) : (
          <OrderDetails order={selectedOrder} />
        )}
      </ReusablePopup>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Dashboard;
