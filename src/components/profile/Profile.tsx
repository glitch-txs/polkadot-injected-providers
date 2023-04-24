import React from 'react'
import s from './styles.module.scss'
import { accountsStore } from '@/store/accountsStore'
import Image from 'next/image'

const Profile = () => {
  const accounts = accountsStore((s)=> s.accounts)
  console.log(accounts)
  return (
    <div>
      {accounts.map((a)=>(
        <div key={a.address} >
          Profile:
          <div>Address: {a.address}</div>
          {a.avatar && <Image src={a.avatar} width={30} height={30} alt='avatar' />}
          <div>Name: {a.name && a.name}</div>
          <div>type: {a.type}</div>
        </div>
      )) }
    </div>
  )
}

export default Profile