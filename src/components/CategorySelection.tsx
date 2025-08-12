interface CategorySelectionProps {
  selectedCategory: "coffee" | "matcha" | null;
  onSelect: (category: "coffee" | "matcha") => void;
}

export default function CategorySelection({ selectedCategory, onSelect }: CategorySelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          What's your drink preference?
        </h2>
        <p className="text-muted-foreground">Choose your favorite category</p>
      </div>

      <div className="grid gap-4">
        <button
          onClick={() => onSelect("coffee")}
          className={`selection-button ${
            selectedCategory === "coffee" ? "selected coffee-theme" : ""
          }`}
        >
          <span className="emoji-icon">☕</span>
          <h3 className="text-xl font-medium">Coffee</h3>
          <p className="text-sm opacity-80 mt-1">Rich, bold, and energizing</p>
        </button>

        <button
          onClick={() => onSelect("matcha")}
          className={`selection-button ${
            selectedCategory === "matcha" ? "selected matcha-theme" : ""
          }`}
        >
          <span className="emoji-icon">🍵</span>
          <h3 className="text-xl font-medium">Matcha</h3>
          <p className="text-sm opacity-80 mt-1">Smooth, zen, and refreshing</p>
        </button>
      </div>
    </div>
  );
}