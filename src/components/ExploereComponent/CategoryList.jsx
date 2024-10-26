import React, { useState } from 'react'

import taco from '../../assets/image/taco.png'
import  pizza from '../../assets/image/pizza.png'
import noodles from '../../assets/image/noodles.png'
import ramen from '../../assets/image/ramen.png'
import masaladosa from '../../assets/image/masaladosa.png'
const CategoryListData=[
    {
        id:1,
        name:'Indian',
        value:'Indian restaurant',
        icon:masaladosa
    },
    {
        id:2,
        name:'Mexican',
        value:'Mexican restaurant',
        icon:taco
    },
    {
        id:3,
        name:'Italian',
        value:'Italian restaurant',
        icon: ramen
    },
    {
        id:4,
        name:'Chinese',
        value:'Chinese restaurant',
        icon:pizza
    },
    {
        id:5,
        name:'Japanese',
        value:'japanese restaurant',
        icon: noodles
    },
 
  
]
function CategoryList({onCategoryChange}) {
    const [categoryList,setCategoryList]=useState(CategoryListData)
    const [selectedCategory,setSelectedCategory]=useState();
    return (
    <div>
        <h2 className='font-bold px-2'>
            Select Food Type
        </h2>
        <div className='grid 
        grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3'>
            {categoryList.map((item,index)=>(
                <div key={index} className={`flex flex-col
                justify-center items-center bg-gray-100
                p-2 m-2 rounded-lg grayscale 
                hover:grayscale-0 cursor-pointer
                text-[13px]
                 border-purple-400
                ${selectedCategory==index
                ?'grayscale-0 border-[1px]'
                :null}`}

                onClick={()=>{setSelectedCategory(index);onCategoryChange(item.value)}}>
                    <img src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    />
                    {item.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList