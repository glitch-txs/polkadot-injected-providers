import { walletsInfo } from '@/constant/wallets'
import { create } from 'zustand'

interface AccountsStore {
  signer: any
  accounts: Account[]
  connect: (wallet: string)=>void
  connectInjected: ()=>void
}

export const accountsStore = create<AccountsStore>()((set, get) => ({
  signer: {},
  accounts:[],
  connect: async(wallet: string)=> {
    if(!window.injectedWeb3 || !window.injectedWeb3?.[wallet]) {
      window.open(walletsInfo[wallet].install, '_blank')
      return
    }
    const injected = await window.injectedWeb3[wallet].enable()
    const accounts = await injected.accounts.get()
    set((state)=>({ signer: injected.signer }))
    set((state)=>({ accounts }))

    //TODO: handle errors
  },
  connectInjected: async()=> {
    if(!window.injectedWeb3) return
    for(const wallet in window.injectedWeb3){
      const injected = await window.injectedWeb3[wallet].enable()
      const accounts = await injected.accounts.get()
      set((state)=>({ signer: injected.signer }))
      set((state)=>({ accounts }))
    }

    //TODO: handle errors
  }
}))