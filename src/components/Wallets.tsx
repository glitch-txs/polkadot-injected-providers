import { walletsInfo } from '@/constant/wallets';
import { accountsStore } from '@/store/accountsStore';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
import s from './styles.module.scss'
import Injected from './Injected';

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
    <>
      <DyamicModal modal={true} setModal={(a: boolean)=>{}}>
        {
          Object.entries(walletsInfo).map(([k, v], i)=>(            
            <button key={k} className={s.button} onClick={()=>connect(k)}>
              <Image src={v.logo.src} width={v.logo.width} height={v.logo.width} alt='' quality={100} />
              {v.name}
            </button>
          ))
        }
        <Injected/>
      </DyamicModal>
    </>

  )
}

export default Wallets