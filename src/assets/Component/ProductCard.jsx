import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({img,name,price,category,id}) => {
  return (
      <Link to={"/product/"+id} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 duration-500 ">
        <div>
           <a  className="block relative h-48 rounded overflow-hidden">
           <img alt="ecommerce"  className="object-cover object-center w-full h-full block" src={img} />
           </a>
           <div className='flex items-center'>
             <div  className="mt-4">
              <h3  className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
              <h2  className="text-gray-900 title-font text-lg font-medium">{name}</h2>
              <p  className="mt-1">₹ {(price)*82}</p>
             </div>
             <button className='bg-blue-500 text-white rounded-lg ml-1 p-1 px-4'>Cart</button> 
           </div>
         
        </div>
      </Link>
        
  )
}

export default ProductCard