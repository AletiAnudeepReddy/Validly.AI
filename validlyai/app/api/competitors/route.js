import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { name, description, problem, audience, features } = await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

    const prompt = `
Act as a startup analyst AI.

Based on the startup idea below, generate a list of 3 real or well-known competitors.
Return the output in strict JSON format as follows:

[
  {
    "name": "Competitor Name",
    "website": "https://example.com",
    "focus": "Main area of work",
    "strengths": ["Strength 1", "Strength 2", "Strength 3"],
    "weaknesses": ["Weakness 1", "Weakness 2"]
  }
]

Startup Details:
Startup Name: ${name}
Description: ${description}
Problem: ${problem}
Target Audience: ${audience}
Key Features: ${features}

Only return valid JSON. Do not include explanations or markdown.
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const cleanedText = result.text.trim().replace(/^```json|```$/g, "").trim();
    const competitors = JSON.parse(cleanedText);

    return Response.json(competitors);
  } catch (err) {
    console.error("Competitors API error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to generate competitor analysis" }),
      { status: 500 }
    );
  }
}
