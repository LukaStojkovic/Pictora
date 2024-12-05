import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addRemoveFriend as addRemoveFriendApi } from "../services/apiUser";

export function useAddRemoveFriend() {
  const queryClient = useQueryClient();

  const { mutate: addRemoveFriend, isLoading } = useMutation({
    mutationFn: ({ userId, friendId }) => addRemoveFriendApi(userId, friendId),
    onSuccess: () => {
      toast.success("Friend updated");

      queryClient.invalidateQueries({ queryKey: ["userFriends"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { addRemoveFriend, isLoading };
}
