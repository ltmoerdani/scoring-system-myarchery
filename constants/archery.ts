export const TARGET_FACES = {
  WORLD_ARCHERY_10_RING: {
    name: 'World Archery 10-Ring',
    rings: 10,
    maxScore: 10,
    colors: ['gold', 'gold', 'red', 'red', 'blue', 'blue', 'black', 'black', 'white', 'white'],
  },
  NFAA_5_SPOT: {
    name: 'NFAA 5-Spot',
    rings: 5,
    maxScore: 5,
    colors: ['white', 'black', 'blue', 'red', 'gold'],
  },
  FITA_6_RING: {
    name: 'FITA 6-Ring',
    rings: 6,
    maxScore: 9,
    colors: ['gold', 'red', 'blue', 'black', 'white'],
  },
} as const;

export const DISTANCES = {
  INDOOR: [18, 25],
  OUTDOOR: [30, 50, 60, 70, 90],
  FIELD: [20, 30, 40, 50, 60, 80],
} as const;

export const DIVISIONS = {
  RECURVE: 'Recurve',
  COMPOUND: 'Compound',
  BAREBOW: 'Barebow',
  TRADITIONAL: 'Traditional',
} as const;

export const AGE_CATEGORIES = {
  CADET: 'Cadet (Under 18)',
  JUNIOR: 'Junior (Under 21)',
  SENIOR: 'Senior',
  MASTER: 'Master (50+)',
} as const;