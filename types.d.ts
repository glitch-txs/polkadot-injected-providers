type Account = {
  address: string
  avatar: string
  name: string
  type: string
}

interface IWallet {
  accounts:{
    get:(t?: any)=> Promise<Account[]>
    subscribe:()=>void
  }
  metadata:{
    get:()=>void
    provide:()=>void
  }
  provider:{
    isClonable: boolean
    isConnected: boolean
  }
  signer:{
    decryptMessage: ()=>{}
    encryptMessage: ()=>{}
    signPayload: ()=>{}
    signRaw: ()=>{}
  }
}

type Wallet = {
  version:string
  enable: ()=> Promise<IWallet>
}