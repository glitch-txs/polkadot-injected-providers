import { walletsInfo } from '@/constant/wallets'
import { create } from 'zustand'

interface AccountsStore {
  signer: any
  accounts: Account[]
  connect: (wallet: string, setState?: (a: string)=> void, setModal?: (a: boolean)=> void)=>void
}

export const accountsStore = create<AccountsStore>()((set, get) => ({
  signer: {},
  accounts:[],
  connect: async(wallet: string, setState?: (a: string)=> void, setModal?: (a: boolean)=> void)=> {
    if(!window.injectedWeb3 || !window.injectedWeb3?.[wallet]) {
      window.open(walletsInfo[wallet].install, '_blank')
      return
    }
    await window.injectedWeb3[wallet].enable().then((injected)=>{
      set((state)=>({ signer: injected.signer }))
      injected.accounts.get().then((accounts)=>{
        set((state)=>({ accounts }))
        setState?.('Connected')
        setModal?.(false)
      })
    }).catch(e => setState?.(e.message))
  }
}))