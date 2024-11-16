// Example of updated useUserData.js
import { useQuery } from '@tanstack/react-query';

const useUserData = (userId) => {
  return useQuery({
    queryKey: ['userData', userId], // Use an array of keys for the queryKey if needed
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/users/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
          'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
         }
      });
      return response.json();
    }
  });
};

export default useUserData;
