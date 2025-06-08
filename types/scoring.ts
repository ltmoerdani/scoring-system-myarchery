export interface ArcheryScore {
  id: string;
  arrows: ArrowScore[];
  totalScore: number;
  sessionId: string;
  createdAt: string;
  distance: number;
  targetFace: string;
}

export interface ArrowScore {
  id: string;
  value: number;
  ring: number;
  x: number;
  y: number;
  isX: boolean;
}

export interface ScoringSession {
  id: string;
  name: string;
  rounds: ArcheryScore[];
  startTime: string;
  endTime?: string;
  isCompleted: boolean;
  totalScore: number;
  userId: string;
}

export interface Competition {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: string[];
  rules: CompetitionRules;
  status: 'upcoming' | 'active' | 'completed';
}

export interface CompetitionRules {
  distance: number;
  targetFace: string;
  arrowsPerEnd: number;
  totalEnds: number;
  timeLimit?: number;
}