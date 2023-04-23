type WalletInfo = {
  [key: string]:{
    name: string
    install: string
    logo: any
  }
}

export const walletsInfo: WalletInfo = {
  "polkadot-js":{
    name: "Polkadot.js",
    install:"https://polkadot.js.org/extension/",
    logo:''
  },
  "subwallet-js":{
    name: "SubWallet",
    install:"https://subwallet.app/download.html",
    logo:''
  },
  "talisman":{
    name: "Talisman",
    install:"https://www.talisman.xyz/",
    logo:''
  },
  "nova":{
    name: "Nova",
    install:'https://novawallet.io/',
    logo:''
  }
}