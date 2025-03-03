import React, { useState } from "react";
import { registerWithEmailAndPassword } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    try {
        const user = await registerWithEmailAndPassword(email, password)   
        console.log(user);
        navigate("/login")
             
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Register</h1>

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
        <button className="bg-black text-white py-1 px-2 rounded-md m-auto capitalize" type="submit" onClick={handleSubmit}>
          register
        </button>
      </form>
      <p>
        Already Have an Account?
        <NavLink to="/login" className="underline">Sign In</NavLink>
      </p>
    </div>
  );
};

export default Register;
