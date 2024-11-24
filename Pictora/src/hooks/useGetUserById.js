import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";

function getUserById(id) {
  const { data: user, isLoading } = useQuery({
    queryFn: () => getUser(id),
    queryKey: ["userById", id],
  });

  return { user, isLoading };
}

export default getUserById;
