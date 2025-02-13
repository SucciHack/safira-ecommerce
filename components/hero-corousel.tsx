"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Fresh Vegetables",
    subtitle: "Natural Farm Products",
    description: "Widest range of farm-fresh Vegetables, Fruits & seasonal produce",
    image:
      "/istockphoto-953006520-612x612.jpg",
  },
  {
    title: "Organic Fruits",
    subtitle: "Fresh From The Farm",
    description: "Discover our selection of hand-picked organic fruits and berries",
    image: "/pear-viburnum-basket-isolated-white_219717-1658.jpg",
  },
  {
    title: "Seasonal Produce",
    subtitle: "Local & Fresh",
    description: "Experience the taste of seasonal, locally sourced produce",
    image: "/pear-viburnum-basket-isolated-white_219717-1658.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-gray-50">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto grid h-full grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2">
            <div className="z-10 space-y-6">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">{slide.title}</h1>
              <h2 className="text-2xl text-gray-600 lg:text-3xl">{slide.subtitle}</h2>
              <p className="text-lg text-gray-600">{slide.description}</p>
              <Button size="lg" className="bg-[#00B853] hover:bg-[#00A048]">
                READ MORE
              </Button>
            </div>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#00B853]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

