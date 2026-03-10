import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../services/apiAuth";
import toast from "react-hot-toast";
export function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (data) => {
      console.log("User signed up successfully:", data);
      toast.success("User signed up successfully!, please signup");
    },
    onError: (error) => {
      console.error("Error signing up:", error);
      toast.error("Error signing up!");
    },
  })

  return { signup, isLoading };
}