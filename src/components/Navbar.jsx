/* eslint-disable no-unused-vars */
import { FaCartPlus } from "react-icons/fa";
import Logo from "../assets/nalawaLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import { getAuth, signOut } from 'firebase/auth';
import { auth } from "../firebase";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false)
  const {userLoggedIn} = useContext(UserContext)
  const handleLogOut = async () => {
     await  signOut(auth).then(() => {
        toast.success("Sign-out successful ", );
      
     }).catch((error) => {
       console.log(error)
     });
  }
  const {cart,setCart} = useContext(CartContext)

  return (
    <div className="w-full relative">
       <ToastContainer />
    <div className="flex w-full px-10 h-[10vh] md:h-[20vh] items-center justify-between  text-gray-900">
      <div className="h-full w-fit py-2  flex items-center justify-center">
        <img
          className="w-[200px] -ml-10 sm:w-[200px] object-contain h-full scale-150  sm:h-full"
          src={Logo}
          alt=""
        />
      </div>
      <ul className="hidden sm:flex text-sm font-medium text-slate-700  justify-center w-[60%] gap-5 ">
        <Link to={'/'}>
     
        <li>Home</li>
        </Link>
        <li>About</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>

      <div className=" hidden sm:flex sm:gap-4">
        {
          userLoggedIn ?  
          <button onClick={handleLogOut} className=" px-5 min-w-[150px] flex justify-center items-center gap-1 rounded py-2 border bg-transparent border-green-500 text-slate-600">
            {" "}
            LOGOUT
          </button>  
         :  <Link className="text-red-400" to={"/login"}>
          <button className=" px-5 min-w-[150px] flex justify-center items-center gap-1 rounded py-2 border bg-transparent border-green-500 text-slate-600">
            {" "}
            LOGIN
          </button>  
        </Link>
        }
        
       
        <Link to={"/cart"}>
          <button className=" px-5 min-w-[150px] relative flex justify-center items-center gap-1 rounded py-2 bg-green-700 text-white">
            {" "}
            <small className=" absolute top-0 left-[53px]  text-white text-[12px]">{cart.length}</small>
            <FaCartPlus /> Cart
          </button>
        </Link>
      </div>
      <div onClick={ () => setnavOpen(!navOpen)} className="flex font-bold text-lg cursor-pointer hover:text-xl  transition-all sm:hidden">
        <RxHamburgerMenu />
      </div>
    </div>
    {
      navOpen?  <div className="w-[80%] absolute top-full right-0 z-30 bg-green-700 h-[90vh] text-gray-200 sm:hidden">
  <ul className="text-sm font-medium  p-2  justify-center w-full gap-5 ">
        <Link onClick={ () => setnavOpen(!navOpen)} to={'/'}>
     
        <li  className=" w-full flex justify-center  items-center hover:text-gray-100 transition-all h-[40px] border-b  border-gray-400">Home</li>
        </Link>
        <li onClick={ () => setnavOpen(!navOpen)}  className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px] border-b  border-gray-400">About</li>
        <li onClick={ () => setnavOpen(!navOpen)} className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px] border-b  border-gray-400">Products</li>
        <li onClick={ () => setnavOpen(!navOpen)} className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px] border-b  border-gray-400">Contact Us</li>
        <li onClick={ () => setnavOpen(!navOpen)} className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px] border-b  border-gray-400">
        <Link to={"/cart"}>
          <button className=" px-5 min-w-[150px] flex justify-center items-center gap-1 rounded py-2 bg-green-700 text-white">
            {" "}
            {cart.length} <FaCartPlus /> Cart
          </button>
        </Link>

        </li>
        {
          userLoggedIn ?  <li onClick={ () => setnavOpen(!navOpen)} className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px]  ">
          <Link className="text-red-400" to={"/login"}>
            <button onClick={handleLogOut} className=" px-5 min-w-[150px] flex justify-center items-center gap-1 rounded py-2  bg-transparent  text-white ">
              {" "}
              LOGOUT
            </button>
          </Link>
  
          </li> :   <li onClick={ () => setnavOpen(!navOpen)} className=" w-full flex justify-center items-center hover:text-gray-100 transition-all h-[40px]  ">
        <Link className="text-red-400" to={"/login"}>
          <button className=" px-5 min-w-[150px] flex justify-center items-center gap-1 rounded py-2  bg-transparent  text-white ">
            {" "}
            LOGIN
          </button>
        </Link>

        </li>
        }
      
      
      </ul>
      </div> : null
    }
   
    </div>
  );
};

export default Navbar;
