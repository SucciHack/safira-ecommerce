import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface BlogCardProps {
  image: string
  date?: string
  author: string
  title: string
  slug: string
}

export function BlogCard({ image, date, author, title, slug }: BlogCardProps) {
  return (
    <article className="group overflow-hidden">
      {/* Image */}
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="mt-4">
        <div className="mb-2 text-sm text-gray-500">
          {date} | {author}
        </div>
        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-[#00B853]">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-[#00B853] transition-colors hover:text-[#00A048]"
        >
          SHOW MORE
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B853] text-white transition-colors group-hover:bg-[#00A048]">
            <ArrowRight className="h-3 w-3" />
          </span>
        </Link>
      </div>
    </article>
  )
}

