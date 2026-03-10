import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "../../hooks/useLogout";

const Logout = () => {

  const {logout, isPending: isLoading} = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      <HiArrowRightOnRectangle size={20} />
    </ButtonIcon>
  );
};

export default Logout;