

function Footer() {
  return (
    <footer className="bg-[#000000e8] px-2 md:px-10 h-fit sm:min-h-[60vh] py-6 mt-16">
      <div className="text-white w-full flex flex-col justify-center items-center">
<h1 className="text-xl md:text-3xl">We&apos;d love to keep in touch</h1>
<p className="mt-6 text-base">Subscribe to our newsletter</p>
<div className="w-full md:w-[450px] flex rounded-lg overflow-hidden mt-10 h-[50px]">
  <input placeholder="Enter your email" className="w-[80%] px-3 text-gray-800 placeholder:text-slate-900" type="email" />
  <button className="h-full px-6 text-white bg-green-600">Subscribe</button>
</div>
      </div>
      <hr className=" w-full h-[2px] bg-gray-600 my-10" />
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col">
          <h4 className="text-white font-bold mb-4">Nalawa Farms</h4>
          <p className="text-white">Get fresh and frozen foods with ease!</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul >
            <li className="mb-2 text-white">Kagini Kubwa , Abuja Nigeria</li>
            <li className="mb-2 text-white">Email: faruqmuhammaad@gmail.com</li>
            <li className="text-white">Phone: 081-3907-721-6</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <ul className=" flex gap-2 md:flex-col">
            <li className="mb-2"><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
