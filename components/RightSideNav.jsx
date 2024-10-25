import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RightSideNav = () => {

    const peopleYouKnow = [
        {
            id: 1,
            name: "Tony Stark",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus consequatur suscipit alias veritatis eaque obcaecati velit hic voluptatem qui.",
        },
        {
            id: 2,
            name: "Bruce Banner",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus consequatur suscipit alias veritatis eaque obcaecati velit hic voluptatem qui.",
        },
        {
            id: 3,
            name: "Natasha Romanoff",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus consequatur suscipit alias veritatis eaque obcaecati velit hic voluptatem qui.",
        },
    ]

    return (
        <main className='w-[18rem] min-h-dvh py-5 px-7 hidden lg:flex'>
            <div className="flex flex-col gap-10 fixed lg:w-[15rem]">

                <div>
                    <h2 className='text-blue-300 font-semibold text-center text-lg'>People you may know</h2>
                </div>

                <div className="flex flex-col gap-5 overflow-y-auto h-[75vh]">

                    {
                        peopleYouKnow.map(person => (
                            <Link
                                key={person.id}
                                href={"#"}
                                className='text-white flex items-center gap-3 hover:bg-transparent/20 p-2 rounded-md'
                            >
                                <Image
                                    src={"/img-bg-2.jpg"}
                                    width={500}
                                    height={500}
                                    alt=''
                                    className='rounded-full w-12 h-12'
                                />
                                <div>
                                    <h3 className=' font-semibold'>{person.name}</h3>
                                    <p className='text-xs line-clamp-1'>{person.desc}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>

        </main>
    )
}

export default RightSideNav