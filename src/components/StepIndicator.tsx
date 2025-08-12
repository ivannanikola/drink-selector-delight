interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`step-indicator ${
              step === currentStep
                ? "active"
                : step < currentStep
                ? "completed"
                : ""
            }`}
          >
            {step < currentStep ? "✓" : step}
          </div>
          {step < totalSteps && (
            <div
              className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                step < currentStep ? "bg-accent" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}