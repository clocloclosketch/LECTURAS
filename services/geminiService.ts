
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStudyAssistance = async (readingTitle: string, userQuestion: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Eres un tutor experto en literatura española y lingüística. Estás ayudando a un estudiante a preparar un examen sobre la lectura: ${readingTitle}.
        
        Basándote en este contexto del resumen del estudiante:
        ${context}
        
        Responde a la siguiente duda de forma súper rápida, clara y con puntos clave (bullets):
        "${userQuestion}"
      `,
    });
    return response.text || "Lo siento, no pude procesar la respuesta. Inténtalo de nuevo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error al conectar con el tutor virtual. Asegúrate de que la API Key sea válida.";
  }
};
