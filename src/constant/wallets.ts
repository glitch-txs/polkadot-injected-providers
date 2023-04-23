import polkadot from '../../public/wallets/polkadot.png'
import talisman from '../../public/wallets/talisman.svg'
import nova from '../../public/wallets/nova.png'
import subwallet from '../../public/wallets/subwallet.png'

type WalletInfo = {
  [key: string]:{
    name: string
    install: string
    logo:{
      src: any
      width: number
      heigh: number
    }
  }
}

export const walletsInfo: WalletInfo = {
  "polkadot-js":{
    name: "Polkadot.js",
    install:"https://polkadot.js.org/extension/",
    logo:{
      src:polkadot,
      width:32,
      heigh:32
    }
  },
  "subwallet-js":{
    name: "SubWallet",
    install:"https://subwallet.app/download.html",
    logo:{
      src:subwallet,
      width:50,
      heigh:50
    }
  },
  "talisman":{
    name: "Talisman",
    install:"https://www.talisman.xyz/",
    logo:{
      src:talisman,
      width:32,
      heigh:32
    }
  },
  "nova":{
    name: "Nova",
    install:'https://novawallet.io/',
    logo:{
      src:nova,
      width:28,
      heigh:28
    }
  }
}