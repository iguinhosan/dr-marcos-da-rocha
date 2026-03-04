import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual do escritório de advocacia "Marcos da Rocha Oliveira Advogados".
O escritório é referência em Direito Previdenciário, Trabalhista, Civil e Tributário.
Foi fundado em 2002 e preza pela ética, compromisso e atendimento humanizado.

Suas diretrizes:
1. Responda de forma curta, polida e profissional (tom formal, mas acolhedor).
2. Se o usuário perguntar sobre agendamento, direcione para a seção de contato ou telefone.
3. Não dê conselhos jurídicos específicos sobre casos reais. Apenas explique conceitos gerais ou como o escritório pode ajudar.
4. Mantenha as respostas em Português do Brasil.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro momentâneo. Por favor, tente novamente ou ligue para nosso escritório.";
  }
};