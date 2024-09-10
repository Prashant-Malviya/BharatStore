import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddressDetails from "../../components/Step-Form/AddressDetails";
import PaymentDetails from "../../components/Step-Form/PaymentDetails";
import PersonalDetails from "../../components/Step-Form/PersonalDetails";
import StepFormData from "./StepFormData";

function StepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-xl rounded-lg transition duration-500">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <PersonalDetails register={register} errors={errors} />
            )}
            {step === 2 && (
              <AddressDetails register={register} errors={errors} />
            )}
            {step === 3 && (
              <PaymentDetails register={register} errors={errors} />
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
              >
                {step === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        ) : (
          <StepFormData formData={formData} />
        )}
      </div>
    </div>
  );
}

export default StepForm;
