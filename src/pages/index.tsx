import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const DyamicModal = dynamic(()=>import('../modal/Modal'), {ssr: false})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-20 p-24 ${inter.className}`}>
      <DyamicModal modal={true} setModal={(a: boolean)=>{}}>
        hello
      </DyamicModal>
    </main>
  )
}
