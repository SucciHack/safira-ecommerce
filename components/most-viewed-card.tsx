"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  title: string
  category: string
  price: number
  originalPrice: number
  mainImage: string
  hoverImage: string
}

export function ProductCard({product}:{product:ProductCardProps}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group relative rounded-md overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Image Container */}
      <div className="relative mb-4 aspect-square overflow-hidden h-[200px] w-full">
        <Image
          src={product.mainImage || "/placeholder.svg"}
          alt={product.title}
          fill
          className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src={product.hoverImage || "/placeholder.svg"}
          alt={`${product.title} alternate view`}
          fill
          className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="mb-1 text-base font-medium">{product.title}</h3>
        <p className="mb-2 text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-bold text-[#00B853]">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div
        className={`absolute bottom-[72px] left-0 right-0 flex justify-center transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Button className="bg-[#00B853] hover:bg-[#00A048]" onClick={() => console.log("Added to cart")}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

