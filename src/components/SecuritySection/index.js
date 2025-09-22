import Image from 'next/image'
import React from 'react'

const Security = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col p-10 space-y-3'>
        <div className='flex '>
        <h1 className='text-6xl font-bold'>Invisible security. Unbreakable trust.</h1>
        <Image src={"/lock-and-key.gif"} alt="lock image" height={50} width={50}></Image>
        </div>
        <p className='text-xl'>Your data stays private.Always encrypted.</p>
      </div>
    </div>
  )
}

export default Security
