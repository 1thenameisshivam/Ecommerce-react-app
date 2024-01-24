import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { addToggleCheckout } from '../Utils/configSlice';
import { calculatePrice } from '../Utils/EcomerseStore';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
const SideBar = ({toggle}) => {
    const dispatch=useDispatch()
    dispatch(calculatePrice())
    const data=useSelector(store=>store.store.cart);
    const price=useSelector(store=>store.store.totalPrice)
    console.log(data)
  return (
    <div className={` md:w-1/3 ${toggle?'-translate-x-0':'translate-x-[100%]'}  duration-500 right-0   w-full fixed top-0  min-h-screen h-auto  z-50 bg-purple-500`}>
     <div>
        <div className='flex justify-between p-4 text-white'>
        <h1 className='text-2xl' >𝕄𝕪 ℂ𝕒𝕣𝕥</h1>
        <span onClick={()=>dispatch(addToggleCheckout())} className='text-3xl cursor-pointer'><RxCrossCircled/></span>
        </div>
        <div className=' h-96 overflow-y-scroll' >
           {
              data.map(data=><CartProduct img={data.images[0]} name={data.title} id={data.id} qty={data.count} />)
           }
        </div>
        <div className='flex items-center justify-center gap-3 mt-5' >
        <h1 ><span className='  text-white font-mono border w-48 p-2 rounded-md'>Total Price:₹ {price}</span></h1>
        <h1><Link to={"/checkout"}><span className='text-white font-mono border  p-2 rounded-md cursor-pointer' >Checkout</span></Link></h1>
        </div>
        

     </div>
    </div>
  )
}

export default SideBar