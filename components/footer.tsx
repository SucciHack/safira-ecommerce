"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
  }

  return (
    <footer className="bg-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#00B853]" />
                <p>123 Street Name, City, England</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#00B853]" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#00B853]" />
                <p>mail@example.com</p>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Information</h3>
            <ul className="space-y-3">
              {["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-[#00B853] hover:underline">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Customer Service</h3>
            <ul className="space-y-3">
              {["My Account", "Order History", "Wish List", "Newsletter", "Returns"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00B853] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter and get 10% off your first purchase</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
                required
              />
              <Button type="submit" className="w-full bg-[#00B853] hover:bg-[#00A048]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "Youtube" },
          ].map(({ icon: Icon, label }) => (
            <Link
              key={label}
              href="#"
              className="rounded-full bg-white p-3 text-gray-600 transition-colors hover:bg-[#00B853] hover:text-white"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">© {new Date().getFullYear()} Safira. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

