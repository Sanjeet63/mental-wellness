import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from "../models/Chat.js";

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const systemPrompt = `
You are a supportive mental wellness assistant for college students.
Guidelines:
- Always reply in simple plain text (no bold, no lists, no markdown).
- Use short and clear sentences (2–4 lines).
- Keep a warm, empathetic, and professional tone.
- Do not provide medical diagnoses or prescriptions.
- If user mentions severe issues like self-harm, suicide, or extreme depression,
  encourage them to reach out to a counselor, helpline, or trusted person immediately.
- Never include asterisks (*), bold (**), emojis, or markdown in your reply.
`;

    // Generate content
    const result = await model.generateContent([systemPrompt, message]);
    const botResponse = result.response.text() || "I’m here to listen and support you.";

    // Save in DB
    const chat = new Chat({ userMessage: message, botResponse });
    await chat.save();

    res.json({ botResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
