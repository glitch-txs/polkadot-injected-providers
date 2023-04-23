type Account = {
  address: string
  avatar: string
  name: string
  type: string
}

interface IWallet {
  accounts:{
    get:(t?: unknown)=> Promise<Account[]>
    subscribe:()=>unknown
  }
  metadata:{
    get:()=>unknown
    provide:()=>unknown
  }
  provider:{
    isClonable: boolean
    isConnected: boolean
  }
  signer:{
    decryptMessage: ()=>unkown
    encryptMessage: ()=>unkown
    signPayload: ()=>unkown
    signRaw: ()=>unkown
  }
}

type Wallet = {
  version:string
  enable: ()=> Promise<IWallet>
}