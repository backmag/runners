const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchData = async() => {
    try {
        const response = await fetch(`${API_URL}/api/data`)

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

