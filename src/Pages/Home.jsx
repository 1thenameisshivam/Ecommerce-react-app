import React, { useRef } from 'react'
import { useAllProducts } from '../Hooks/useAllProducts'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Component/ProductCard';
import Shimmer from '../Component/Shimmer';
import { Link } from 'react-router-dom';
import { addAllProducts, allItem, searchProduct } from '../Utils/EcomerseStore';
import Testtimonial from '../Component/Testtimonial';

const Home = () => {
  const dispatch=useDispatch()
  const data=useSelector(store=>store.store.allProducts)
  const item=useRef(null)
  useAllProducts();

  if(data===null) return <Shimmer/>
  return (
    <div className='container mt-20 -z-10 mx-auto px-5 py-24' >
    <div className='flex justify-center w-screen md:w-auto'><form onSubmit={(e)=>e.preventDefault()} className='mb-5'>
      <input ref={item} className='p-2 text-black border mr-2 rounded-md' placeholder='Search Products? ' type='text'></input>
      <button onClick={()=>{dispatch(searchProduct(item.current.value))}} className='bg-blue-500 text-white p-2 px-4 rounded-md' >Search</button>
      <button onClick={()=>{dispatch(allItem())}} className='bg-blue-500 ml-2 text-white p-2 px-4 rounded-md' >All Products</button>
    </form></div>
    <div className='flex flex-wrap -m-4 ' >
        {
            data.map(product=><ProductCard img={product.images[0] ?? product.images[0][0]} name={product.title} price={product.price} category={product.category.name} id={product.id} />)
        }
    </div>
    <h1 className='m-auto text-center mt-36 bg-blue-600 text-white font-mono text-3xl mb-10'>......</h1>
    <Testtimonial/>
    </div>
  )
}

export default Home