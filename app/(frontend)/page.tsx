import { BlogSection } from '@/components/blog-section'
import { DealsSection } from '@/components/deals-section'
import DiscountSection from '@/components/discount-section'
import { FeaturesSection } from '@/components/featured-section'
import { HeroCarousel } from '@/components/hero-corousel'
import { MainNav } from '@/components/main-nav'
import MostViewedSection from '@/components/most-viewed-section'
import ProductsPage from '@/components/products-container'
import React from 'react'

export default function page() {
  return (
    <div>
      <MainNav/>
      <HeroCarousel/>
      <FeaturesSection/>
      <ProductsPage/>
      <DealsSection/>
      <DiscountSection/>
      <MostViewedSection/>
      <BlogSection/>
    </div>
  )
}
