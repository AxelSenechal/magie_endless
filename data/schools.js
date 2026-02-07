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
    description: "Manipulation de la forme, de la structure et de l’état des éléments non vivants (roches, terres, métaux, liquides, gaz)."
  },
  {
    id: "esoterisme",
    name: "Ésotérisme",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation du mana : déplacement, blocage, analyse et interactions magiques."
  },
  {
    id: "psychomancie",
    name: "Psychomancie",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de son propre esprit et de la pensée ambiante."
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
    description: "Modelage de la matière psychique : isolation, modification ou destruction de pensées et de souvenirs."
  },
  {
    id: "evocation",
    name: "Évocation",
    circle: 2,
    type: "sublimation",
    parents: ["esoterisme"],
    description: "Manifestation physique du mana sous une forme quasi matérielle."
  },
  {
    id: "vegetomancie",
    name: "Végémancie",
    circle: 2,
    type: "sublimation",
    parents: ["transmutation"],
    description: "Contrôle de la vie végétale : modification, croissance et développement."
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
    description: "Implémentation de psyché dans du mana : sens à distance, sauvegarde de pensées, sorts guidés."
  },
  {
    id: "enchantement",
    name: "Enchantement",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "esoterisme"],
    description: "Implémentation d’un comportement arcanique dans un matériau."
  },
  {
    id: "psychometrie",
    name: "Psychométrie",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "psychomancie"],
    description: "Lecture, modification ou implémentation d’empreintes psychiques dans la matière."
  },

  /* =========================
     3e CERCLE – SUBLIMATION
     ========================= */

  {
    id: "psychophorie",
    name: "Psychophorie",
    circle: 3,
    type: "sublimation",
    parents: ["psychurgie"],
    description: "Création de pseudo-esprits et application de ceux-ci sur des cibles."
  }
];
