import React from "react";

function StepFormData({ formData }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Form Submitted Successfully!</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Address Details</h3>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">Payment Details</h3>
        <p>
          <strong>Card Number:</strong> {formData.cardNumber}
        </p>
        <p>
          <strong>Expiry Date:</strong> {formData.expiryDate}
        </p>
      </div>
    </div>
  );
}

export default StepFormData;
