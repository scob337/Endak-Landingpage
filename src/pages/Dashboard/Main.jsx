import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import FilterSection from "./FilterSection";
import OrdersTable from "./OrdersTable";
import ReusablePopup from "./PopupDetails";
import Pagination from "./Pagination";
import EditOrderForm from "./EditOrderForm";
import OrderDetails from "./OrderDetailsModal";

const Dashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "محمد علي احمد محمد عبدالرازق أحمد",
      email: "mohamed.ahmed@example.com",
      phone: "01234567890",
      investmentAmount: 50000,
      hasPreviousInvestments: true,
      status: "pending",
      notes: "الطلب قيد المراجعة",
    },
    {
      id: 2,
      name: "علي محمود",
      email: "ali.mahmoud@example.com",
      phone: "01112223344",
      investmentAmount: 100000,
      hasPreviousInvestments: false,
      status: "accepted",
      notes: "الطلب مقبول",
    },
    {
      id: 3,
      name: "خالد سعيد",
      email: "khaled.saeed@example.com",
      phone: "01005556677",
      investmentAmount: 75000,
      hasPreviousInvestments: true,
      status: "rejected",
      notes:
        "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    },
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 4,
      name: `مستثمر ${i + 4}`,
      email: `investor${i + 4}@example.com`,
      phone: `010000000${i + 4}`,
      investmentAmount: (i + 1) * 10000,
      hasPreviousInvestments: i % 2 === 0 ? true : false,
      status: i % 3 === 0 ? "pending" : i % 3 === 1 ? "accepted" : "rejected",
      notes: `ملاحظات ${i + 4}`,
    })),
  ]);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const ordersPerPage = 7; // عدد الطلبات في كل صفحة

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

  const handleFilterChange = (status) => {
    if (status === "all") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter((order) => order.status === status));
    }
    setCurrentPage(1); // نرجع للصفحة الأولى عند التصفية
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsEditMode(false); // وضع العرض العادي (ليس التعديل)
  };

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsEditMode(true); // وضع التعديل
  };

  const handleClosePopup = () => {
    setSelectedOrder(null);
  };

  const handleSaveOrder = (updatedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
    toast.success("تم التعديل بنجاح!"); // عرض رسالة نجاح
  };

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
    <div dir="rtl" className="min-h-[86vh] bg-gray-100 flex flex-col lg:w-[100%]">
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
