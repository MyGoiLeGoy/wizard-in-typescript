// Summary.tsx
import React from "react";
import { useWizard } from "react-use-wizard";

const Summary: React.FC = () => {
  const { goToStep } = useWizard();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Thank you for completing the form!</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => goToStep(0)} // Go back to the first step
      >
        Start Over
      </button>
    </div>
  );
};

export default Summary;
