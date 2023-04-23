import Wallets from '@/components/Wallets'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-20 p-24 ${inter.className}`}>
      <Wallets/>
    </main>
  )
}
