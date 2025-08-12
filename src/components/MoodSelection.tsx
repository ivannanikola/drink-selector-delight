interface MoodSelectionProps {
  selectedMood: "sleepy" | "happy" | "calm" | "energetic" | "creative" | null;
  onSelect: (mood: "sleepy" | "happy" | "calm" | "energetic" | "creative") => void;
  category: "coffee" | "matcha";
}

export default function MoodSelection({ selectedMood, onSelect, category }: MoodSelectionProps) {
  const moodOptions = [
    { value: "sleepy", emoji: "😴", label: "Sleepy", description: "Need a gentle wake-up" },
    { value: "happy", emoji: "😊", label: "Happy", description: "Feeling cheerful" },
    { value: "calm", emoji: "😌", label: "Calm", description: "Peaceful and relaxed" },
    { value: "energetic", emoji: "🚀", label: "Energetic", description: "Ready for action" },
    { value: "creative", emoji: "💡", label: "Creative", description: "Inspiration needed" },
  ];

  return (
    <div className={`space-y-6 ${category}-theme`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          How are you feeling?
        </h2>
        <p className="text-muted-foreground">Choose your current mood</p>
      </div>

      <div className="grid gap-3">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value as any)}
            className={`selection-button ${
              selectedMood === option.value ? "selected" : ""
            }`}
          >
            <span className="emoji-icon">{option.emoji}</span>
            <h3 className="text-lg font-medium">{option.label}</h3>
            <p className="text-sm opacity-80 mt-1">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}