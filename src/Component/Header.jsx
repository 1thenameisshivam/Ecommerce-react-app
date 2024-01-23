import React from 'react'
import { Link } from 'react-router-dom'
import { BsShop } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import {addToggleCheckout} from "../Utils/configSlice"
import { useOnline } from '../Hooks/useOnline';
const Header = () => {
   const dispatch = useDispatch();
   const toggleCart=useSelector(store=>store.config.toggleCheckout)
   const totleitem=useSelector(store=>store.store.cart.length)
   console.log(toggleCart)
   const online=useOnline()
  return (
    <div>
        <header className="text-gray-600 body-font z-10 shadow-lg w-full bg-white fixed top-0">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                 <Link to={"/"} className=" cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                 <span className='text-2xl bg-blue-500 text-white p-2 rounded-full' ><BsShop/></span>
                 <span className="ml-3 text-xl">E-BAZAR</span>
                 </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                     {
                      online?<h1 className='mr-5'>🟢 ONLINE </h1>:<h1 className='mr-5'>🔴 OFFLINE </h1>
                     }
                     <Link to={"/"} className="mr-5 hover:text-gray-900">HOME</Link>
                     <Link to={"/about"} className="mr-5 hover:text-gray-900">ABOUT</Link>
                     <Link to={"/checkout"} className="mr-5 hover:text-gray-900">CHECK OUT</Link>
                </nav>
                <span onClick={()=>{
                      dispatch(addToggleCheckout())
                 }} className='text-3xl relative text-black' ><MdShoppingCart/>
                  <span className='absolute -top-3 bg-blue-500 rounded-full w-6 h-6 -right-2 pl-[7px] text-lg' >{totleitem}</span>
                </span>
            </div>
        </header>
       { toggleCart && <SideBar toggle={toggleCart} />}
    </div>
  )
}

export default Header