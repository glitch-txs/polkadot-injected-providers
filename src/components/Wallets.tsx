import { walletsInfo } from '@/constant/wallets';
import { accountsStore } from '@/store/accountsStore';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import s from './styles.module.scss'
import Injected from './Injected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare global{
  interface Window {
    injectedWeb3?: {
      [key: string]: Wallet
    };
  }
}

type Props = {
  modal: boolean
  setModal: (modal: boolean)=> void
}

const DyamicModal = dynamic(()=>import('../modal/Modal'), {ssr: false})

const Wallets = ({modal, setModal}: Props) => {

  const connect = accountsStore((s)=>s.connect)
  const [state, setState] = useState<string>('')

  useEffect(()=>{
    if(state != ''){
      (()=>toast(state))()
      setState('')
    }
  },[state])
   
  return (
    <>
      <DyamicModal modal={modal} setModal={setModal}>
        {
          Object.entries(walletsInfo).map(([k, v], i)=>(            
            <button key={k} className={s.button} onClick={()=>connect(k, setState, setModal)}>
              <Image src={v.logo.src} width={v.logo.width} height={v.logo.width} alt='' quality={100} />
              {v.name}
            </button>
          ))
        }
        <Injected/>
      </DyamicModal>
      <ToastContainer />
    </>

  )
}

export default Wallets