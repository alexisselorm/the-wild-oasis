import { useNavigate } from "react-router-dom";
import { logout as logoutAPI } from "../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, error, isPending } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("There was an error while logging out")
    }
  });
  return { logout, error, isPending };
}