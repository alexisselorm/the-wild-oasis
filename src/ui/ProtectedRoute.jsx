import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
// 1. Load the authed user
const { isLoading, user,isAuthenticated } = useUser();

// 3. If no user, redirect to login

useEffect(()=>{
  if (!isAuthenticated && !isLoading) {
    console.log(isAuthenticated);
    console.log(isLoading);
      navigate('/login')
  }
},[isAuthenticated, isLoading,navigate])

// 2While loading show aspinner
if (isLoading) {
  return <Spinner/>
}



// 4. If user, show the children

  return children
  
  
};

export default ProtectedRoute;