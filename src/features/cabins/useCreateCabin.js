import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createCabinAPI,
    onSuccess: () => {
      (toast.success("New cabin created successfully"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        }));
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
