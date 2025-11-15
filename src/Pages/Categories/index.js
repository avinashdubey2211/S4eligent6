import React from 'react'
import men1 from "../../Assets/22539-8-man-file-thumb.png"
import men2 from "../../Assets/22705-9-man-photos-thumb.png"
import { useNavigate } from 'react-router-dom'


const Categories = () => {

    const navigate = useNavigate()

  return (
    <div className='lg:px-60' >

<div className='lg:h-44 h-32 bg-gradient-to-r from-red-300 flex justify-around' onClick={()=>navigate("/products")}>
    <img alt='' src={men2}/><div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Shirts</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-l from-yellow-300 flex justify-around' >
<div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>T-shirts</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>    <img alt='' src={men1}/>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-r from-green-300 flex justify-around'>
    <img alt='' src={men2}/><div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Trousers</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-l from-violet-300 flex justify-around'>
<div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Shoes</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>    <img alt='' src={men1}/>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-r from-cyan-300 flex justify-around'>
    <img alt='' src={men2}/><div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Jackets</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-l from-blue-300 flex justify-around'>
<div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Crans</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>    <img alt='' src={men1}/>
</div>
<div onClick={()=>navigate("/products")} className=' lg:h-44 h-32 bg-gradient-to-r from-pink-300 flex justify-around'>
    <img alt='' src={men2}/><div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>Bracelets</p><p className='font-semibold'>Plain, Printed, Stripes</p></div>
</div>
    </div>
  )
}

export default Categories;