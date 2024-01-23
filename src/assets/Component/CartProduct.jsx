import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteItem } from '../Utils/EcomerseStore';
import { increaseItem } from '../Utils/EcomerseStore';
import { decrementItem } from '../Utils/EcomerseStore';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const CartProduct = ({img,name,id,qty}) => {
  const dispatch=useDispatch()
  return (
    <div className='flex mt-14 items-center justify-between p-2 border-b border-white pb-1' >
        <img className='rounded-full w-16 h-16 ' src={img}/>
        <h1 className='text-lg text-white' >{name}</h1>
        <span className='flex text-white text-3xl items-center gap-2' ><span onClick={()=>{dispatch(decrementItem(id))}} className='cursor-pointer'><CiCircleMinus/></span>{qty}<span onClick={()=>{dispatch(increaseItem(id))}} className='cursor-pointer'><CiCirclePlus/></span></span>
        <span onClick={()=>{dispatch(deleteItem(id))}} className='text-2xl text-white' ><RiDeleteBin6Line/></span>
    </div>
  )
}

export default CartProduct