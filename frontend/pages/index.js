// Next imports
import { Sofia_Sans } from 'next/font/google'

// Components
import { Header, Feature, About, ProductInfo } from '@/components'

const sofia = Sofia_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={sofia.className}>
      <Header />
      <Feature />
      <About />
      <ProductInfo />
    </main>
  )
}
