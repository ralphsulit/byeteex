// Next imports
import { Sofia_Sans } from 'next/font/google'

// Custom Imports
import Header from '@/components/Header';

const sofia = Sofia_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={sofia.className}>
      <Header />
    </main>
  )
}
