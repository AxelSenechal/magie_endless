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
    description: "Manipulation de la forme, de la structure et de l’état des éléments inertes (matière physique ; solide/liquide/gazeuse)."
  },
  {
    id: "esoterisme",
    name: "Ésotérisme",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation du mana et de ses flux."
  },
  {
    id: "psychomancie",
    name: "Psychomancie",
    circle: 1,
    type: "primordiale",
    parents: [],
    description: "Manipulation de la matière psychique."
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
    description: "Implémentation de la psyché dans le mana pour le contrôler à distance."
  },
  {
    id: "enchantement",
    name: "Enchantement",
    circle: 2,
    type: "transcendantale",
    parents: ["transmutation", "esoterisme"],
    description: "Implantation de comportements manasciens dans la matière. Peut être utilisé sur les matières autres qu’inerte avec l’aide des écoles filles de Transmutation"
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
    description: "Altération du mana sous forme de chaleur et flammes."
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
    description: "Création et manipulation de liens reliant la matière et la matière psychique."
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
    description: "Altération du mana sous forme d’électricité."
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
    description: "Imposition directe de la volonté sur d’autres esprits. Altération de leur fonctions et logiques internes."
  },
  {
    id: "harmonimancie",
    name: "Harmonimancie",
    circle: 4,
    type: "sublimation",
    parents: ["cinemancie"],
    description: "Contrôle des résonances manascienne. Permet de donner des comportements réactifs au mana à de la matière ou du mana."
  },
  {
    id: "conjuration",
    name: "Conjuration",
    circle: 4,
    type: "sublimation",
    parents: ["invocation"],
    description: "Appel et assimilation de force extérieur en mana « soi »."
  },
  {
    id: "unknown_4_a",
    name: "???2",
    circle: 4,
    type: "sublimation",
    parents: ["nexomancie"],
    description: "XXX"
  },
  {
    id: "Vitamencie",
    name: "Vitamencie",
    circle: 4,
    type: "transcendantale",
    parents: ["vivimancie", "esoterisme"],
    description: "Manipulation de la force vitale des êtres vivants, permettant de régénérer, de renforcer, ou de transmettre celle ci par exemple."
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
    description: "Altération du mana sous forme d’ondes lumineuses."
  },
  {
    id: "alteromancie",
    name: "Altéromancie",
    circle: 5,
    type: "sublimation",
    parents: ["cadaveromancie"],
    description: "Permet d’altérer la matière d’un règne à l’autre (changer de la vie en pierre, des plante en gaz, etc)."
  },
  {
    id: "divination",
    name: "Divination",
    circle: 5,
    type: "sublimation",
    parents: ["psychodomination"],
    description: "Perception de l’esprit du monde, permettant de prédire le -hasard-, et mieux comprendre la constitution du monde."
  },
  {
    id: "crystalomancie",
    name: "Crystalomancie",
    circle: 5,
    type: "sublimation",
    parents: ["harmonimancie"],
    description: "Permet de rendre manifestement physique, sous forme de matière inerte, des concepts abstraits (comme les émotions, les énergies, le temps, etc)."
  },
  {
    id: "unknown_5_a",
    name: "???",
    circle: 5,
    type: "sublimation",
    parents: ["conjuration"],
    description: "xxx."
  },
  {
    id: "unknown_5_b",
    name: "???3",
    circle: 5,
    type: "sublimation",
    parents: ["unknown_4_a"],
    description: "xxx"
  },
    {
    id: "necromancie",
    name: "Nécromancie",
    circle: 4,
    type: "transcendantale",
    parents: ["cadaveromancie", "vitamencie"],
    description: "Manipulation de l'energie nécrotique émise par les morts. Permet d'infliger de la nécrose, animer des cadavres, ou pouvoir atteindre les créatures de l'au delà."
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
    description: "Altération du mana sous forme de radiations diverses et autre phénomènes atomiques."
  },
  {
    id: "apotheomancie",
    name: "Apothéomancie",
    circle: 6,
    type: "sublimation",
    parents: ["alteromancie"],
    description: "Altération de la matière pour transcender les règnes, donnant à celle ci des propriétés normalement impossible (permettre à de l’acier de se régénérer par photosynthèse, à des plantes de fondre sans mourir, à des cadavres de pouvoir assimiler des nutriments, etc)."
  },
  {
    id: "emperomancie",
    name: "Emperomancie",
    circle: 6,
    type: "sublimation",
    parents: ["divination"],
    description: "Altération de la matière psychique du monde même, permettant de donner des ordres à tout comme s’il était du *soi*."
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
    description: "Maîtrise de la notion d’espace. Permet de le plier, se téléporter, ou user d’ubiquité par exemple."
  },
  {
    id: "chronomancie",
    name: "Chronomancie",
    circle: 6,
    type: "sublimation",
    parents: ["unknown_5_b"],
    description: "Manipulation du temps propre de la matière (la remettre dans un état passé, la projeter dès lors dans un état d’un futur hypothétique, verrouiller dans un présent perpétuel/stopper le temps propre.) "
  },
    {
    id: "animancie",
    name: "Animancie",
    circle: 4,
    type: "sublimation",
    parents: ["necromancie"],
    description: "Manipulation de l'âme, permettant de l'altérer, de la renforcer, et de la modeler pour en faire une source de puissance naturelle pour des choses qui en sont dépourvues."
  },

];