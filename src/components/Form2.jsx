import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
      }))
  }


  const handleSubmit = (e) => {
    e.preventDefault() // prevent default browser reload after form is submitted 

    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="border border-slate-400 p-10 
      rounded-lg shadow max-w-sm">
        <h1 className="text-4xl text-center mb-6 text-teal-800
         font-bold
        ">
            Register
        </h1>
        {/* username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>

        {/* email */}
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

         {/* password */}
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <button type="submit"  className="primary_button w-full mt-6">
            Register
        </button>
      </form>
    </div>
  );
};
export default Form2;
