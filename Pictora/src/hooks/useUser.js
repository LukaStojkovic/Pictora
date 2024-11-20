import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiUser";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });

  return { user, isLoading };
}

export default useUser;
