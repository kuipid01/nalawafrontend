/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


const Card = ({product}) => {

  const {cart,setCart} = useContext(CartContext)


const addToCart = ()  =>{

  setCart([{product},...cart] )

}

 const removeFromeCart = (id)  =>{

 const newCart = cart.filter((p) => p.product.id!== id)

 setCart(newCart)
 }

  return (
    <div className=' w-[35%] sm:w-[250px]  cursor-pointer mr-1 h-fit min-h-[250px] sm:mb-10 mb-5  overflow-hidden sm:h-fit relative rounded-md '>
      
      <div className='w-full relative h-[200px] overflow-hidden  '>
     {
      String(product?.image).length!==0 ?  <img src={product?.image} className='  w-full object-cover h-full' alt="card" />
    : <div className='  w-full object-cover h-full' ></div>
     }
       <div className="p-1  sm:p-2 absolute right-1  sm:right-2 top-1 sm:top-3 text-[10px] sm:text-sm rounded-full bg-green-700 text-white" > {product.category} </div>
      </div>
       
        {/* {
          !type ? <span className="absolute text-green-900 capitalize text-sm top-4 left-4 ">
          new
                  </span> : null
        } */}
        
       <div className=" transition-all -mt-2 z-30 relative hover:bg-[#aad0bbfa] bg-white w-full bottom-10  p-2  rounded-xl h-fit max-h-1/3  md:mb-0"> 
            <p className=' font-normal text-[10px] sm:text-[20px]'> {product?.name}</p>
           <small className="mt-2 text-[10px] sm:text-[12px] text-slate-600">Nalawa Admin</small>
            <p className='font-light text-[10px] sm:text-[15px] mt-1 text-black ' > # {product?.price} / {product?.quantity} </p>
                 {/* <p className=' line-through text-gray-600 text-sm' > # {initialPrice}</p> */}
               
     
        </div> 
        {
        cart.some(p => p?.product?.id===product.id) ? <button onClick={ () => removeFromeCart(product?.id)} className=' bg-red-500 py-1 px-1 sm:py-2 text-sm sm:text-normal mt-2 cursor-pointer w-full text-white'>Remove </button>
      :  <button onClick={addToCart} className='bg-green-400 relative -mt-10 w-full h-[30px] sm:h-[40px] text-white rounded-xl  bottom-0'>Add To Cart</button>
      }
       
    </div>
  )
}

export default Card