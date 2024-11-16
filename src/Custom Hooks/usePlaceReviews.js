import { useQuery } from "@tanstack/react-query";

const fetchPlaceReviews = async (placeId) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/review/reviews/place/${placeId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
      'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
     }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return await response.json();
};

export const usePlaceReviews = (placeId) => {
  return useQuery({
    queryKey: ["placeReviews", placeId],
    queryFn: () => fetchPlaceReviews(placeId),
    enabled: !!placeId, // Only fetch if placeId is provided
    refetchOnWindowFocus: false, // Optional: to prevent refetching on window focus
  });
};
