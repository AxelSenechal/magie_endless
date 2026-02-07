const schools = [
  {
    id: "transmutation",
    name: "Transmutation",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de la forme, structure et état des éléments non vivants.",
    bonus: "Matérialiste",
    talents: ["Connaissance : Géologie"]
  },
  {
    id: "esoterisme",
    name: "Ésotérisme",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation du mana.",
    bonus: "Évaluation magique",
    talents: ["Vision magique"]
  },
  {
    id: "psychomancie",
    name: "Psychomancie",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de l’esprit et de la pensée.",
    bonus: "Multifocus",
    talents: ["Vision psychique"]
  },
  {
    id: "vegetomancie",
    name: "Végémancie",
    circle: 2,
    type: "sublimation",
    parents: ["transmutation"],
    description: "Contrôle de la vie végétale.",
    bonus: "Main Verte",
    talents: ["Herboristerie"]
  },
  {
    id: "evocation",
    name: "Évocation",
    circle: 2,
    type: "sublimation",
    parents: ["esoterisme"],
    description: "Manifestation physique du mana.",
    bonus: "Surpuissance",
    talents: ["Contact Mana"]
  },
  {
    id: "projection",
    name: "Projection",
    circle: 2,
    type: "transcendantale",
    parents: ["psychomancie", "esoterisme"],
    description: "Implémentation de psyché dans le mana.",
    bonus: "Télé-chargement",
    talents: ["Perception magique"]
  },

    {
    id: "enchantement",
    name: "Enchantement",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "esoterisme"],
    description: "Implémentation d'un comportement manascien dans la matière.",
    bonus: "Télé-chargement",
    talents: ["Perception magique"]
  }
];
