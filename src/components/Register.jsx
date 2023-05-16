/* eslint-disable no-unused-vars */
import { useState } from "react";
 import { createUserWithEmailAndPassword } from "firebase/auth";
import bgImg from "../assets/svgNalawa.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import SmallLoading from '../components/SmallLoading'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();
  const [passwordVisble, setPasswordVisble] = useState(false);
  const setPasswordCtrl = () => {
    setPasswordVisble(!passwordVisble);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false)
  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      toast.success("User registered with Succesffuly:", );
      // You can redirect to another page or perform some other action here
      navigate("/Login")
      setloading(false)
    } catch (error) {
      toast.error("Error registering user ,retry on contact site administrato:", );
      setloading(false)
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex p-2 h-[70vh]  sm:mb-4  sm:p-10 min-h-[60vh] border">
        <ToastContainer />
      <div className=" w-1/2 h-[70vh] hidden sm:flex ">
        <img
          src={bgImg}
          className="w-full object-cover h-full"
          alt="RegisterImg"
        />
      </div>
      <div className="relative flex w-full sm:w-1/2 justify-center items-center p-3">
     <div className="flex w-full sm:w-2/3 border border-green-300 p-2 sm:p-5 flex-col">
          <div className="flex flex-col text-gray-800">
            <input
            
              className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 "
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex flex-col text-gray-800">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 "
              type="email"
              placeholder="Enter Mail"
            />
          </div>
          <div className="flex relative flex-col">
            <div
              onClick={setPasswordCtrl}
             
              className="w-[25px] absolute right-3 top-1/2 -translate-y-1/2 h-[12px] cursor-pointer rounded-full bg-green-300 "
            ></div>
            <input
              className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 mb-4"
              type={`${passwordVisble ? "text" : "password"}`}
              name="password"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col relative">
            <input
              className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 mb-4"
              type={`${passwordVisble ? "text" : "password"}`}
              name="password"
              placeholder="Confirm password"
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={handleSubmit} className=" bg-green-500 w-full py-3 text-white uppercase">
          {
              loading ?  <div className="w-full flex justify-center items-center">  <SmallLoading/>  </div> : "  Register"
            }
          
          </button>
          <p className="mt-3">
            {" "}
            <small>
              have an account?{" "}
              <Link className="text-red-400" to={"/login"}>
                {" "}
                log in
              </Link>{" "}
            </small>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
