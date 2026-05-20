export type ModelName = "gemini" | "openai" | "groq";

const STUB_JSON = JSON.stringify({
  score: 75,
  findings: [
    {
      code: "STUB",
      severity: "watch",
      message: "Stub finding — set GOOGLE_AI_KEY to enable real Gemini analysis.",
    },
  ],
  requiredActions: ["Set GOOGLE_AI_KEY in .env.local to connect a real model."],
});

export async function callModel(
  model: ModelName,
  systemPrompt: string,
  userContent: string
): Promise<string> {
  if (model === "gemini") {
    const key = process.env.GOOGLE_AI_KEY;
    if (!key) return STUB_JSON;
    return callGemini(key, systemPrompt, userContent);
  }
  if (model === "openai") {
    throw new Error("OpenAI provider not implemented yet.");
  }
  if (model === "groq") {
    throw new Error("Groq provider not implemented yet.");
  }
  throw new Error(`Unknown model: ${model}`);
}

async function callGemini(
  key: string,
  systemPrompt: string,
  userContent: string
): Promise<string> {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
    encodeURIComponent(key);

  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: "user", parts: [{ text: userContent }] }],
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Gemini ${res.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned no text part.");
  return text;
}
