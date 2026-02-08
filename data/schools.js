const schools = [
  /* =========================
     1er CERCLE – PRIMORDIALES
     ========================= */

  {
    id: "transmutation",
    name: "Transmutation",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de la forme, de la structure et de l’état des éléments non vivants."
  },
  {
    id: "esoterisme",
    name: "Ésotérisme",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation directe du mana et de ses flux."
  },
  {
    id: "psychomancie",
    name: "Psychomancie",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de l’esprit et de la pensée."
  },

  /* =========================
     2e CERCLE – SUBLIMATIONS
     ========================= */

  {
    id: "psychurgie",
    name: "Psychurgie",
    circle: 2,
    type: "sublimation",
    parents: ["psychomancie"],
    description: "Modelage et altération de la matière psychique."
  },
  {
    id: "evocation",
    name: "Évocation",
    circle: 2,
    type: "sublimation",
    parents: ["esoterisme"],
    description: "Manifestation physique et énergétique du mana."
  },
  {
    id: "vegetomancie",
    name: "Végémancie",
    circle: 2,
    type: "sublimation",
    parents: ["transmutation"],
    description: "Contrôle et modification de la vie végétale."
  },
  {
    id: "creation_transmutation",
    name: "Création (Transmutation)",
    circle: 2,
    type: "sublimation",
    parents: ["transmutation"],
    description: "Création directe de matière issue de la magie mère."
  },

  /* ===============================
     2e CERCLE – TRANSCENDANTALES
     =============================== */

  {
    id: "projection",
    name: "Projection",
    circle: 2,
    type: "transcendantale",
    parents: ["psychomancie", "esoterisme"],
    description: "Implémentation de la psyché dans le mana pour agir à distance."
  },
  {
    id: "enchantement",
    name: "Enchantement",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "esoterisme"],
    description: "Implantation de comportements arcaniques dans la matière."
  },
  {
    id: "psychometrie",
    name: "Psychométrie",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "psychomancie"],
    description: "Lecture et altération des empreintes psychiques de la matière."
  },

  /* =========================
     3e CERCLE – SUBLIMATIONS
     ========================= */

  {
    id: "psychophorie",
    name: "Psychophorie",
    circle: 3,
    type: "sublimation",
    parents: ["psychurgie"],
    description: "Création et application de pseudo-esprits sur des cibles."
  },
  {
    id: "pyromancie",
    name: "Pyromancie",
    circle: 3,
    type: "sublimation",
    parents: ["evocation"],
    description: "Maîtrise du feu comme manifestation stable du mana."
  },
  {
    id: "vivimancie",
    name: "Vivimancie",
    circle: 3,
    type: "sublimation",
    parents: ["vegetomancie"],
    description: "Manipulation de la vie organique et de ses processus."
  },

  /* =========================
     4e CERCLE – SUBLIMATIONS
     ========================= */

  {
    id: "fulguromancie",
    name: "Fulguromancie",
    circle: 4,
    type: "sublimation",
    parents: ["pyromancie"],
    description: "Contrôle des décharges électriques et de l’énergie fulgurante."
  },
  {
    id: "cadaveromancie",
    name: "Cadavéromancie",
    circle: 4,
    type: "sublimation",
    parents: ["vivimancie"],
    description: "Manipulation des corps morts et des restes de vie organique."
  },
  {
    id: "psychodomination",
    name: "Psychodomination",
    circle: 4,
    type: "sublimation",
    parents: ["psychophorie"],
    description: "Imposition de la volonté et du contrôle mental sur autrui."
  },

  /* =========================
     5e CERCLE – SUBLIMATIONS
     ========================= */

  {
    id: "luminomancie",
    name: "Luminomancie",
    circle: 5,
    type: "sublimation",
    parents: ["fulguromancie"],
    description: "Manipulation de la lumière et des radiations énergétiques."
  },
  {
    id: "alteromancie",
    name: "Altéromancie",
    circle: 5,
    type: "sublimation",
    parents: ["cadaveromancie"],
    description: "Transformation instable et profonde des formes de vie."
  },
  {
    id: "divination",
    name: "Divination",
    circle: 5,
    type: "sublimation",
    parents: ["psychodomination"],
    description: "Perception et interprétation des informations cachées."
  },

  /* =========================
     6e CERCLE – SUBLIMATIONS
     ========================= */

  {
    id: "nucleomancie",
    name: "Nucléomancie",
    circle: 6,
    type: "sublimation",
    parents: ["luminomancie"],
    description: "Manipulation des forces fondamentales contenues dans la matière."
  },
  {
    id: "apotheomancie",
    name: "Apothéomancie",
    circle: 6,
    type: "sublimation",
    parents: ["alteromancie"],
    description: "Altération et élévation ultime de l’essence vitale."
  },
  {
    id: "emperomancie",
    name: "Emperomancie",
    circle: 6,
    type: "sublimation",
    parents: ["divination"],
    description: "Suprématie de l’esprit sur la perception et la destinée."
  }
];
