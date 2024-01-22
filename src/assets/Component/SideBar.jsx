import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { addToggleCheckout } from '../Utils/configSlice';
const SideBar = ({toggle}) => {
    const dispatch=useDispatch()
  return (
    <div className={` md:w-1/3 ${toggle?'-translate-x-0':'translate-x-[100%]'}  duration-500  right-0  w-full fixed top-0 bg-blue-500 h-screen z-20 bg-purple-500`}>
     <div className='flex justify-between p-4 text-white' >
        <h1 className='text-2xl' >𝕄𝕪 ℂ𝕒𝕣𝕥</h1>
        <span onClick={()=>dispatch(addToggleCheckout())} className='text-3xl cursor-pointer'><RxCrossCircled/></span>
     </div>
    </div>
  )
}

export default SideBar