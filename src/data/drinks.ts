export interface Drink {
  category: "coffee" | "matcha";
  timeOfDay: "morning" | "afternoon" | "evening";
  mood: "sleepy" | "happy" | "calm" | "energetic" | "creative";
  name: string;
  description: string;
  imageUrl: string;
}

export const drinks = [
  // MATCHA — MORNING
  { category: "matcha", timeOfDay: "morning", mood: "sleepy",    name: "Matcha Latte with Honey", description: "Soft, sweet boost for a gentle wake‑up.", imageUrl: " /images/ 1.png" },
  { category: "matcha", timeOfDay: "morning", mood: "happy",     name: "Coconut Matcha",           description: "Tropical twist for a cheerful morning.", imageUrl: "https://source.unsplash.com/600x400/?matcha+coconut" },
  { category: "matcha", timeOfDay: "morning", mood: "calm",      name: "Traditional Hot Matcha",   description: "Meditation in a cup.",                   imageUrl: "https://source.unsplash.com/600x400/?matcha+tea" },
  { category: "matcha", timeOfDay: "morning", mood: "energetic", name: "Ginger Matcha",            description: "Extra kick for your day.",               imageUrl: "https://source.unsplash.com/600x400/?matcha+ginger" },
  { category: "matcha", timeOfDay: "morning", mood: "creative",  name: "Lavender Matcha",          description: "Unusual aroma for inspiration.",         imageUrl: "https://source.unsplash.com/600x400/?matcha+lavender" },

  // MATCHA — AFTERNOON
  { category: "matcha", timeOfDay: "afternoon", mood: "sleepy",    name: "Matcha Frappe",          description: "Cool and refreshing energy boost.",       imageUrl: "https://source.unsplash.com/600x400/?matcha+frappe" },
  { category: "matcha", timeOfDay: "afternoon", mood: "happy",     name: "Strawberry Matcha",      description: "Bright and sweet combination.",           imageUrl: "https://source.unsplash.com/600x400/?matcha+strawberry" },
  { category: "matcha", timeOfDay: "afternoon", mood: "calm",      name: "Vanilla Matcha Latte",   description: "Gentle balance for your afternoon.",      imageUrl: "https://source.unsplash.com/600x400/?matcha+vanilla+latte" },
  { category: "matcha", timeOfDay: "afternoon", mood: "energetic", name: "Lemon Matcha",           description: "Refreshing and energizing.",              imageUrl: "https://source.unsplash.com/600x400/?matcha+lemon" },
  { category: "matcha", timeOfDay: "afternoon", mood: "creative",  name: "Mint Matcha",            description: "Surprising mix to boost creativity.",      imageUrl: "https://source.unsplash.com/600x400/?matcha+mint" },

  // MATCHA — EVENING
  { category: "matcha", timeOfDay: "evening", mood: "sleepy",    name: "Warm Almond Milk Matcha", description: "Relaxing and cozy drink.",                 imageUrl: "https://source.unsplash.com/600x400/?matcha+almond+milk" },
  { category: "matcha", timeOfDay: "evening", mood: "happy",     name: "Matcha with Marshmallow", description: "Sweet evening treat.",                     imageUrl: "https://source.unsplash.com/600x400/?matcha+marshmallow" },
  { category: "matcha", timeOfDay: "evening", mood: "calm",      name: "Cardamom Matcha",         description: "Soothes your mind.",                       imageUrl: "https://source.unsplash.com/600x400/?matcha+cardamom" },
  { category: "matcha", timeOfDay: "evening", mood: "energetic", name: "Cinnamon Matcha",         description: "Warms and inspires.",                      imageUrl: "https://source.unsplash.com/600x400/?matcha+cinnamon" },
  { category: "matcha", timeOfDay: "evening", mood: "creative",  name: "Honey Orange Matcha",     description: "Bright mix before night.",                 imageUrl: "https://source.unsplash.com/600x400/?matcha+orange+honey" },

  // COFFEE — MORNING
  { category: "coffee", timeOfDay: "morning", mood: "sleepy",    name: "Vanilla Latte",                description: "Soft morning wake‑up.",                 imageUrl: "https://source.unsplash.com/600x400/?coffee+vanilla+latte" },
  { category: "coffee", timeOfDay: "morning", mood: "happy",     name: "Caramel Cappuccino",           description: "Sweet morning joy.",                    imageUrl: "https://source.unsplash.com/600x400/?cappuccino+caramel" },
  { category: "coffee", timeOfDay: "morning", mood: "calm",      name: "Americano with Cinnamon",      description: "Simple and warm.",                      imageUrl: "https://source.unsplash.com/600x400/?americano+coffee" },
  { category: "coffee", timeOfDay: "morning", mood: "energetic", name: "Double Espresso",              description: "Instant strong start.",                  imageUrl: "https://source.unsplash.com/600x400/?espresso+double" },
  { category: "coffee", timeOfDay: "morning", mood: "creative",  name: "Flat White with Chocolate",    description: "Inspiration in every sip.",              imageUrl: "https://source.unsplash.com/600x400/?flat+white+coffee+chocolate" },

  // COFFEE — AFTERNOON
  { category: "coffee", timeOfDay: "afternoon", mood: "sleepy",    name: "Iced Latte",                   description: "Cool midday charge.",                  imageUrl: "https://source.unsplash.com/600x400/?iced+latte" },
  { category: "coffee", timeOfDay: "afternoon", mood: "happy",     name: "Mocha with Whipped Cream",     description: "Dessert in a cup.",                    imageUrl: "https://source.unsplash.com/600x400/?mocha+coffee" },
  { category: "coffee", timeOfDay: "afternoon", mood: "calm",      name: "Almond Milk Latte",            description: "Gentle midday balance.",               imageUrl: "https://source.unsplash.com/600x400/?almond+milk+latte" },
  { category: "coffee", timeOfDay: "afternoon", mood: "energetic", name: "Irish Coffee (non‑alcoholic)", description: "Bold afternoon choice.",                imageUrl: "https://source.unsplash.com/600x400/?irish+coffee" },
  { category: "coffee", timeOfDay: "afternoon", mood: "creative",  name: "Citrus Raf Coffee",            description: "Burst of aroma and creativity.",        imageUrl: "https://source.unsplash.com/600x400/?raf+coffee+citrus" },

  // COFFEE — EVENING
  { category: "coffee", timeOfDay: "evening", mood: "sleepy",    name: "Decaf Cappuccino",              description: "Warm and light.",                      imageUrl: "https://source.unsplash.com/600x400/?decaf+cappuccino" },
  { category: "coffee", timeOfDay: "evening", mood: "happy",     name: "Vanilla Frappe",                 description: "Evening delight.",                     imageUrl: "https://source.unsplash.com/600x400/?vanilla+frappe" },
  { category: "coffee", timeOfDay: "evening", mood: "calm",      name: "Cardamom Coffee",                description: "Cozy evening ritual.",                 imageUrl: "https://source.unsplash.com/600x400/?coffee+cardamom" },
  { category: "coffee", timeOfDay: "evening", mood: "energetic", name: "Ristretto",                      description: "Short but strong finish to the day.",  imageUrl: "https://source.unsplash.com/600x400/?ristretto+coffee" },
  { category: "coffee", timeOfDay: "evening", mood: "creative",  name: "Coffee with Cinnamon & Orange", description: "Warm and creative taste.",              imageUrl: "https://source.unsplash.com/600x400/?coffee+cinnamon+orange" }
];
export default drinks;
