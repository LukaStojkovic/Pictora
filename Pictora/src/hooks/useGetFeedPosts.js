import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFeedPosts } from "../services/apiPost";

export function useGetFeedPosts() {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryFn: () => getFeedPosts(),
    queryKey: ["posts"],
  });
  queryClient.invalidateQueries({ queryKey: ["posts"] });

  return { posts, isLoading };
}

export default useGetFeedPosts;
