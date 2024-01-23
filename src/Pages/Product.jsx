import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { addToCart } from '../Utils/EcomerseStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStarsRating from 'react-awesome-stars-rating';
const Product = () => {
    const {pid} = useParams();
     
    const [data, setData] = useState(null);
    const alldata = useSelector(store => (store.store.allProducts)?.filter(item => item.id == pid));
    const rating=Math.random()*5
    const review=Math.round(Math.random()*10)
    const [img,setImg]=useState(alldata[0].images[0])
    
    const dispatch=useDispatch();
    useEffect(() => {
      setData(alldata[0]);
    }, []);
    function handleClick(){
      toast.success("Item Added To Cart",{
        theme:"colored",
      });
    }
    if(data===null) return
    console.log(data)
  return (
    <section className="text-gray-600 body-font overflow-hidden">
     <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-[90%] mx-auto gap-1   md:flex ">
      <div className='flex lg:w-1/2 w-full'>
        <div className='w-1/2 ' >
          <img onClick={()=>{setImg(data.images[0])}}className="w-40 mb-4 mt-7 rounded pr-2"src={data.images[0]}/>
          <img onClick={()=>{setImg(data.images[1])}}className="w-40 mb-4 mt-7 rounded pr-2"src={data.images[1]}/>
          <img onClick={()=>{setImg(data.images[2])}}className="w-40 mb-4 mt-7 rounded pr-2"src={data.images[2]}/>
        </div>
        <img alt="ecommerce" className="lg:w-[80%] w-full lg:h-auto h-64 object-cover object-center rounded" src={img}/>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Category: {data.category.name}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data?.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
           <ReactStarsRating isHalf={true} className={"flex"} primaryColor={"#6366f1"} value={rating}/>
            
            <span className="text-gray-600 ml-3">{review}K Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{data.description}</p>
        <div className="flex mt-4">
          <span className="title-font font-medium text-2xl text-gray-900">₹ {data.price*81}</span>
          <button onClick={()=>{dispatch(addToCart(data)); handleClick()}} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer position="top-center" theme={"colored"} />
</section>
  )
}

export default Product