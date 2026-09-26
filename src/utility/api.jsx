import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash-lite' });

export default async function callGemini(inputMessage, chatMessages = []){

    console.log(inputMessage)

    const geminiHistory = chatMessages.map(msg => ({
        role: msg.sender == 'user' ? 'user' : 'model',
        parts: [{ text: msg.message }],
    }));

    console.log(geminiHistory)
    console.log(chatMessages)

    const geminiChat = model.startChat({
        history: geminiHistory
    });
    try{
     const result = await geminiChat.sendMessage(inputMessage);
     console.log(result)
     return result.response.text();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
         return `Error: ${errorMessage}`;
    }
}
