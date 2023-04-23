import React, { useEffect } from 'react'

type Account = {
  address: string
  avatar: string
  name: string
  type: string
}

interface IWallet {
  accounts:{
    get:(t?: any)=>Account[]
    subscribe:()=>void
  }
  metadata:{
    get:()=>void
    provide:()=>void
  }
  provider:{
    isClonable: any
    isConnected: any
  }
  signer:{
    decryptMessage: any
    encryptMessage: any
  }
}

type Wallet = {
  version:string
  enable: ()=>IWallet
}

declare global{
  interface Window {
    injectedWeb3?: {
      [key: string]: Wallet
    };
  }
}

const Wallets = () => {

  async function getInjected(){
    if(!window.injectedWeb3) return
    const injected = await window.injectedWeb3.talisman.enable()
    console.log("awsd", await injected.accounts.get())
  }

  useEffect(()=>{
    getInjected()    
  },[])
   
  return (
    <div>wallets</div>
  )
}

export default Wallets