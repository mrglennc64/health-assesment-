export function isValidEmail(input: unknown): input is string {
  if (typeof input !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}
