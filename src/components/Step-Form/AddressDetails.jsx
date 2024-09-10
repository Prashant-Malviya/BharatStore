import React from "react";

function AddressDetails({ register, errors }) {
  return (
    <div className="transition duration-500 transform">
      <h2 className="text-3xl font-bold mb-6">Address Details</h2>
      <div className="mb-6">
        <label className="block mb-2 text-lg">Address:</label>
        <input
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 2,
              message: "Address must be at least 2 characters long",
            },
          })}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg">City:</label>
        <input
          {...register("city", { required: "City is required" })}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </div>
    </div>
  );
}

export default AddressDetails;
