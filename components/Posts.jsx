import Image from 'next/image'
import React from 'react'

const Posts = () => {
    return (
        <main>
            <section className='bg-transparent/10 p-5 rounded-lg my-5 flex flex-col gap-5'>
                <div className='flex items-center gap-5'>
                    <Image
                        src={"/img-bg-2.jpg"}
                        width={500}
                        height={500}
                        className='w-16 h-16 rounded-full'
                    />
                    <div className=''>
                        <h3 className='text-white font-bold text-lg'>Tony Stark</h3>
                        <h4 className='text-slate-200 font-light text-sm'>@tony_stark_nerd</h4>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi at recusandae nemo velit accusamus sunt assumenda, dolore fuga hic nihil inventore enim minima omnis. Praesentium laudantium natus cum nisi!
                    </p>
                    <Image
                        src={"/img-bg-2.jpg"}
                        width={900}
                        height={900}
                        className='rounded-md w-3/4 h-1/2 ml-auto'
                    />
                </div>
            </section>
        </main>
    )
}

export default Posts