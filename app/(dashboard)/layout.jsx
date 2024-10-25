import LeftSideNav from '@/components/LeftSideNav'
import TopBar from '@/components/TopBar/TopBar'
import React from 'react'
import { Montserrat } from 'next/font/google'
import RightSideNav from '@/components/RightSideNav'
import AuthProvider from '@/components/AuthProvider'
const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

const layout = ({ children }) => {
  return (
    <main className={`${montserrat.className}  bg-gradient-to-br from-zinc-800 to-slate-900`}>
      <AuthProvider>
        <TopBar />
        <div className='flex'>
          <LeftSideNav />
          <main className='flex-1 bg-gradient-to-tr from-zinc-600 lg:p-5 p-3 to-slate-600/85'>
            {children}
          </main>
          <RightSideNav />
        </div>
      </AuthProvider>
    </main>
  )
}

export default layout
