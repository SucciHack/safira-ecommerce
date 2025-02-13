import { BlogCard } from "./blog-card"


const blogPosts = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%20130213-9qctsecMFZDtXh1lVBUMLJFnyPGQMk.png",
    date: "18/01/2019",
    author: "Plaza Themes",
    title: "Celebrity Daughter Opens Up About Having Her Eye Color Changed",
    slug: "celebrity-daughter-eye-color",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%20130213-9qctsecMFZDtXh1lVBUMLJFnyPGQMk.png?height=400&width=600",
    date: "18/01/2019",
    author: "Plaza Themes",
    title: "Children Left Home Alone For 4 Days In TV Experiment",
    slug: "children-left-home-alone",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%20130213-9qctsecMFZDtXh1lVBUMLJFnyPGQMk.png?height=400&width=600",
    author: "Plaza Themes",
    title: "Lotto Winner Offering Up Money To Any Man That Will Date Her",
    slug: "lotto-winner-offering-money",
  },
]

export function BlogSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-gray-500 italic">Our recent articles about Organic</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Our Blog Posts</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

