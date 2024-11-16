
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../store/searchSlice';

const fetchPlacesByCategory = async (category) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/places/places/Category/${category}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
      'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
     }});
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return response.json();
};

export const useFetchPlacesByCategory = (category) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['places', category],
    queryFn: () => fetchPlacesByCategory(category),
    enabled: !!category, 
    onSuccess: (data) => {
      dispatch(setSearchResults(data)); 
    },
    onError: (error) => {
      console.error("Error fetching places by category:", error);
    }
  });
};
