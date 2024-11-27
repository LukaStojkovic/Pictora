import { useMutation } from "@tanstack/react-query";
import { login as loginFn } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => loginFn(data),
    onSuccess: () => {
      toast.success("Successfully logged in!");
      navigate("/");
    },
    onError: () => {
      toast.error("Invalid password or email.");
    },
  });

  return { login, isLoading };
}

export default useLogin;
