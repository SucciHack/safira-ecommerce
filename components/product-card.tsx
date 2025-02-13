"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Heart, Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  image: string
  category: string
  title: string
  price: number
  originalPrice?: number
  rating: number
}

export function ProductCard({
  image = "/placeholder.svg?height=300&width=300",
  category = "Category",
  title = "Product Title",
  price = 29.99,
  originalPrice,
  rating = 5,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Quick Action Buttons */}
        <div
          className={`absolute right-4 top-4 flex flex-col gap-2 transition-transform duration-300 ${
            isHovered ? "translate-x-0" : "translate-x-12"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white shadow-md hover:bg-[#00B853] hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white shadow-md hover:bg-[#00B853] hover:text-white"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white shadow-md hover:bg-[#00B853] hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Category Label */}
        <span className="absolute left-4 top-4 rounded-full bg-[#00B853] px-3 py-1 text-xs font-medium text-white">
          {category}
        </span>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="mb-2 text-sm font-medium line-clamp-2 hover:text-[#00B853]">{title}</h3>

        {/* Rating */}
        <div className="mb-2 flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#00B853]">${price.toFixed(2)}</span>
          {originalPrice && <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>}
        </div>
      </CardContent>

      {/* Add to Cart Button */}
      <CardFooter
        className={`absolute bottom-0 left-0 right-0 bg-white p-4 transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Button className="w-full bg-[#00B853] hover:bg-[#00A048]" onClick={() => console.log("Added to cart")}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

