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
     2e CERCLE
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
     3e CERCLE
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
  {
    id: "cinemancie",
    name: "Cinémancie",
    circle: 3,
    type: "sublimation",
    parents: ["enchantement"],
    description: "Manipulation du mouvement et de l’inertie."
  },
  {
    id: "invocation",
    name: "Invocation",
    circle: 3,
    type: "sublimation",
    parents: ["projection"],
    description: "Appel et manifestation temporaire d’entités ou de forces."
  },
  {
    id: "nexomancie",
    name: "Nexomancie",
    circle: 3,
    type: "sublimation",
    parents: ["psychometrie"],
    description: "Manipulation des liens reliant lieux, objets et événements."
  },

  /* =========================
     4e CERCLE
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
    description: "Imposition directe de la volonté sur d’autres esprits."
  },
  {
    id: "harmonimancie",
    name: "Harmonimancie",
    circle: 4,
    type: "sublimation",
    parents: ["cinemancie"],
    description: "Contrôle des résonances, rythmes et vibrations."
  },
  {
    id: "conjuration",
    name: "Conjuration",
    circle: 4,
    type: "sublimation",
    parents: ["invocation"],
    description: "Ancrage durable et contrôle renforcé des entités invoquées."
  },
  {
    id: "unknown_4_a",
    name: "???2",
    circle: 4,
    type: "sublimation",
    parents: ["nexomancie"],
    description: "Renforcement et alignement forcé des connexions existantes."
  },
{
    id: "vitamancie",
    name: "Vitamancie",
    circle: 4,
    type: "transcendantale",
    parents: ["vivimancie", "esoterisme"],
    description: "Manipulation directe de l’essence vitale pour guérir ou renforcer la vie."
  },
  /* =========================
     5e CERCLE
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
    description: "Transformation profonde et instable des formes de vie."
  },
  {
    id: "divination",
    name: "Divination",
    circle: 5,
    type: "sublimation",
    parents: ["psychodomination"],
    description: "Perception et interprétation des informations cachées."
  },
  {
    id: "crystalomancie",
    name: "Crystalomancie",
    circle: 5,
    type: "sublimation",
    parents: ["harmonimancie"],
    description: "Structuration parfaite de la matière et de l’énergie."
  },
  {
    id: "unknown_5_a",
    name: "???",
    circle: 5,
    type: "sublimation",
    parents: ["conjuration"],
    description: "Manipulation avancée des forces invoquées et de leur origine."
  },
  {
    id: "unknown_5_b",
    name: "???3",
    circle: 5,
    type: "sublimation",
    parents: ["unknown_4_a"],
    description: "Altération des événements par manipulation indirecte des liens."
  },
  {id: "necromancie",
    name: "Nécromancie",
    circle: 5,
    type: "transcendantale",
    parents: ["cadaveromancie", "vitamancie"],
    description: "Manipulation de l'énergie de la mort et de l’au-delà."
  },
  

  /* =========================
     6e CERCLE
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
  },
  {
    id: "quanticomancie",
    name: "Quanticomancie",
    circle: 6,
    type: "sublimation",
    parents: ["crystalomancie"],
    description: "Manipulation des états fondamentaux de la réalité."
  },
  {
    id: "astromancie",
    name: "Astromancie",
    circle: 6,
    type: "sublimation",
    parents: ["unknown_5_a"],
    description: "Maîtrise des influences stellaires et des puissances astrales."
  },
  {
    id: "chronomancie",
    name: "Chronomancie",
    circle: 6,
    type: "sublimation",
    parents: ["unknown_5_b"],
    description: "Manipulation directe du temps et de sa progression."
  },
    {id: "animancie",
    name: "Animancie",
    circle: 6,
    type: "sublimation",
    parents: ["necromancie"],
    description: "Maîtrise de l'âme."
  }
];
