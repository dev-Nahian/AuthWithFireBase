import React, { useState } from "react";
import { loginWithEmailAndPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const logInUser = await loginWithEmailAndPassword(email, password);
        console.log(logInUser);
        navigate('/home')

    } catch (error) {
        console.log(error);
    }
  };


  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home")
    
  }



  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Log In</h1>

      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <button
            className="bg-black text-white py-1 px-2 rounded-md m-auto capitalize"
            type="submit"
            onClick={handleLogin}
          >
            Log In
          </button>

          <button
            className="bg-orange-400 text-white py-1 px-2 rounded-md m-2 capitalize"
            type="submit"
            onClick={handleSocialLogin}
          >
            Log In With Google
          </button>
        </div>
      </form>
      <p className="my-2">
        No Account?
        <NavLink to="/register" className="underline">
          register
        </NavLink>
      </p>
      <p className="my-2">
        Forgot Password ?
        <NavLink to="/reset" className="underline">
          reset your password
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
