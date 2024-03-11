import React from 'react'
import P1 from "/public/p1.webp"
import P2 from "/public/p1.webp"
import P3 from "/public/p1.webp"
import P4 from "/public/p1.webp"
import P5 from "/public/p1.webp"
import P6 from "/public/p1.webp"
import P7 from "/public/p1.webp"
import P8 from "/public/p1.webp"
import P9 from "/public/p1.webp"
import { Products } from '@/utils/mock'
import Productcard from '@/components/Productcard'
import { StaticImageData } from 'next/image'
const ProductList = ()=> {
  const productChecks = Products.slice(0,3);
  return (
    <div className='flex justify-evenly mt-16 py-10'>
{
  productChecks.map((product)=>(
    <Productcard key={product.id}
     title = {product.name} 
    price = {product.price} 
    img = {product.image as StaticImageData }
    category = {product.category}
    id = {product.id}
    />
  ))
}

       
    </div>
  )
}

export default ProductList