'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { playerService } from '@/services/playerService';
import { useRequireAuth } from '@/hooks/useRequireAuth';

const PerfilPage: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>({});
  const [matches, setMatches] = useState<any[]>([]);
  const { isAuthenticated } = useRequireAuth();

  useEffect(() => {
    if (!isAuthenticated) {
        // Aguarda redirecionamento antes de renderizar
        return;
      }

    const fetchProfile = async () => {
      if (user?.id) {
        const result = await playerService.getPlayerProfile(user.id);

        if (result.success) {
          setStats({
            nickname: result.data.nickname,
            skillLevel: result.data.skillLevel,
            winRate: result.data.winRate,
            kdRatio: result.data.kdRatio,
            headshotPercentage: result.data.headshotPercentage,
            totalMatches: result.data.totalMatches,
            bestMap: result.data.bestMap,
            worstMap: result.data.worstMap,
            aces: result.data.aces,
            clutches: result.data.clutches,
          });
          setMatches(result.data.matchHistory || []);
        }
      }
    };
    if (user) fetchProfile();
  }, [user, isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl font-bold">{stats.nickname || user?.username}</h1>
            <p className="text-gray-500">{`@${user?.email.split('@')[0]}`}</p>
            <p className="text-gray-500">Nível {stats.skillLevel || 1}</p>
          </div>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Editar Perfil</Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas de Desempenho</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>Taxa de Vitória: {stats.winRate || 0}%</li>
              <li>K/D Ratio: {stats.kdRatio || 0}</li>
              <li>HS %: {stats.headshotPercentage || 0}%</li>
              <li>Total de Partidas: {stats.totalMatches || 0}</li>
              <li>Melhor Mapa: {stats.bestMap || 'N/A'}</li>
              <li>Pior Mapa: {stats.worstMap || 'N/A'}</li>
              <li>Aces: {stats.aces || 0}</li>
              <li>Clutches: {stats.clutches || 0}</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Histórico de Partidas */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Partidas</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Data</th>
                <th className="py-2">Mapa</th>
                <th className="py-2">Resultado</th>
                <th className="py-2">K/D</th>
              </tr>
            </thead>
            <tbody>
              {matches && matches.length > 0 ? (
                matches.map((match, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{new Date(match.date).toLocaleDateString()}</td>
                    <td className="py-2">{match.map}</td>
                    <td className="py-2">{match.result}</td>
                    <td className="py-2">{match.kd}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-500">
                    Nenhuma partida encontrada
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerfilPage;