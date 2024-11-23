import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPost as createPostApi } from "../services/apiPost";

export function useCreatePost() {
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (postData) => createPostApi(postData),
    onSuccess: () => {
      toast.success("You Created New Post!");
    },
    onError: (er) => {
      toast.error(er.message);
    },
  });

  return { createPost, isLoading };
}

export default useCreatePost;
