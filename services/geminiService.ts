
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

export const getDailyReflection = async (lang: Language): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  let prompt = "";
  if (lang === 'zh') {
    prompt = "生成一句简短、冷静且具有探索性的感悟，关于 AI、人类和商业的交汇。保持真诚和诗意。不超过 30 个字。";
  } else if (lang === 'de') {
    prompt = "Erzeuge einen kurzen, ruhigen und forschenden Ein-Satz-Gedanken über die Schnittstelle von KI, Menschheit und Wirtschaft. Bleib ehrlich und poetisch. Maximal 20 Wörter.";
  } else {
    prompt = "Generate a short, calm, and exploratory one-sentence reflection about the intersection of AI, humanity, and business. Keep it honest and poetic. Maximum 20 words.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    
    const fallback = {
      en: "Staying curious, one step at a time.",
      zh: "保持好奇，步履不停。",
      de: "Bleib neugierig, Schritt für Schritt."
    };
    
    return response.text || fallback[lang];
  } catch (error) {
    console.error("Error fetching reflection:", error);
    const errorFallback = {
      en: "Exploring the quiet spaces between technology and life.",
      zh: "在技术与生活的缝隙中安静探索。",
      de: "Die stillen Räume zwischen Technologie und Leben erkunden."
    };
    return errorFallback[lang];
  }
};
