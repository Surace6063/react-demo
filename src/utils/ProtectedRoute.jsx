import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useUserStore } from "../zustand/authStore"

const ProtectedRoute = () => {
    // const {user} = useAuth()

    const {user} = useUserStore()

    if(!user){
        // redirect unauthenticated user to register page
       return <Navigate to="/login" replace  />
    }

  return <Outlet />  // if user is authenticated ... allow protected route access
}
export default ProtectedRoute