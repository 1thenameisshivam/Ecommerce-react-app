import React from 'react'
import { addToggleCheckout } from '../Utils/configSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import CartProduct from '../Component/CartProduct';
import { calculatePrice } from '../Utils/EcomerseStore';
import { ToastContainer, toast } from 'react-toastify';
import { clearCart } from '../Utils/EcomerseStore';
import 'react-toastify/dist/ReactToastify.css';
const CheckOut = () => {
  const dispatch=useDispatch()
  dispatch(addToggleCheckout())
  dispatch(calculatePrice())
  const data=useSelector(store=>store.store.cart);
  const price=useSelector(store=>store.store.totalPrice)
  console.log(data)
  function handleClick(){
    dispatch(clearCart())
    toast.success("Order Sucess",{
      theme:"colored",
    });
  }
  if(data.length==0) return <h1 className='flex items-center justify-center h-[630px] text-white bg-blue-600 font-mono text-5xl' >Cart IS Empty</h1>
  return (
    <div className='w-screen min-h-screen bg-indigo-500 pt-20 h-auto  flex justify-center gap-7' >
      <div className='w-[60%]'>
      {
          data.map(data=><CartProduct img={data.images[0]} name={data.title} id={data.id} qty={data.count} />)
        }
      </div>
      <div className='w-[30%] shadow-black shadow-lg bg-white font-mono h-44 flex flex-col items-center justify-center rounded-lg mt-20'>
         <h1>Total Price:₹ {price}</h1>
         <h1>Delivery Charges:₹ 55.00</h1>
         <h1>Discount:₹ 500</h1>
         <h1>You Have To Pay:₹{price>500?price+55-500:price>0?price+55:0} </h1>
         <button onClick={handleClick} className='p-2 px-5 bg-indigo-500 text-white font-mono rounded-lg' >Order Now</button>
      </div>
      <ToastContainer position="top-center" theme={"colored"} />
    </div>
  )
}

export default CheckOut