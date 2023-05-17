/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
  import { signInWithEmailAndPassword } from "firebase/auth";
import bgImg from "../assets/bgHero.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 import { auth } from "../firebase";
 import SmallLoading from '../components/SmallLoading'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MainLoader from "../components/MainLoader";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisble, setPasswordVisble] = useState(false);
  const [loading, setloading] = useState(false)
  const [Pageloading, setPageloading] = useState(true)
  const setPasswordCtrl = () => {
    setPasswordVisble(!passwordVisble);
  };
  useEffect(() => {
    setTimeout(() => {
      setPageloading(false)
    }, 500);
   }, [])
   const handleSubmit = (event) => {
    setloading(true)
     event.preventDefault();
     // handle login logic here
     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        //  User is logged in
        toast.success("Login Succesffuly:", );
         const user = userCredential.user;
        
        
         navigate("/");
         setloading(false)
       })
       .catch((error) => {
        //  Login failed
        setloading(false)
         const errorMessage = error.message;
       
         toast.error( errorMessage);
       });
   };
   if (Pageloading) return <MainLoader/>
  return (
    <div className="w-full flex p-2  sm:p-10 h-[70vh]  sm:mb-4 sm:min-h-[60vh] border">
           <ToastContainer />
      <div className=" w-1/2 h-[70vh] hidden sm:flex ">
        <img
          src={bgImg}
          className="w-full object-cover h-full"
          alt="LoginImg"
        />
      </div>
      <div className="flex w-full sm:w-1/2 justify-center items-center p-3">
        <div className="flex w-full sm:w-2/3 border border-green-300 p-2 sm:p-5 flex-col">
          <div className="flex flex-col text-gray-800">
            <input
              className="w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className=" bg-green-500 w-full py-3 text-white uppercase">
            {
              loading ?  <div className="w-full flex justify-center items-center">  <SmallLoading/>  </div> : "Login"
            }
            
          </button>
          <p className="mt-3">
            {" "}
            <small>
              Don&apos;t have an account ?{" "}
              <Link className="text-red-400" to={"/register"}>
                {" "}
                sign up
              </Link>{" "}
            </small>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
