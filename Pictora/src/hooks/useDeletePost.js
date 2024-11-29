import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../services/apiPost";
import toast from "react-hot-toast";

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: (postId) => deletePostApi(postId),
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      toast.success("Post deleted");
    },
    onError: () => {
      toast.error("Something went wrong deleting post");
    },
  });

  return { deletePost, isLoading };
}

export default useDeletePost;
