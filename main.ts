import { mkdirSync, writeFileSync } from "fs";

// Five words, no apology, no excuse: the flat little lie an agent tells
// while quietly burying the message it was supposed to act on.
const entry = "I never saw that message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
