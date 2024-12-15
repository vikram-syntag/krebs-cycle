export const KREBS_CYCLE_STEPS = [
  {
    name: "Citrate Formation",
    description: "Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C)",
    answer: "citrate",
  },
  {
    name: "Isomerization",
    description: "Citrate is converted to ___ through cis-aconitate",
    answer: "isocitrate",
  },
  {
    name: "First Decarboxylation",
    description: "___ is oxidized to α-ketoglutarate, producing NADH and CO₂",
    answer: "isocitrate",
  },
  {
    name: "Second Decarboxylation",
    description: "α-Ketoglutarate is converted to ___, generating NADH and CO₂",
    answer: "succinyl-coa",
  },
  {
    name: "ATP/GTP Production",
    description: "Succinyl-CoA is converted to ___, coupled with ATP/GTP generation",
    answer: "succinate",
  },
  {
    name: "Oxidation of Succinate",
    description: "Succinate is oxidized to ___, producing FADH₂",
    answer: "fumarate",
  },
  {
    name: "Hydration",
    description: "Fumarate is hydrated to ___",
    answer: "malate",
  },
  {
    name: "Regeneration",
    description: "___ is oxidized to oxaloacetate, producing NADH",
    answer: "malate",
  },
] as const;

export const MOLECULES = [
  { name: "Citrate", color: "#FF6B6B" },
  { name: "Isocitrate", color: "#4ECDC4" },
  { name: "α-Ketoglutarate", color: "#45B7D1" },
  { name: "Succinyl-CoA", color: "#96CEB4" },
  { name: "Succinate", color: "#FFEEAD" },
  { name: "Fumarate", color: "#D4A5A5" },
  { name: "Malate", color: "#9B59B6" },
  { name: "Oxaloacetate", color: "#E74C3C" },
] as const;