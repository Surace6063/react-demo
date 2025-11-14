import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUserStore } from "../zustand/authStore";

const AuthRedirectedRoute = () => {
  // const { user } = useAuth()

  const {user} = useUserStore()
  

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />
};

export default AuthRedirectedRoute;
