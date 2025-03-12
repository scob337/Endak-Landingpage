import PropTypes from "prop-types";

const OrdersTable = ({ orders, onEditOrder, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="py-3 px-4 border-b w-1/12 whitespace-nowrap">
              رقم الطلب
            </th>
            <th className="py-3 px-4 border-b w-4/12 whitespace-nowrap">
              اسم المستثمر
            </th>
            <th className="py-3 px-4 border-b w-[300px] whitespace-nowrap">
              {" "}
              {/* هنا التعديل */}
              الحالة
            </th>
            <th className="py-3 px-4 border-b w-2/12 whitespace-nowrap">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b text-start whitespace-nowrap">
                {order.id}
              </td>
              <td
                className="py-3 px-4 border-b text-center cursor-pointer text-blue-500 hover:underline whitespace-nowrap"
                onClick={() => onViewDetails(order)}
              >
                {order.fullName}
              </td>
              <td className="py-3 px-4 border-b text-center whitespace-nowrap w-[300px]">
                {" "}
                {/* هنا التعديل */}
                <span
                  className={`px-5 py-2 rounded-4xl text-[18px] ${
                    order.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "accepted"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {order.status === "pending"
                    ? "قيد المراجعة"
                    : order.status === "accepted"
                    ? "مقبول"
                    : "مرفوض"}
                </span>
              </td>
              <td className="py-3 px-4 border-b text-center whitespace-nowrap">
                <button
                  onClick={() => onEditOrder(order)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm md:text-base"
                >
                  تعديل البيانات
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      investmentAmount: PropTypes.number.isRequired,
      hasPreviousInvestments: PropTypes.bool.isRequired,
      status: PropTypes.oneOf(["pending", "accepted", "rejected"]).isRequired,
      notes: PropTypes.string,
    })
  ).isRequired,
  onEditOrder: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default OrdersTable;
