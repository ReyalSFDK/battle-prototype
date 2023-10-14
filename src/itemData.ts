export interface AttackItem {
  name: string;
  slashingDamage: [number, number];
  impactDamage: [number, number];
  piercingDamage: [number, number];
  weight: number; // Peso do item em quilogramas
  critChance: number;
  mobility: number;
  accuracy: number;
}

export interface DefenseItem {
  name: string;
  slashingDefense: number;
  impactDefense: number;
  piercingDefense: number;
  weight: number; // Peso do item em quilogramas
  mobility: number;
  durability: number;
}

export const modernAttackItems: AttackItem[] = [
  {
    name: "Assault Rifle",
    slashingDamage: [2, 4],
    impactDamage: [5, 7],
    piercingDamage: [20, 25],
    weight: 4.0, // Peso de um fuzil de assalto em quilogramas
    critChance: 5,
    mobility: 85, // Mobilidade de um fuzil de assalto (valor aproximado com a realidade)
    accuracy: 90,
  },
  {
    name: "Shotgun",
    slashingDamage: [1, 2],
    impactDamage: [10, 12],
    piercingDamage: [15, 20],
    weight: 4.5, // Peso de uma espingarda em quilogramas
    critChance: 8,
    mobility: 80, // Mobilidade de uma espingarda (valor aproximado com a realidade)
    accuracy: 85,
  },
  {
    name: "Sniper Rifle",
    slashingDamage: [1, 3],
    impactDamage: [3, 5],
    piercingDamage: [30, 35],
    weight: 5.2, // Peso de um rifle de precisão em quilogramas
    critChance: 10,
    mobility: 90, // Mobilidade de um rifle de precisão (valor aproximado com a realidade)
    accuracy: 95,
  },
  {
    name: "Submachine Gun",
    slashingDamage: [2, 3],
    impactDamage: [4, 6],
    piercingDamage: [10, 15],
    weight: 3.0, // Peso de uma submetralhadora em quilogramas
    critChance: 6,
    mobility: 88, // Mobilidade de uma submetralhadora (valor aproximado com a realidade)
    accuracy: 87,
  },
  {
    name: "Pistol",
    slashingDamage: [1, 2],
    impactDamage: [2, 4],
    piercingDamage: [6, 8],
    weight: 1.0, // Peso de uma pistola em quilogramas
    critChance: 10,
    mobility: 92, // Mobilidade de uma pistola (valor aproximado com a realidade)
    accuracy: 92,
  },
  {
    name: "Crossbow",
    slashingDamage: [3, 4],
    impactDamage: [5, 7],
    piercingDamage: [25, 30],
    weight: 3.8, // Peso de uma besta em quilogramas
    critChance: 5,
    mobility: 78, // Mobilidade de uma besta (valor aproximado com a realidade)
    accuracy: 89,
  },
  {
    name: "Grenade Launcher",
    slashingDamage: [4, 6],
    impactDamage: [15, 20],
    piercingDamage: [5, 8],
    weight: 7.0, // Peso de um lançador de granadas em quilogramas
    critChance: 4,
    mobility: 70, // Mobilidade de um lançador de granadas (valor aproximado com a realidade)
    accuracy: 80,
  },
  {
    name: "Machine Gun",
    slashingDamage: [4, 6],
    impactDamage: [15, 20],
    piercingDamage: [10, 15],
    weight: 8.5, // Peso de uma metralhadora em quilogramas
    critChance: 5,
    mobility: 65, // Mobilidade de uma metralhadora (valor aproximado com a realidade)
    accuracy: 85,
  },
  {
    name: "Compound Bow",
    slashingDamage: [2, 3],
    impactDamage: [3, 5],
    piercingDamage: [20, 25],
    weight: 2.2, // Peso de um arco composto em quilogramas
    critChance: 6,
    mobility: 85, // Mobilidade de um arco composto (valor aproximado com a realidade)
    accuracy: 92,
  },
  {
    name: "Taser",
    slashingDamage: [1, 1],
    impactDamage: [2, 3],
    piercingDamage: [3, 4],
    weight: 0.5, // Peso de um taser em quilogramas
    critChance: 3,
    mobility: 95, // Mobilidade de um taser (valor aproximado com a realidade)
    accuracy: 96,
  },
];
export const modernDefenseItems: DefenseItem[] = [
  {
    name: "Tactical Vest",
    slashingDefense: 70,
    impactDefense: 60,
    piercingDefense: 40,
    weight: 3.0, // Peso de um colete tático em quilogramas
    durability: 90,
    mobility: 70, // Mobilidade de um colete tático (valor aproximado com a realidade)
  },
  {
    name: "Ballistic Helmet",
    slashingDefense: 60,
    impactDefense: 50,
    piercingDefense: 30,
    weight: 1.5, // Peso de um capacete balístico em quilogramas
    durability: 95,
    mobility: 60, // Mobilidade de um capacete balístico (valor aproximado com a realidade)
  },
  {
    name: "Kevlar Body Armor",
    slashingDefense: 80,
    impactDefense: 70,
    piercingDefense: 50,
    weight: 7.0, // Peso de uma armadura de Kevlar em quilogramas
    durability: 80,
    mobility: 50, // Mobilidade de uma armadura de Kevlar (valor aproximado com a realidade)
  },
  {
    name: "Riot Shield",
    slashingDefense: 90,
    impactDefense: 90,
    piercingDefense: 30,
    weight: 5.0, // Peso de um escudo anti-distúrbios em quilogramas
    durability: 90,
    mobility: 40, // Mobilidade de um escudo anti-distúrbios (valor aproximado com a realidade)
  },
  {
    name: "Hazmat Suit",
    slashingDefense: 60,
    impactDefense: 40,
    piercingDefense: 70,
    weight: 3.5, // Peso de um traje de segurança biológica em quilogramas
    durability: 95,
    mobility: 30, // Mobilidade de um traje de segurança biológica (valor aproximado com a realidade)
  },
  {
    name: "Bulletproof Vest",
    slashingDefense: 70,
    impactDefense: 60,
    piercingDefense: 60,
    weight: 4.5, // Peso de um colete à prova de balas em quilogramas
    durability: 85,
    mobility: 65, // Mobilidade de um colete à prova de balas (valor aproximado com a realidade)
  },
  {
    name: "Riot Helmet",
    slashingDefense: 50,
    impactDefense: 40,
    piercingDefense: 25,
    weight: 1.2, // Peso de um capacete anti-distúrbios em quilogramas
    durability: 90,
    mobility: 60, // Mobilidade de um capacete anti-distúrbios (valor aproximado com a realidade)
  },
  {
    name: "Plate Carrier",
    slashingDefense: 80,
    impactDefense: 70,
    piercingDefense: 50,
    weight: 6.0, // Peso de um colete de placas em quilogramas
    durability: 80,
    mobility: 55, // Mobilidade de um colete de placas (valor aproximado com a realidade)
  },
  {
    name: "Gas Mask",
    slashingDefense: 40,
    impactDefense: 50,
    piercingDefense: 40,
    weight: 1.0, // Peso de uma máscara de gás em quilogramas
    durability: 70,
    mobility: 75, // Mobilidade de uma máscara de gás (valor aproximado com a realidade)
  },
  {
    name: "Bulletproof Helmet",
    slashingDefense: 50,
    impactDefense: 60,
    piercingDefense: 40,
    weight: 1.4, // Peso de um capacete à prova de balas em quilogramas
    durability: 85,
    mobility: 60, // Mobilidade de um capacete à prova de balas (valor aproximado com a realidade)
  },
];
