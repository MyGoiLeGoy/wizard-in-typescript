import React, { useState } from "react";
import { useWizard } from "react-use-wizard";

const Step1: React.FC = () => {
  const { nextStep } = useWizard();
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Step 1: Enter your Name</h2>
      <input
        className="border p-2 mb-4"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={nextStep}
        disabled={!name}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
