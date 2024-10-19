// Step3.tsx
import React, { useState } from "react";
import { useWizard } from "react-use-wizard";

const Step3: React.FC = () => {
  const { previousStep, nextStep } = useWizard();
  const [age, setAge] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Step 3: Enter your Age</h2>
      <input
        className="border p-2 mb-4"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <div className="flex space-x-4">
        <button
          className="bg-gray-500 text-white px-4 py-2"
          onClick={previousStep}
        >
          Back
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={nextStep}
          disabled={!age}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
