import { useEffect, useState } from "react";

const Counter = () => {
  // count -> state variable name
  // setCount -> use to update count state value
  // useState(0) -> means the initial value of count state is 0
  const [count, setCount] = useState(0);

  const [on, setOn] = useState(false);

  const [username, setUsername] = useState("Suresh Thapa");

  const [hobbies, setHobbies] = useState([]);

  const [user, setUser] = useState({
    username: "suresh",
    age: 24,
  });

  const [users, setUsers] = useState(null);

  // useEffect() hook -> it lets you run side effects in a component
  // like fetching data, updating dom manually etc.

  // 1. without dependicies array -> runs on first component render and
  // also runs every time component re-render
  // useEffect(()=>{
  //   // code to run side effect
  //   console.log('click')
  // })

  // 2. with empty dependicies array -> only run on first render
  useEffect(() => {
    // code to run side effect
    console.log("click");
  }, []);

  // 3. with non-empty dependicies array -> runs on first component render and
  // runs according to condition or state in dependicies array
  useEffect(() => {
    // code to run side effect
    console.log("click");
  }, [count,on]);



  return (
    <div className="border border-slate-300 p-4 rounded-md w-80">
      <h1 className="text-4xl font-semibold text-slate-800 text-center mb-4">
        Counter App
      </h1>

      <p className="text-2xl font-semibold text-center mb-10">{count}</p>

      <div className="space-x-1">
        <button onClick={() => setCount(count + 1)} className="primary_button">
          add
        </button>
        <button onClick={() => setCount(count - 1)} className="primary_button">
          subtract
        </button>
        <button onClick={() => setCount(0)} className="primary_button">
          reset
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setOn(!on)}
          className={`px-6 py-2 rounded-md text-white 
            ${on ? "bg-green-600" : "bg-red-600"}`}
        >
          {on ? "off" : "on"}
        </button>

        {on ? (
          <p className="text-green-500 font-bold">Switch On</p>
        ) : (
          <p className="text-red-500 font-bold">Switch off</p>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={() => setUsername("John Doe")}
          className="primary_button"
        >
          change username
        </button>

        <p>The username is {username}.</p>
      </div>
    </div>
  );
};
export default Counter;
