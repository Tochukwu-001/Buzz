import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosMail } from "react-icons/io";

const page = () => {
    return (
        <main className='min-h-dvh'>
            <div className='text-white flex flex-col items-center gap-3'>
                <Image
                    src={'/img-bg-1.jpg'}
                    width={800}
                    height={800}
                    alt=''
                    className='w-32 h-32 rounded-full'
                />
                <h2 className='text-3xl font-semibold'>Steve Rogers</h2>
                <p className='text-slate-300 text-sm'>@steverogers_</p>
                <div>
                    <Link href={'mailto:#'} className='flex items-center gap-2 text-lg'>
                        <IoIosMail />
                        steverogers@gmail.com
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default page