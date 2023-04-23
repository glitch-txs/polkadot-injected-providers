import { walletsInfo } from '@/constant/wallets';
import { accountsStore } from '@/store/accountsStore';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'

declare global{
  interface Window {
    injectedWeb3?: {
      [key: string]: Wallet
    };
  }
}

const DyamicModal = dynamic(()=>import('../modal/Modal'), {ssr: false})

const Wallets = () => {

  const connect = accountsStore((s)=>s.connect)
   
  return (
    <DyamicModal modal={true} setModal={(a: boolean)=>{}}>
      {
        Object.entries(walletsInfo).map(([k, v], i)=>(
          <div key={k} >
            <button onClick={()=>connect(k)}>{v.name}</button>
          </div>
        ))
      }
    </DyamicModal>
  )
}

export default Wallets