"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "./countdown-timer"
import { ShoppingCart } from "lucide-react"

interface DealProductCardProps {
  image: string
  title: string
  price: number
  originalPrice: number
  discount: number
  stockPercentage: number
  endDate: Date
}

export function DealProductCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  stockPercentage,
  endDate,
}: DealProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <Image src={image || "/placeholder.svg"} alt={title} width={300} height={300} className="w-full h-[250px] object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-base font-medium line-clamp-2">{title}</h3>
          <div className="mb-2 flex items-center space-x-2">
            <span className="text-lg font-bold text-[#00B853]">${price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          </div>
          <div className="mb-2">
            <CountdownTimer targetDate={endDate} />
          </div>
          <div className="mb-1">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-[#00B853]" style={{ width: `${stockPercentage}%` }}></div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-5">Available: {stockPercentage}%</p>
        </div>
      </CardContent>
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Button className="w-full bg-[#00B853] hover:bg-[#00A048]">
          <ShoppingCart className="mr-2 h-5 w-4" />
          Add to cart
        </Button>
      </div>
    </Card>
  )
}

