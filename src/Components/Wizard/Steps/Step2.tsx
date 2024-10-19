// Step2.tsx
import React, { useState } from "react";
import { useWizard } from "react-use-wizard";

const Step2: React.FC = () => {
  const { nextStep, previousStep } = useWizard();
  const [email, setEmail] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Step 2: Enter your Email</h2>
      <input
        className="border p-2 mb-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex space-x-4">
        <button
          className="bg-gray-500 text-white px-4 py-2"
          onClick={previousStep}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={nextStep}
          disabled={!email}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
