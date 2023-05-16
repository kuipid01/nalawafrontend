import SvgImage from '../assets/svgNalawa.svg'
const FillerSec = () => {
  return (
    <div className="w-full flex justify- items-center  min-h-[50vh] h-fit px-10 py-1 md:py-10">
      <div className='w-[90%] flex flex-col sm:flex-row gap-6'  >
        <div className=' w-full sm:w-[60%] flex flex-col px-1 md:px-4 gap-4 justify-center ' >

       
        <h1 className=' text-2xl'>Built to ease your life</h1>
        <p className=' leading-7 text-slate-700 text-base'>
          As an online marketplace.Nalawa provides a way for farmers to reach
          consumers all over the country, We&lsquo;ve made it easy for you to shop
          from anywhere in Nigeria with seamless experience that weve created
          for you
        </p>
      </div>
      <div className=' h-full flex justify-center items-center w-full md:w-[39%] '>
<img src={SvgImage} className=' w-full  md:w-[200px[ h-[300px]' alt="" />
      </div>
      </div>
    </div>
  );
};

export default FillerSec;
