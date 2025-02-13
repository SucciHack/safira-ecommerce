import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { TopHeader } from '@/components/top-header'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
    <TopHeader/>
      {children}
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}
