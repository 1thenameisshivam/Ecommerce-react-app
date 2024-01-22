import { useEffect } from "react";
import { addAllProducts } from "../Utils/EcomerseStore";
import { useDispatch } from "react-redux";

export function useAllProducts (){
    useEffect(()=>{
        FetchAllProducts()
    },[])
    const dispatch=useDispatch()
    const FetchAllProducts =async ()=>{
        const data=await fetch('https://api.escuelajs.co/api/v1/products')
        const json=await data.json();
        dispatch(addAllProducts(json))
    }
}
