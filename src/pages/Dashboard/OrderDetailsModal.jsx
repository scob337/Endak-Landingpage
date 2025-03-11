import { PropTypes } from "prop-types";

const OrderDetails = ({ order }) => {
  return (
    <div className="space-y-4 text-start min-w-[300px] max-w-[400px] p-4 bg-white rounded-lg shadow-md">
      <p>
        <strong>الاسم:</strong> {order?.name || "غير متوفر"}
      </p>
      <p>
        <strong>البريد الإلكتروني:</strong> {order?.email || "غير متوفر"}
      </p>
      <p>
        <strong>رقم الجوال:</strong> {order?.phone || "غير متوفر"}
      </p>
      <p>
        <strong>مبلغ الاستثمار المتوقع:</strong>{" "}
        {order?.investmentAmount
          ? `${order.investmentAmount} جنيه`
          : "غير متوفر"}
      </p>
      <p>
        <strong>هل لديه استثمارات سابقة؟:</strong>{" "}
        {order?.hasPreviousInvestments ? "نعم" : "لا"}
      </p>
      <p className="break-words">
        <strong>أي ملاحظات إضافية:</strong> {order?.notes || "لا توجد ملاحظات."}
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    investmentAmount: PropTypes.number.isRequired,
    hasPreviousInvestments: PropTypes.bool.isRequired,
    status: PropTypes.oneOf(["pending", "accepted", "rejected"]).isRequired,
    notes: PropTypes.string,
  }).isRequired,
};

export default OrderDetails;
