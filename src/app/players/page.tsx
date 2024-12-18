'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { playerService } from '@/services/playerService';
import { useRequireAuth } from '@/hooks/useRequireAuth';

const PlayersPage: React.FC = () => {
  const [players, setPlayers] = useState([]);
  const { isAuthenticated } = useRequireAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      // Aguarda redirecionamento antes de renderizar
      return;
    }

    const fetchPlayers = async () => {
      const result = await playerService.getPlayers();
      if (result.success) {
        setPlayers(result.data);
      }
    };
    fetchPlayers();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // Aguarda redirecionamento do `useRequireAuth`
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player: any) => (
          <Card key={player.id}>
            <CardHeader>
              <CardTitle>{player.username}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Skill Level: {player.skillLevel}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;