import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-[#ff5959] justify-center flex items-center font-bold text-xl text-white h-fit py-3">
      <h1 className="hover:scale-110 cursor-pointer transition-all"><Link href="/">SC : Club</Link></h1>
    </div>
  )
}

export default Footer
