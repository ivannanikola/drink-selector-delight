import { Drink } from "@/data/drinks";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";

interface FavoritesScreenProps {
  favorites: Drink[];
  onBack: () => void;
  onRemoveFavorite: (drink: Drink) => void;
  onViewDrink: (drink: Drink) => void;
}

export default function FavoritesScreen({ favorites, onBack, onRemoveFavorite, onViewDrink }: FavoritesScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-8">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mr-3 p-2 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Your Favorites
          </h2>
          <p className="text-muted-foreground">
            {favorites.length} saved {favorites.length === 1 ? 'drink' : 'drinks'}
          </p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💔</div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No favorites yet
          </h3>
          <p className="text-muted-foreground">
            Start discovering drinks to build your collection!
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {favorites.map((drink, index) => (
            <div
              key={index}
              className={`drink-card p-4 cursor-pointer hover:scale-[1.02] ${drink.category}-theme`}
              onClick={() => onViewDrink(drink)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={drink.imageUrl}
                    alt={drink.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-medium text-foreground">
                    {drink.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {drink.description}
                  </p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-xs px-2 py-1 rounded-lg bg-muted text-muted-foreground">
                      {drink.category}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-lg bg-muted text-muted-foreground">
                      {drink.timeOfDay}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFavorite(drink);
                  }}
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive p-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}