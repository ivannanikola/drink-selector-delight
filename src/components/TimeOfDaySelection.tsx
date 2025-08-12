interface TimeOfDaySelectionProps {
  selectedTime: "morning" | "afternoon" | "evening" | null;
  onSelect: (time: "morning" | "afternoon" | "evening") => void;
  category: "coffee" | "matcha";
}

export default function TimeOfDaySelection({ selectedTime, onSelect, category }: TimeOfDaySelectionProps) {
  const timeOptions = [
    { value: "morning", emoji: "🌅", label: "Morning", description: "Start your day right" },
    { value: "afternoon", emoji: "☀️", label: "Afternoon", description: "Midday boost" },
    { value: "evening", emoji: "🌙", label: "Evening", description: "Wind down time" },
  ];

  return (
    <div className={`space-y-6 ${category}-theme`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          What time is it?
        </h2>
        <p className="text-muted-foreground">When do you want to enjoy your drink?</p>
      </div>

      <div className="grid gap-4">
        {timeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value as "morning" | "afternoon" | "evening")}
            className={`selection-button ${
              selectedTime === option.value ? "selected" : ""
            }`}
          >
            <span className="emoji-icon">{option.emoji}</span>
            <h3 className="text-xl font-medium">{option.label}</h3>
            <p className="text-sm opacity-80 mt-1">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}