// Wizard.tsx
import React from "react";
import { Wizard } from "react-use-wizard";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Summary from "./Steps/Summary";

const WizardComponent: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Wizard>
        <Step1 />
        <Step2 />
        <Step3 />
        <Summary />
      </Wizard>
    </div>
  );
};

export default WizardComponent;
