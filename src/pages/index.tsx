import Wallets from '@/components/Wallets'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modal, setModal] = useState<boolean>(false)
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-20 p-24 ${inter.className}`}>
      <Wallets
      modal={modal}
      setModal={setModal} />
      <button 
      className='py-0.5 px-2 rounded-md hover:bg-gray-800 transition duration-75 border-2'
      onClick={()=>setModal(p => !p)}
       >Connect</button>
    </main>
  )
}
