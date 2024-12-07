const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const teamService = {
  async getTeams() {
    try {
      const response = await fetch(`${API_URL}/Team/teams`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const result = await response.json();
      return response.ok
        ? { success: true, data: result }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while fetching teams.' };
    }
  },

  async createTeam(data: { name: string }) {
    try {
      const response = await fetch(`${API_URL}/Team/teams`, {
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
      return { success: false, message: 'An error occurred while creating a team.' };
    }
  },
};