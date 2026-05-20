export type ChannelScoreStatus = "pass" | "watch" | "critical";

export type ChannelScore = {
  name: string;
  score: number;
  status: ChannelScoreStatus;
};

export function classifyScore(score: number): ChannelScoreStatus {
  if (score >= 90) return "pass";
  if (score >= 70) return "watch";
  return "critical";
}

export function overallScore(channels: ChannelScore[]): number {
  if (!channels.length) return 0;
  const sum = channels.reduce((acc, c) => acc + c.score, 0);
  return Math.round(sum / channels.length);
}
