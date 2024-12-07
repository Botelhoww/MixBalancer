const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const playerService = {
  async getPlayers() {
    try {
      const response = await fetch(`${API_URL}/Player/players`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const result = await response.json();
      return response.ok
        ? { success: true, data: result }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while fetching players.' };
    }
  },

  async createPlayer(data: { nickname: string; skillLevel: number }) {
    try {
      const response = await fetch(`${API_URL}/Player/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return response.ok
        ? { success: true }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while creating a player.' };
    }
  },
};