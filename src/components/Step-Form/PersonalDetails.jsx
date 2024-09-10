import React from "react";

function PersonalDetails({ register, errors }) {
  return (
    <div className="transition duration-500 transform">
      <h2 className="text-3xl font-bold mb-6">Personal Details</h2>
      <div className="mb-6">
        <label className="block mb-2 text-lg">Name:</label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters long",
            },
          })}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg">Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
    </div>
  );
}

export default PersonalDetails;
