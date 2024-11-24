import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPost as createPostApi } from "../services/apiPost";

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (postData) => createPostApi(postData),
    onSuccess: () => {
      toast.success("You Created New Post!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createPost, isLoading };
}

export default useCreatePost;
