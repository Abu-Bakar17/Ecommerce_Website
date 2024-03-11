import React from 'react'
import Link from 'next/link';
import Image,{StaticImageData} from 'next/image'
function Productcard(props:{
  title:string;
  price:number;
  img:StaticImageData;
  category : string;
  id : number;
}) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-5'>
      <Image src ={props.img} alt= "product"/>
    <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
    <p className='font-bold text-lg'>${props.price}</p>
    <p className='font-normal capitalize text-base'>Category <p>
    {props.category}
      </p></p>
   
    </div>
    </Link>
  )
}

export default Productcard