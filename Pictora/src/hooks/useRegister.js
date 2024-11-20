import { useMutation } from "@tanstack/react-query";
import { register as registerFn } from "../services/apiAuth.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: (data) => registerFn(data),
    onSuccess: () => {
      toast.success("You successfuly registered!");
      navigate("/login");
    },
    onError: (er) => {
      toast.error(er.message);
    },
  });

  return { register, isLoading };
}

export default useRegister;
