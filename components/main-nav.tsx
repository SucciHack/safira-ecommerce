"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = [
  "Electronics & Computers",
  "Smartphones & Tablets",
  "Fashion & Accessories",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Books & Stationery",
  "Health & Beauty",
  "Toys & Games",
  "Automotive",
  "Garden & Tools",
]

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Specials", href: "/specials" },
  { name: "Blog", href: "/blog" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=" bg-white/60 backdrop-blur-lg shadow-md p-2 sticky top-0 z-50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* All Categories Dropdown */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded bg-[#00B853] px-4 py-2 text-white hover:bg-[#00A048]">
                <Menu className="h-5 w-5" />
                <span>All Categories</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[280px]">
              {categories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Main Menu */}
          <nav className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-[#00B853]">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Customer Support */}
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-[#00B853]" />
          <div>
            <p className="text-sm font-medium">(08) 23 456 789</p>
            <p className="text-xs text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

