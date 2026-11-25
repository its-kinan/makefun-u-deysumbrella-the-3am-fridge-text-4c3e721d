import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text — revised (122 chars, under the 140-char gate).
// Cut the throat-clearing ("Just so you know", "I watched the whole
// thing") and the wordy "only appliance" so the punchline lands on a lock
// screen: the fridge, awake all night, is the only one in the kitchen
// still pretending its owner has self-control. Fresh angle, not milk,
// ice, or a door left open. Deterministic: one fixed string, no network,
// no clock, no randomness. Writes it to /output/entry.txt.
const text =
  "3am. The leftovers are gone, the light is on, and I am the only one in this kitchen still pretending we have self-control.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
