const imageService = {
  getAllImage: async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/image/images`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
          'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
         }});
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return []
    } catch (error) {
        return []
    }
  },
  getImageByPlaceName:async (place) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/image/places/name/${place}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
          'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
         }});
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return []
    } catch (error) {
        return []
    }
  }
};

export default imageService
