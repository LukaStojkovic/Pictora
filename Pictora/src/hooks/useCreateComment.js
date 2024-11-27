import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createComment as createCommentApi } from "../services/apiPost";

export function useCreateComment() {
  const queryClient = useQueryClient();

  const { mutate: createComment, isLoading } = useMutation({
    mutationFn: ({ postId, commentData }) =>
      createCommentApi(postId, commentData),
    onSuccess: () => {
      toast.success("You Posted New Comment");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createComment, isLoading };
}

export default useCreateComment;
