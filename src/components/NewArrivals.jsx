/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "../components/Card";
import img1 from "../assets/produce1.jpg";
import img2 from "../assets/produce2.jpg";
import img3 from "../assets/produce3.jpg";
import img4 from "../assets/produce4.jpg";
import img5 from "../assets/produce5.jpg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const NewArrivals = () => {
  const queryClient = useQueryClient();
  const [produces, setProduces] = useState([
    {
      id: 1,
      Name: "",
      qty: "",
      price: "",
      cat: "",
      img: "",
    },
    {
      id: 2,
      Name: "",
      qty: "",
      price: "",
      cat: "",
      img: "",
    },
    {
      id: 3,
      Name: "",
      qty: "",
      price: "",
      cat: "Tuber",
      img: img3,
    },
    {
      id: 4,
      Name: "",
      qty: "",
      price: "",
      cat: "",
      img: "",
    },
  ]);

  const fetchProducts = async () => {
    const response = await axios.get("https://kuipid.pythonanywhere.com/api/products/");
    return response.data;
  };
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // console.log('http://127.0.0.1:8000' + data[0].image)
  // const arr = [1,2,3,4,51,50,62,7,8,9,512,4,30,]
  if (isLoading)
    return (
      <div className="mt-10 w-full min-h-[60vh] flex justify-center items-center ">
        <div className=" w-[60px] h-[60px] rounded-full rotate-180 border-2 border-green-300">
          
        </div>
      </div>
    );
  return (
    <div id='NewPage' className="mt-10 w-full h-fit ">
      <div className=" w-full h-fit justify-center items-center flex">
        <h1 className=" mb-8 text-2xl text-slate-800 font-medium ">
          Shop Products Now
        </h1>
      </div>
      <div className="sm:px-10 px-2 flex flex-wrap  justify-evenly items-center ">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
