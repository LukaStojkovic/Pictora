import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../services/apiUser";

export function useUpdateUser(id) {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: (userData) => updateUserApi(id, userData),
    onSuccess: (updatedUser) => {
      toast.success("You Successfully Updated Profile!");

      queryClient.setQueryData(["user"], updatedUser);

      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isLoading };
}
