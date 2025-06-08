import { useState, useCallback } from 'react';
import { ArcheryScore, ArrowScore, ScoringSession } from '@/types/scoring';

export function useScoring() {
  const [currentSession, setCurrentSession] = useState<ScoringSession | null>(null);
  const [isScoring, setIsScoring] = useState(false);

  const startSession = useCallback((sessionName: string) => {
    const newSession: ScoringSession = {
      id: Date.now().toString(),
      name: sessionName,
      rounds: [],
      startTime: new Date().toISOString(),
      isCompleted: false,
      totalScore: 0,
      userId: 'current-user', // TODO: Get from auth context
    };

    setCurrentSession(newSession);
    setIsScoring(true);
  }, []);

  const endSession = useCallback(() => {
    if (currentSession) {
      const updatedSession: ScoringSession = {
        ...currentSession,
        endTime: new Date().toISOString(),
        isCompleted: true,
      };
      
      setCurrentSession(updatedSession);
      setIsScoring(false);
      
      // TODO: Save session to storage/server
    }
  }, [currentSession]);

  const addArrowScore = useCallback((score: ArrowScore) => {
    // TODO: Implement arrow scoring logic
    console.log('Adding arrow score:', score);
  }, []);

  const calculateSessionTotal = useCallback((session: ScoringSession): number => {
    return session.rounds.reduce((total, round) => total + round.totalScore, 0);
  }, []);

  return {
    currentSession,
    isScoring,
    startSession,
    endSession,
    addArrowScore,
    calculateSessionTotal,
  };
}