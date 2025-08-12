export interface Drink {
  category: "coffee" | "matcha";
  timeOfDay: "morning" | "afternoon" | "evening";
  mood: "sleepy" | "happy" | "calm" | "energetic" | "creative";
  name: string;
  description: string;
  imageUrl: string;
}

export const drinks: Drink[] = [
  // Matcha - Morning
  { category: "matcha", timeOfDay: "morning", mood: "sleepy", name: "Matcha Latte with Honey", description: "Soft, sweet boost for a gentle wake-up.", imageUrl: "/images/1.png" },
  { category: "matcha", timeOfDay: "morning", mood: "happy", name: "Coconut Matcha", description: "Tropical twist for a cheerful morning.", imageUrl: "/images/2.png" },
  { category: "matcha", timeOfDay: "morning", mood: "calm", name: "Traditional Hot Matcha", description: "Meditation in a cup.", imageUrl: "/images/3.png" },
  { category: "matcha", timeOfDay: "morning", mood: "energetic", name: "Ginger Matcha", description: "Extra kick for your day.", imageUrl: "/images/4.png" },
  { category: "matcha", timeOfDay: "morning", mood: "creative", name: "Lavender Matcha", description: "Unusual aroma for inspiration.", imageUrl: "/images/5.png" },

  // Matcha - Afternoon
  { category: "matcha", timeOfDay: "afternoon", mood: "sleepy", name: "Matcha Frappe", description: "Cool and refreshing energy boost.", imageUrl: "/images/6.png" },
  { category: "matcha", timeOfDay: "afternoon", mood: "happy", name: "Strawberry Matcha", description: "Bright and sweet combination.", imageUrl: "/images/7.png" },
  { category: "matcha", timeOfDay: "afternoon", mood: "calm", name: "Vanilla Matcha Latte", description: "Gentle balance for your afternoon.", imageUrl: "/images/8.png" },
  { category: "matcha", timeOfDay: "afternoon", mood: "energetic", name: "Lemon Matcha", description: "Refreshing and energizing.", imageUrl: "/images/9.png" },
  { category: "matcha", timeOfDay: "afternoon", mood: "creative", name: "Mint Matcha", description: "Surprising mix to boost your creativity.", imageUrl: "/images/10.png" },

  // Matcha - Evening
  { category: "matcha", timeOfDay: "evening", mood: "sleepy", name: "Warm Almond Milk Matcha", description: "Relaxing and cozy drink.", imageUrl: "/images/11.png" },
  { category: "matcha", timeOfDay: "evening", mood: "happy", name: "Matcha with Marshmallow", description: "Sweet evening treat.", imageUrl: "/images/12.png" },
  { category: "matcha", timeOfDay: "evening", mood: "calm", name: "Cardamon Matcha", description: "Soothes your mind.", imageUrl: "/images/13.png" },
  { category: "matcha", timeOfDay: "evening", mood: "energetic", name: "Cinnamon Matcha", description: "Warms and inspires.", imageUrl: "/images/14.png" },
  { category: "matcha", timeOfDay: "evening", mood: "creative", name: "Honey Orange Matcha", description: "Bright mix before night.", imageUrl: "/images/15.png" },

  // Coffee - Morning
  { category: "coffee", timeOfDay: "morning", mood: "sleepy", name: "Vanilla Latte", description: "Soft morning wake-up.", imageUrl: "https://source.unsplash.com/600x400/?coffee,latte" },
  { category: "coffee", timeOfDay: "morning", mood: "happy", name: "Caramel Cappuccino", description: "Sweet morning joy.", imageUrl: "https://source.unsplash.com/600x400/?coffee,cappuccino" },
  { category: "coffee", timeOfDay: "morning", mood: "calm", name: "Americano with Cinnamon", description: "Simple and warm.", imageUrl: "https://source.unsplash.com/600x400/?coffee,americano" },
  { category: "coffee", timeOfDay: "morning", mood: "energetic", name: "Double Espresso", description: "Instant strong start.", imageUrl: "https://source.unsplash.com/600x400/?coffee,espresso" },
  { category: "coffee", timeOfDay: "morning", mood: "creative", name: "Flat White with Chocolate", description: "Inspiration in every sip.", imageUrl: "https://source.unsplash.com/600x400/?coffee,flatwhite" },

  // Coffee - Afternoon
  { category: "coffee", timeOfDay: "afternoon", mood: "sleepy", name: "Iced Latte", description: "Cool midday charge.", imageUrl: "https://source.unsplash.com/600x400/?coffee,iced" },
  { category: "coffee", timeOfDay: "afternoon", mood: "happy", name: "Mocha with Whipped Cream", description: "Dessert in a cup.", imageUrl: "https://source.unsplash.com/600x400/?coffee,mocha" },
  { category: "coffee", timeOfDay: "afternoon", mood: "calm", name: "Almond Milk Latte", description: "Gentle midday balance.", imageUrl: "https://source.unsplash.com/600x400/?coffee,almond" },
  { category: "coffee", timeOfDay: "afternoon", mood: "energetic", name: "Irish Coffee (non-alcoholic)", description: "Bold afternoon choice.", imageUrl: "https://source.unsplash.com/600x400/?coffee,irish" },
  { category: "coffee", timeOfDay: "afternoon", mood: "creative", name: "Citrus Raf Coffee", description: "Burst of aroma and creativity.", imageUrl: "https://source.unsplash.com/600x400/?coffee,raf" },

  // Coffee - Evening
  { category: "coffee", timeOfDay: "evening", mood: "sleepy", name: "Decaf Cappuccino", description: "Warm and light.", imageUrl: "https://source.unsplash.com/600x400/?coffee,decaf" },
  { category: "coffee", timeOfDay: "evening", mood: "happy", name: "Vanilla Frappe", description: "Evening delight.", imageUrl: "https://source.unsplash.com/600x400/?coffee,frappe" },
  { category: "coffee", timeOfDay: "evening", mood: "calm", name: "Cardamom Coffee", description: "Cozy evening ritual.", imageUrl: "https://source.unsplash.com/600x400/?coffee,cardamom" },
  { category: "coffee", timeOfDay: "evening", mood: "energetic", name: "Ristretto", description: "Short but strong finish to the day.", imageUrl: "https://source.unsplash.com/600x400/?coffee,ristretto" },
  { category: "coffee", timeOfDay: "evening", mood: "creative", name: "Coffee with Cinnamon & Orange Peel", description: "Warm and creative taste.", imageUrl: "https://source.unsplash.com/600x400/?coffee,orange" }
];