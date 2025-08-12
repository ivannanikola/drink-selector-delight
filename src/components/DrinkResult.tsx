import { Drink } from "@/data/drinks";
import { Button } from "@/components/ui/button";
import { Heart, RefreshCw } from "lucide-react";

interface DrinkResultProps {
  drink: Drink;
  onTryAnother: () => void;
  onAddToFavorites: () => void;
  isFavorite: boolean;
}

export default function DrinkResult({ drink, onTryAnother, onAddToFavorites, isFavorite }: DrinkResultProps) {
  return (
    <div className={`space-y-6 ${drink.category}-theme`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Your Perfect Drink
        </h2>
        <p className="text-muted-foreground">Based on your preferences</p>
      </div>

      <div className="drink-card p-6 max-w-md mx-auto">
        <div className="aspect-square rounded-2xl overflow-hidden mb-4">
          <img
            src={drink.imageUrl}
            alt={drink.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {drink.name}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {drink.description}
          </p>

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
    </div>
  );
}