import React from "react";

function PaymentDetails({ register, errors }) {
  return (
    <div className="transition duration-500 transform">
      <h2 className="text-3xl font-bold mb-6">Payment Details</h2>
      <div className="mb-6">
        <label className="block mb-2 text-lg">Card Number:</label>
        <input
          {...register("cardNumber", {
            required: "Card number is required",
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Card number must be exactly 16 digits",
            },
          })}
          className="w-full p-3 border border-gray-300 rounded-md"
          type="text"
        />
        {errors.cardNumber && (
          <p className="text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg">Expiry Date:</label>
        <input
          {...register("expiryDate", { required: "Expiry date is required" })}
          className="w-full p-3 border border-gray-300 rounded-md"
          type="date"
        />
        {errors.expiryDate && (
          <p className="text-red-500">{errors.expiryDate.message}</p>
        )}
      </div>
    </div>
  );
}

export default PaymentDetails;
