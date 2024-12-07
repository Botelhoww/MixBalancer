'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { matchService } from '@/services/matchService';
import { useRequireAuth } from '@/hooks/useRequireAuth';

const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState([]);
  const { isAuthenticated } = useRequireAuth();

  if (!isAuthenticated) {
    return null; // Mostra um estado vazio enquanto redireciona
  }
  
  useEffect(() => {
    const fetchMatches = async () => {
      const result = await matchService.getMatches();
      if (result.success) {
        setMatches(result.data);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match: any) => (
          <Card key={match.id}>
            <CardHeader>
              <CardTitle>Match: {match.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {new Date(match.date).toLocaleDateString()}</p>
              <p>Status: {match.status}</p>
              <p>Team A Score: {match.scoreTeamA}</p>
              <p>Team B Score: {match.scoreTeamB}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
