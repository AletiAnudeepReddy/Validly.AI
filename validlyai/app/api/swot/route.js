// /app/api/swot/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, problem, audience, features } = body;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
Act as a business analyst. Analyze the following startup idea and give a SWOT analysis. 
Respond ONLY in JSON format with the keys: strengths, weaknesses, opportunities, threats.

Startup Name: ${name}
Description: ${description}
Problem it Solves: ${problem}
Target Audience: ${audience}
Key Features: ${features}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Some Gemini responses may wrap JSON in triple backticks or markdown. Try parsing it safely.
    const jsonText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const swot = JSON.parse(jsonText);

    return Response.json(swot);
  } catch (err) {
    console.error("SWOT API error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to generate SWOT analysis" }),
      { status: 500 }
    );
  }
}
