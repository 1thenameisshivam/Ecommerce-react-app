import React from 'react'
import { useAllProducts } from '../Hooks/useAllProducts'
import { useSelector } from 'react-redux';
import ProductCard from '../Component/ProductCard';
import Shimmer from '../Component/Shimmer';
import { Link } from 'react-router-dom';

const Home = () => {

  const data=useSelector(store=>store.store.allProducts)
  useAllProducts();

  if(data===null) return <Shimmer/>
  return (
    <div className='container mt-20 -z-10 mx-auto px-5 py-24' >
    <div className='flex flex-wrap -m-4 ' >
        {
            data.map(product=><ProductCard img={product.images[0] ?? product.images[0][0]} name={product.title} price={product.price} category={product.category.name} id={product.id} />)
        }
    </div>
    </div>
  )
}

export default Home