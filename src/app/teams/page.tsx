'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { teamService } from '@/services/teamService';
import { useRequireAuth } from '@/hooks/useRequireAuth';

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState([]);
  const { isAuthenticated } = useRequireAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      // Aguarda redirecionamento antes de renderizar
      return;
    }

    const fetchTeams = async () => {
      const result = await teamService.getTeams();
      if (result.success) {
        setTeams(result.data);
      }
    };
    fetchTeams();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // Aguarda redirecionamento do `useRequireAuth`
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team: any) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Average Skill Level: {team.averageSkillLevel}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
