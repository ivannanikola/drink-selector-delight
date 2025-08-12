import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { drinks, Drink } from "@/data/drinks";
import StepIndicator from "@/components/StepIndicator";
import CategorySelection from "@/components/CategorySelection";
import TimeOfDaySelection from "@/components/TimeOfDaySelection";
import MoodSelection from "@/components/MoodSelection";
import DrinkResult from "@/components/DrinkResult";
import FavoritesScreen from "@/components/FavoritesScreen";
import DrinkDetail from "@/components/DrinkDetail";
import { useToast } from "@/hooks/use-toast";

type Step = "category" | "time" | "mood" | "result" | "favorites" | "detail";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("category");
  const [selectedCategory, setSelectedCategory] = useState<"coffee" | "matcha" | null>(null);
  const [selectedTime, setSelectedTime] = useState<"morning" | "afternoon" | "evening" | null>(null);
  const [selectedMood, setSelectedMood] = useState<"sleepy" | "happy" | "calm" | "energetic" | "creative" | null>(null);
  const [currentDrink, setCurrentDrink] = useState<Drink | null>(null);
  const [favorites, setFavorites] = useState<Drink[]>([]);
  const { toast } = useToast();

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("drinkFavorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("drinkFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const resetSelections = () => {
    setSelectedCategory(null);
    setSelectedTime(null);
    setSelectedMood(null);
    setCurrentDrink(null);
    setCurrentStep("category");
  };

  const handleCategorySelect = (category: "coffee" | "matcha") => {
    setSelectedCategory(category);
    setCurrentStep("time");
  };

  const handleTimeSelect = (time: "morning" | "afternoon" | "evening") => {
    setSelectedTime(time);
    setCurrentStep("mood");
  };

  const handleMoodSelect = (mood: "sleepy" | "happy" | "calm" | "energetic" | "creative") => {
    setSelectedMood(mood);
    
    // Find matching drink
    const matchingDrink = drinks.find(
      (drink) =>
        drink.category === selectedCategory &&
        drink.timeOfDay === selectedTime &&
        drink.mood === mood
    );

    if (matchingDrink) {
      setCurrentDrink(matchingDrink);
      setCurrentStep("result");
    }
  };

  const handleAddToFavorites = () => {
    if (!currentDrink) return;

    const isDuplicate = favorites.some(
      (fav) =>
        fav.category === currentDrink.category &&
        fav.timeOfDay === currentDrink.timeOfDay &&
        fav.mood === currentDrink.mood
    );

    if (isDuplicate) {
      toast({
        title: "Already in favorites!",
        description: "This drink is already saved to your favorites.",
      });
      return;
    }

    setFavorites((prev) => [...prev, currentDrink]);
    toast({
      title: "Added to favorites! ❤️",
      description: `${currentDrink.name} has been saved to your collection.`,
    });
  };

  const handleRemoveFromFavorites = (drinkToRemove: Drink) => {
    setFavorites((prev) =>
      prev.filter(
        (drink) =>
          !(
            drink.category === drinkToRemove.category &&
            drink.timeOfDay === drinkToRemove.timeOfDay &&
            drink.mood === drinkToRemove.mood
          )
      )
    );
    toast({
      title: "Removed from favorites",
      description: `${drinkToRemove.name} has been removed from your collection.`,
    });
  };

  const handleViewDrinkDetail = (drink: Drink) => {
    setCurrentDrink(drink);
    setCurrentStep("detail");
  };

  const isFavorite = (drink: Drink) => {
    return favorites.some(
      (fav) =>
        fav.category === drink.category &&
        fav.timeOfDay === drink.timeOfDay &&
        fav.mood === drink.mood
    );
  };

  const getStepNumber = () => {
    if (currentStep === "category") return 1;
    if (currentStep === "time") return 2;
    if (currentStep === "mood") return 3;
    return 4;
  };

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          What's Your Drink Today?
        </h1>
        <p className="text-muted-foreground">Find your perfect beverage match</p>
        
        {currentStep !== "favorites" && currentStep !== "detail" && (
          <Button
            onClick={() => setCurrentStep("favorites")}
            variant="ghost"
            className="mt-4 rounded-xl"
          >
            <Heart className="w-4 h-4 mr-2" />
            Favorites ({favorites.length})
          </Button>
        )}
      </div>

      {/* Step Indicator */}
      {["category", "time", "mood", "result"].includes(currentStep) && (
        <StepIndicator currentStep={getStepNumber()} totalSteps={3} />
      )}

      {/* Content */}
      <div className="pb-8">
        {currentStep === "category" && (
          <CategorySelection
            selectedCategory={selectedCategory}
            onSelect={handleCategorySelect}
          />
        )}

        {currentStep === "time" && selectedCategory && (
          <TimeOfDaySelection
            selectedTime={selectedTime}
            onSelect={handleTimeSelect}
            category={selectedCategory}
          />
        )}

        {currentStep === "mood" && selectedCategory && (
          <MoodSelection
            selectedMood={selectedMood}
            onSelect={handleMoodSelect}
            category={selectedCategory}
          />
        )}

        {currentStep === "result" && currentDrink && (
          <DrinkResult
            drink={currentDrink}
            onTryAnother={resetSelections}
            onAddToFavorites={handleAddToFavorites}
            isFavorite={isFavorite(currentDrink)}
          />
        )}

        {currentStep === "favorites" && (
          <FavoritesScreen
            favorites={favorites}
            onBack={() => setCurrentStep("category")}
            onRemoveFavorite={handleRemoveFromFavorites}
            onViewDrink={handleViewDrinkDetail}
          />
        )}

        {currentStep === "detail" && currentDrink && (
          <DrinkDetail
            drink={currentDrink}
            onBack={() => setCurrentStep("favorites")}
            onAddToFavorites={handleAddToFavorites}
            onTryAnother={() => {
              resetSelections();
            }}
            isFavorite={isFavorite(currentDrink)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;