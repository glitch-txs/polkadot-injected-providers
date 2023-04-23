import React, { useEffect } from 'react'

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
    console.log("awsd", injected.signer)
  }

  useEffect(()=>{
    getInjected()    
  },[])
   
  return (
    <div>wallets</div>
  )
}

export default Wallets