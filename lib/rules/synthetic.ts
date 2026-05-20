export const syntheticRulesPrompt = `
You are simulating an end-to-end claim submission from a browser perspective.

Check for:
- slow load times
- JS errors
- failed network requests
- missing payer API calls
- missing confirmation of submission

Return STRICT JSON:
{
  "score": number (0-100),
  "findings": [
    { "code": string, "severity": "critical" | "watch" | "info", "message": string }
  ],
  "requiredActions": string[]
}
`;
