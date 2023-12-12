// Next imports
import { Sofia_Sans } from 'next/font/google'

// Components
import { Header, Feature } from '@/components'

const sofia = Sofia_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={sofia.className}>
      <Header />
      <Feature />
    </main>
  )
}
