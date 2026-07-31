import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY;

export const hasGeminiApiKey = Boolean(apiKey);

export const ai = new GoogleGenAI({
  apiKey,
});
