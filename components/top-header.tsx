"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = ["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Health & Beauty"]

export function TopHeader() {
  const [selectedCategory, setSelectedCategory] = useState("Select a categories")

  return (
    <div className="border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">Safira</span>
        </Link>

        {/* Search Bar */}
        <div className="flex max-w-xl flex-1 items-center px-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex min-w-[180px] items-center justify-between border-r-0 rounded-r-none"
              >
                {selectedCategory}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[180px]">
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-1 items-center border rounded-r">
            <input type="text" placeholder="Search here..." className="flex-1 px-4 py-2 outline-none" />
            <Button type="submit" size="icon" className="rounded-l-none bg-[#00B853] hover:bg-[#00A048]">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link href="/logIn" className="text-sm hover:text-[#00B853]">
            REGISTER / LOGIN
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B853] text-xs text-white">
                0
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B853] text-xs text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

