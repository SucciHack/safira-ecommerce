import React from 'react'
import { ProductCard } from './most-viewed-card'
const products = [
    {
      title: "Donec Non Est",
      category: "Apple",
      price: 158.0,
      originalPrice: 302.0,
      mainImage:
        "/bunch-bread-loafs-table.jpg?height=300&width=300",
      hoverImage: "/foodHero.jpg?height=300&width=300",
    },
    {
      title: "Fresh Vegetables",
      category: "Vegetables",
      price: 145.0,
      originalPrice: 290.0,
      mainImage: "/fresh-jackfruit-white-dish_59017-14.jpg?height=300&width=300",
      hoverImage: "/pumpkin-juice.jpg?height=300&width=300",
    },
    {
      title: "Organic Fruits",
      category: "Fruits",
      price: 170.0,
      originalPrice: 340.0,
      mainImage: "/foodHero.jpg?height=300&width=300",
      hoverImage: "/bunch-bread-loafs-table.jpg?height=300&width=300",
    },
    {
      title: "Fresh Herbs",
      category: "Herbs",
      price: 130.0,
      originalPrice: 260.0,
      mainImage: "/fresh-jackfruit-white-dish_59017-14.jpg?height=300&width=300",
      hoverImage: "/pumpkin-juice.jpg?height=300&width=300",
    },
  ]
export default function MostViewedSection() {
  return (
    <div className='grid grid-cols-4 gap-3 py-6 px-3'>
        {
            products.map((product,i)=>{
                return <ProductCard key={i} product={product}/>
            })
        }
    </div>
  )
}
