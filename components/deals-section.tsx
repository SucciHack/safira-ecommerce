import { Button } from "@/components/ui/button"
import { DealProductCard } from "./deal-prod-card"

const dealProducts = [
  {
    image: "/bunch-bread-loafs-table.jpg?height=300&width=300",
    title: "Organic Green Apples",
    price: 14.99,
    originalPrice: 29.99,
    discount: 50,
    stockPercentage: 75,
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  },
  {
    image: "/foodHero.jpg?height=300&width=300",
    title: "Fresh Red Tomatoes",
    price: 9.99,
    originalPrice: 19.99,
    discount: 50,
    stockPercentage: 60,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
  {
    image: "/fresh-jackfruit-white-dish_59017-14.jpg?height=300&width=300",
    title: "Organic Carrots Bundle",
    price: 7.99,
    originalPrice: 15.99,
    discount: 50,
    stockPercentage: 80,
    endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
  },
  {
    image: "/pumpkin-juice.jpg?height=300&width=300",
    title: "Fresh Broccoli Head",
    price: 6.99,
    originalPrice: 13.99,
    discount: 50,
    stockPercentage: 45,
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
  },
]

export function DealsSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Deals of the day
            <span className="ml-4 inline-block h-1 w-10 bg-[#00B853]"></span>
          </h2>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dealProducts.map((product, index) => (
            <DealProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-[#00B853] text-[#00B853] hover:bg-[#00B853] hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

