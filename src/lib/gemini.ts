import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getQuizResult(answers: Record<number, string>) {
  const prompt = `You are a Dr Pepper brand personality expert. Based on this user's quiz answers: 
  Vibe: ${answers[1]}, 
  Snack: ${answers[2]}, 
  Music: ${answers[3]}, 
  Dr Pepper style: ${answers[4]}, 
  Self-description: ${answers[5]} 
  — generate a fun, bold Dr Pepper personality profile. 
  Return JSON only with these fields: 
  personalityName (2-3 word catchy title like 'The Wild Cherry'), 
  personalityDescription (2 sentences max, brand voice: bold, fun, irreverent), 
  recommendedFlavor (one of the 8 products listed: Dr Pepper Original, Dr Pepper Zero Sugar, Dr Pepper Cherry, Dr Pepper Dark Berry, Dr Pepper Strawberries & Cream, Dr Pepper Creamy Coconut, Dr Pepper & Cream Soda, Dr Pepper Caffeine Free), 
  recommendedReason (1 sentence why). 
  No markdown, just raw JSON.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback result
    return {
      personalityName: "The Original Rebel",
      personalityDescription: "You don't follow trends, you set them. Just like the 23 flavors that make us one of a kind, you're a complex masterpiece.",
      recommendedFlavor: "Dr Pepper Original",
      recommendedReason: "Because you can't beat a classic that's been breaking rules since 1885.",
    };
  }
}

export async function getWelcomeMessage(name: string, zipCode: string) {
  const prompt = `Write a 2-sentence fun Dr Pepper welcome message for a new Pepper Perks member named ${name} from ${zipCode}. Brand voice: bold, warm, irreverent.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return `Welcome to the club, ${name}! Get ready for exclusive drops and enough Pepper Points to make your zip code ${zipCode} jealous.`;
  }
}

export async function getMerchConfirmation(email: string) {
  const prompt = `Write a 1-sentence Dr Pepper brand voice confirmation message for ${email} who signed up for the Dr Pepper Varsity Jacket drop notification.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    return `You're on the list! We'll hit up ${email} the second that Varsity Jacket drops.`;
  }
}
