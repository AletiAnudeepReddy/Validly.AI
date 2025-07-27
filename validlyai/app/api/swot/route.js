import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { name, description, problem, audience, features } = await req.json();
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API }); // your key env

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",  // or "gemini‑2.0‑flash" depending on availability
      contents: `Act as a business analyst. Provide a SWOT as JSON: { strengths, weaknesses, opportunities, threats }. \n\nStartup Name: ${name}\nDescription: ${description}\nProblem: ${problem}\nAudience: ${audience}\nFeatures: ${features}`
    });

    const cleanedText = result.text.trim().replace(/^```json|```$/g, "").trim();
const swot = JSON.parse(cleanedText);
    return Response.json(swot);
  } catch (err) {
    console.error("SWOT API error:", err);
    return new Response(JSON.stringify({ error: "Failed to generate SWOT analysis" }), { status: 500 });
  }
}
