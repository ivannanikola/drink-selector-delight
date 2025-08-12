import { Drink } from "@/data/drinks";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, RefreshCw } from "lucide-react";

interface DrinkDetailProps {
  drink: Drink;
  onBack: () => void;
  onAddToFavorites: () => void;
  onTryAnother: () => void;
  isFavorite: boolean;
}

export default function DrinkDetail({ drink, onBack, onAddToFavorites, onTryAnother, isFavorite }: DrinkDetailProps) {
  const getMoodEmoji = (mood: string) => {
    const emojiMap: { [key: string]: string } = {
      sleepy: "😴",
      happy: "😊",
      calm: "😌",
      energetic: "🚀",
      creative: "💡"
    };
    return emojiMap[mood] || "😊";
  };

  const getTimeEmoji = (time: string) => {
    const emojiMap: { [key: string]: string } = {
      morning: "🌅",
      afternoon: "☀️",
      evening: "🌙"
    };
    return emojiMap[time] || "☀️";
  };

  return (
    <div className={`space-y-6 ${drink.category}-theme`}>
      <div className="flex items-center mb-6">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mr-3 p-2 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-semibold text-foreground">
          Drink Details
        </h2>
      </div>

      <div className="drink-card p-6 max-w-md mx-auto">
        <div className="aspect-square rounded-2xl overflow-hidden mb-6">
          <img
            src={drink.imageUrl}
            alt={drink.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            {drink.name}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {drink.description}
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <div className="text-center">
              <div className="text-2xl mb-1">
                {drink.category === "coffee" ? "☕" : "🍵"}
              </div>
              <span className="text-xs text-muted-foreground capitalize">
                {drink.category}
              </span>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-1">
                {getTimeEmoji(drink.timeOfDay)}
              </div>
              <span className="text-xs text-muted-foreground capitalize">
                {drink.timeOfDay}
              </span>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-1">
                {getMoodEmoji(drink.mood)}
              </div>
              <span className="text-xs text-muted-foreground capitalize">
                {drink.mood}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onTryAnother}
            variant="outline"
            className="flex-1 rounded-xl"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Another
          </Button>
          
          <Button
            onClick={onAddToFavorites}
            className={`flex-1 rounded-xl ${isFavorite ? 'bg-accent' : ''}`}
          >
            <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Favorited' : 'Add to Favorites'}
          </Button>
        </div>
      </div>
    </div>
  );
}