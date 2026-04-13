export type Message = {
  role: "user" | "ai";
  text: string;
};

export const DUMMY_MESSAGES: Message[] = [
  { role: "user", text: "Is it okay for kids?" },
  {
    role: "ai",
    text: "Probably fine for 10+. No real violence or language issues, but some of the space-time concepts might go over younger kids' heads. The emotional ending hits harder for adults.",
  },
  { role: "user", text: "Who directed it?" },
  {
    role: "ai",
    text: "Christopher Nolan. He also did The Dark Knight trilogy, Inception, and Oppenheimer. At this point directing a masterpiece every few years is just his thing.",
  },
];
