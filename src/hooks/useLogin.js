import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {

  const queryClient = useQueryClient();


  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error("There was an error while logging in")
    }
  });
  return { login, isLoggingIn };
}