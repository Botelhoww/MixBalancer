const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const matchService = {
  async getMatches() {
    try {
      const response = await fetch(`${API_URL}/Match`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const result = await response.json();
      return response.ok
        ? { success: true, data: result }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while fetching matches.' };
    }
  },

  async createMatch(data: { teamAId: string; teamBId: string; date: string }) {
    try {
      const response = await fetch(`${API_URL}/Match`, {
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
      return { success: false, message: 'An error occurred while creating a match.' };
    }
  },
};