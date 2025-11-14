import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerFormValidationSchema } from "../utils/validate"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(registerFormValidationSchema) // connecting yup validation to react-hook-form
    })

    const navigate = useNavigate()

    // function to submit form
    const handleRegister = (data) => {
      console.log(data)

      navigate('/')
    }

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit(handleRegister)}  className="border border-slate-400 p-10 
      rounded-lg shadow max-w-sm w-full">
        <h1 className="text-4xl text-center mb-6 text-teal-800
         font-bold
        ">
            Register
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

        {/* email */}
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <input
           {...register('email')}
            type="text"
            id="email"
            placeholder="Enter email"
          />
           {
            errors.email && <p className="text-sm text-rose-700 mt-1">{errors.email.message}</p>
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

         {/* conform password */}
        <div className="mt-4">
          <label htmlFor="c_password">Conform Password</label>
          <input
          {...register('conform_password')}
            type="password"
            id="c_password"
            placeholder="Enter your password again"
          />
            {
            errors.conform_password && <p className="text-sm text-rose-700 mt-1">{errors.conform_password.message}</p>
          }
        </div>

        <button type="submit"  className="primary_button w-full mt-6">
            Register
        </button>
      </form>
    </div>
  )
}
export default RegisterPage