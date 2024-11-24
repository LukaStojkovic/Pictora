import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost } from "../services/apiPost";

export function useLikePost() {
  const queryClient = useQueryClient();
  const { mutate: like, isLoading } = useMutation({
    queryKey: ["likes"],
    mutationFn: ({ postData, user }) => likePost(postData, user),
    onSuccess: () => {
      queryClient.invalidateQueries(["likes"]);
    },
  });

  return { like, isLoading };
}

export default useLikePost;
