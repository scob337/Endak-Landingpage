import { useState, useEffect } from "react";
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
import { PropTypes } from "prop-types";

const Dashboard = ({ toggleSidebar }) => {
  // State Management
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const ordersPerPage = 7;

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(Investment);
      const data = response.data.data;

      setOrders(data);
      setFilteredOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("فشل في جلب البيانات. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Search Functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = orders.filter(
      (order) => order?.code?.includes(query) || order?.fullName.includes(query)
    );
    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  // Handle Filter Change
  const handleFilterChange = (status) => {
    if (status === "all") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter((order) => order.status === status));
    }
    setCurrentPage(1);
  };

  // Handle View Order Details
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsEditMode(false);
  };

  // Handle Edit Order
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsEditMode(true);
  };

  // Handle Close Popup
  const handleClosePopup = () => {
    setSelectedOrder(null);
  };

  // Handle Save Order
  const handleSaveOrder = async (updatedOrder) => {
    try {
      const response = await axiosInstance.put(
        `${Investment}/${updatedOrder._id}`,
        updatedOrder
      );

      const updatedOrders = orders.map((order) =>
        order._id === updatedOrder._id ? response.data.data : order
      );
      setOrders(updatedOrders);
      setFilteredOrders(updatedOrders);

      toast.dismiss(); // إغلاق أي رسائل toast قديمة
      toast.success("تم التعديل بنجاح!");
    } catch (error) {
      console.error("Error updating order:", error);
      toast.dismiss(); // إغلاق أي رسائل toast قديمة
      toast.error("فشل في تعديل الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsEditMode(false);
    }
  };

  // Handle Page Change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  return (
    <div
      dir="rtl"
      className="min-h-[86vh] w-full bg-gray-100 flex flex-col lg:w-[100%]"
    >
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-grow p-4">
        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="ابحث برقم الطلب أو الاسم..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="lg:w-[30%] p-2 border rounded"
          />
        </div>

        {/* Filter Section */}
        <FilterSection onFilterChange={handleFilterChange} />

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
          </div>
        ) : (
          <>
            {/* Orders Table */}
            <OrdersTable
              orders={currentOrders}
              onEditOrder={handleEditOrder}
              onViewDetails={handleViewDetails}
            />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredOrders.length / ordersPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>

      {/* Popup for Order Details/Edit */}
      <ReusablePopup
        isOpen={!!selectedOrder}
        onClose={handleClosePopup}
        title={
          isEditMode
            ? `تعديل الطلب #${selectedOrder?.code || "لا يوجد رقم طلب"}`
            : `تفاصيل الطلب #${selectedOrder?.code || "لا يوجد رقم طلب"}`
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

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
