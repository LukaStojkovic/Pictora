import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserPassword as updateUserPasswordApi } from "../services/apiUser";

export function useUpdateUserPassword(id) {
  const queryClient = useQueryClient();

  const { mutate: updateUserPassword, isLoading } = useMutation({
    mutationFn: (userData) => updateUserPasswordApi(id, userData),
    onSuccess: (updatedUser) => {
      toast.success("Password updated!");

      queryClient.setQueryData(["user"], updatedUser);

      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUserPassword, isLoading };
}
