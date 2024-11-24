import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../services/apiPost";

export function useGetUserPosts(userId) {
  const { data: userPosts, isLoading } = useQuery({
    queryFn: () => getUserPosts(userId),
    queryKey: ["userPosts", userId],
  });

  return { userPosts, isLoading };
}

export default useGetUserPosts;
