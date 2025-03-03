/* eslint-disable no-unused-vars */
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Home = () => {

  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth)

  const handleLogOut = () => {
    signOut(auth).then(()=>{
      navigate("/login")
      console.log("Signed Out");
    }).catch((error)=>{
      console.log(error);
    })
  }

  if(loading) return <p>User Info Loading....</p>
  return (
    <div>
        <div className="flex flex-col justify-start items-start">
          welcome {user.email}
        </div>
        <button className="bg-black text-white py-1 px-2 rounded-md m-auto capitalize" onClick={handleLogOut}>log out</button>
    </div>
  
  );
};

export default Home;
