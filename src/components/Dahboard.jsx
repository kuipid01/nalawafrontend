/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios'
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Dahboard = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(1);
    const [productForm, setProductForm] = useState(false)
    const {userLoggedIn} = useContext(UserContext)
  //  FETCHINGCATEGORIES
  const queryClient = useQueryClient();
    const fetchCats = async () => {
    const response = await axios.get("http://localhost:8000/api/categories/");
    return response.data;
  };
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["cats"],
    queryFn: fetchCats,
  });

  // END FETCHING CATEGORIES
  //Fetching Products
   const fetchProducts = async () => {
    const response = await axios.get("https://kuipid.pythonanywhere.com/api/products/");
    return response.data;
  };
  const { data:Products, isFetching:isFetchingProducts, isLoading:isLoadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
 
  //end fetching products
    const handleSubmit = async (e) => {
      e.preventDefault();
  try{
    await axios.post('https://kuipid.pythonanywhere.com/api/products/', { name: name, price:price, description: description, category:category, quantity: quantity, image:image,}, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
      })
      toast.success("Product Created succesfully")
      setProductForm(false)
     setDescription("")
     setName("")
     setPrice("")
     setQuantity("")
     setImage(null)
  }
  catch(err){
console.log(err)
  }
    
        
    };

  const handleDel =  async (id) => {
    try {
      axios.delete(`https://kuipid.pythonanywhere.com/api/products/${id}`,)
  .then(response => {
    console.log(response)
    // handle response
  })
  toast.success(`Product ${id} Deleted succesfully`)
    } catch (error) {
      console.log(error)
    }
    

 
}
    return (
      <div className="h-fit">
              <ToastContainer />
         <h1 className='px-10'>Welcome Mr samad</h1>
 <div className="flex w-full h-fit px-4 sm:px-10 "> <button className='p-2 border-gray-500 text-white bg-green-600 mt-5 border ' onClick={ () =>  setProductForm(!productForm)}>Add Product </button> </div>
    
        <div className="w-full h-fit min-h-screen flex flex-col pt-5 items-center">
            
            
            

     { productForm &&
      <form className='w-full z-30 bg-gray-300 p-5 sm:w-[70%]' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-sm text-gray-700">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control border p-2 border-gray-200 w-full" placeholder="Enter product name"/>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium text-sm text-gray-700">Price</label>
          <input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control p-2 border border-gray-200 w-full" placeholder="Enter product price"/>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block font-medium text-sm text-gray-700">Quantity</label>
          <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control p-2  border border-gray-200 w-full" placeholder="Enter product quantity"/>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium text-sm text-gray-700">Image</label>
          <input type="file" name="image" id="image"  onChange={(e) => setImage(e.target.files[0])} className="form-control border p-2 border-gray-200 w-full"/>
        </div>
        <select onChange={ (e) => setCategory(e.target.value) } value={category}> {
          data?.map(btn=> <option key={btn.name} value={btn.id} > {btn.name} </option>  )
          }

</select>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-sm text-gray-700">Description</label>
          <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control p-2 border border-gray-200 w-full" rows="4" placeholder="Enter product description"></textarea>
        </div>
        <button type="submit" className="w-full bg-green-400 text-white h-[40px]  ">Submit</button>
      </form>
     } 
       {isLoadingProducts &&
      <div className="mt-10 w-full min-h-[60vh] flex justify-center items-center ">
        <div className=" w-[60px] h-[60px] rounded-full rotate-180 border-2 border-green-300">
          
        </div>
      </div>
}
{Products &&  <div className="sm:px-10 px-2 flex gap-3 w-full flex-col  justify-evenly items-center ">
        {Products.map((product) => (
       <div className="flex border border-gray-600 p-2 items-center  h-[70px] w-full  shadow-lg shadow-grey-500" key={product.id}>
        <img src={product.image} className="w-[50px] mr-4 h-full" alt="" />
        <p>{product.name}</p>
<button className="py-0 px-2 ml-10 bg-red-500 text-white" onClick={() => handleDel(product.id)} >DEL</button>
       </div>
        ))}
      </div>  }
      </div>
      <div>

      </div>
      </div>
    );
  };
  
  export default Dahboard;