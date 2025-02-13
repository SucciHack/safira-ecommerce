import { Plane, HeadphonesIcon, RefreshCw, CreditCard } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "FREE SHIPPING",
    description: "Free shipping on all US order or order above $200",
  },
  {
    icon: HeadphonesIcon,
    title: "SUPPORT 24/7",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: RefreshCw,
    title: "30 DAYS RETURN",
    description: "Simply return it within 30 days for an exchange",
  },
  {
    icon: CreditCard,
    title: "100% PAYMENT SECURE",
    description: "We ensure secure payment with PEV",
  },
]

export function FeaturesSection() {
  return (
    <div className="border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 transition-transform hover:-translate-y-1">
              <feature.icon className="h-8 w-8 shrink-0 text-[#00B853]" />
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

