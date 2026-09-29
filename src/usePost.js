import { useQuery } from "@tanstack/react-query";

export async function fetchData(){
const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // Fresh for 5 minutes (prevents immediate revalidation)
  });
}