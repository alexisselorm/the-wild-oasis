import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteBooking as deleteBookingAPI,
  getBooking,
} from "../../services/apiBookings";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),
    onSuccess: (data) => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },
    onError: () => toast.error("There was an error while deleting booking"),
  });

  return { isLoading, booking, error, deleteBooking, isDeletingBooking };
}
