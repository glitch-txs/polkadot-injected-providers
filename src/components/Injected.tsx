import React, { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { walletsInfo } from '@/constant/wallets';
import { accountsStore } from '@/store/accountsStore';

const Injected = () => {

  const connect = accountsStore((s)=>s.connect)

  const [injectedWallets, setInjectedWallets] = useState<any[]>([])

  useEffect(()=>{
    if(window.injectedWeb3){
      for(const wallet in window.injectedWeb3){
        if(walletsInfo[wallet]) continue
        setInjectedWallets(p => [...p.filter(p => !p.includes(wallet)), wallet])
      }
    }
  },[])

  return (
  <>
    {
      injectedWallets?.map((value)=>(
        <button key={value} className={s.button} onClick={()=>connect(value)}>
        {value}
      </button>
      ))
    }
  </>
  )
}

export default Injected