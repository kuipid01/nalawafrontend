import { CiPalette } from "react-icons/ci";
import { FiStar } from "react-icons/fi";
import { FaShuttleVan } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
const Delivery = () => {
  return (
    <>
   
   
    <div className=" mt-10  flex flex-col items-center  h-fit min-h-[40vh] w-full ">
    <div className="w-full flex justify-center items-center h-fit ">
    <h1 className="  text-2xl sm:text-2xl text-center text-slate-800 font-medium mb-8">
        Delivering the best possible experience
      </h1>
    </div>
      <div className="w-[90%]  items-center flex flex-wrap sm:flex-nowrap gap-5 justify-between">
        <div className="flex flex-col w-[45%] sm:w-[23%] gap-2 text-slate-600">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-slate-900 text-white">
            <CiPalette className="w-[20px] h-[20px] " />
          </div>
          <h1>Trustworthy Services</h1>
          <small>
            We guarantee 100% trust as every vendor goes through series of
            verification processes
          </small>
        </div>
        <div className="flex w-[45%] sm:w-[23%] flex-col gap-2 text-slate-600">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-slate-900 text-white">
            <FiStar className="w-[20px] h-[20px] " />
          </div>
          <h1>Quality Products</h1>
          <small>
            We guarantee 100% quality products as every product goes through series of
            vetting processes
          </small>
        </div>
        <div className="flex w-[45%] sm:w-[23%] flex-col gap-2 text-slate-600">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-slate-900 text-white">
            <FaShuttleVan className="w-[20px] h-[20px] " />
          </div>
          <h1>Fast Deliveries</h1>
          <small>
            Fast deliveries services as deliverers work round the clock to bring products to you
          </small>
        </div>
 
        <div className="flex w-[45%] sm:w-[23%] flex-col gap-2 text-slate-600">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-slate-900 text-white">
            <RiSecurePaymentFill className="w-[20px] h-[20px] " />
          </div>
          <h1>Secure Payments Methods</h1>
          <small>
            Payment protected from cyber attacks
           </small>
        </div>
      </div>
    </div>
    </>
  );
};

export default Delivery;
