import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../services/apiUser";

function useGetUserFriends(id) {
  const { data: friends, isLoading } = useQuery({
    queryFn: () => getUserFriends(id),
    queryKey: ["userFriends", id],
    enabled: () => !!id,
  });

  return { friends, isLoading };
}

export default useGetUserFriends;
