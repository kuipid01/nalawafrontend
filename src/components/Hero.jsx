import HeroImg from "../assets/bgHero.jpg";
const Hero = () => {
  return (
    <div className=" w-full mb-5 md:mb-[20vh] bg-green-700 px-0 relative h-[90vh] sm:h-[90vh] flex items-center justify-center">
      <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src={HeroImg}
        alt=""
      />
      <div className=" absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
      <div className="relative flex flex-col items-center sm:w-[60%] gap-5 w-full px-10 text-white ">
        <h1 className=" text-lg sm:text-2xl md:w-[90%] text-center capitalize ">
          You want quality Farm Produces directly from farms, You Want
          Na&apos;alawa Products
        </h1>
        <p className=" text-center text-xs sm:text-base text-slate-300">
          {" "}
          You can order farm produce directly from farmers , harvesters and
          producers via Nalawa - a safe ,easy and seamless online marketplace{" "}
        </p>
        <button className="w-full sm:w-[60%] py-3 bg-green-700 rounded-lg text-slate-200 text-center">
        <a href="#NewPage"> Order Now</a> 
        </button>
      </div>
      <div className="absolute shadow-lg  shadow-slate-200 bg-white min-h-[100px] sm:py-8 sm:px-10  -bottom-16 left-1/2 -translate-x-1/2 sm:w-[60%] sm:flex sm:justify-between sm:items-center rounded-2xl hidden p-2">
        <div className="flex flex-col ">
          <h1>1+ </h1>
          <p>Verified Vendors</p>
        </div>
        <div className="flex flex-col ">
          <h1>95% </h1>
          <p>Satisfied Customers</p>
        </div>
        <div className="flex flex-col ">
          <h1>100+ </h1>
          <p>Customers in Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
