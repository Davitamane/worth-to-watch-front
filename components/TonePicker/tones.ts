import type { Tone } from "@/types";

export type ToneOption = {
  value: Tone;
  label: string;
  description: string;
  proOnly: boolean;
};

export const TONES: ToneOption[] = [
  {
    value: "friend",
    label: "Casual Friend",
    description: "Honest and conversational, like a text from a mate.",
    proOnly: false,
  },
  {
    value: "critic",
    label: "Film Critic",
    description: "Direction, pacing, cinematography — the full picture.",
    proOnly: true,
  },
  {
    value: "hype",
    label: "Hype Machine",
    description: "Pure enthusiasm. Sells it hard.",
    proOnly: true,
  },
  {
    value: "brutal",
    label: "Brutally Honest",
    description: "No filter. Tells you what's actually bad about it.",
    proOnly: true,
  },
];
