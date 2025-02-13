import { ProductCard } from "@/components/product-card"

const products = [
  {
    image: "/foodHero.jpg?height=300&width=300",
    category: "Vegetables",
    title: "Fresh Organic Broccoli",
    price: 29.99,
    originalPrice: 39.99,
    rating: 5,
  },
  {
    image: "/fresh-jackfruit-white-dish_59017-14.jpg?height=300&width=300",
    category: "Fruits",
    title: "Sweet Red Apples",
    price: 24.99,
    rating: 4,
  },
  {
    image: "/pumpkin-juice.jpg?height=300&width=300",
    category: "Organic",
    title: "Fresh Garden Tomatoes",
    price: 19.99,
    originalPrice: 29.99,
    rating: 5,
  },
  {
    image: "/bunch-bread-loafs-table.jpg?height=300&width=300",
    category: "Fresh",
    title: "Organic Carrots Bundle",
    price: 15.99,
    rating: 4,
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

