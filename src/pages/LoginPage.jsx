import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../redux/authSlice"
import { useUserStore } from "../zustand/authStore"

const LoginPage = () => {
    const disptach = useDispatch()
    const navigate = useNavigate()

    // accessing setUser function from zustand -> authStore
    const {setUser} = useUserStore()

    const {register,handleSubmit, formState:{errors}} = useForm()

    // function to submit form
    const handleLogin = (data) => {
      console.log(data)

      // disptach(login(data))
      setUser(data)
      navigate('/')
    }

  return (
    <div className="flex justify-center items-center min-h-[60vh] mt-10">
      <form onSubmit={handleSubmit(handleLogin)}  className="border border-slate-400 p-10 
      rounded-md max-w-md w-full">
        <h1 className="text-2xl mb-6 text-slate-800
         font-bold
        ">
            Login
        </h1>
        {/* username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...register('username')}
            type="text"
            id="username"
            placeholder="Enter username"
           
          />
          {/* only shows error if username field has error */}
          {
            errors.username && <p className="text-sm text-rose-700 mt-1">{errors.username.message}</p>
          }
        </div>

         {/* password */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
          {...register('password')}
            type="password"
            id="password"
            placeholder="Enter password"
          />
            {
            errors.password && <p className="text-sm text-rose-700 mt-1">{errors.password.message}</p>
          }
        </div>

        <button type="submit"  className="primary_button w-full mt-6">
            Login
        </button>
      </form>
    </div>
  )
}
export default LoginPage