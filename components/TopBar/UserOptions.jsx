"use client";
import Image from 'next/image';
import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserOptions = () => {
    const { data: session, status } = useSession()

    // console.log(session?.user?.name);

    return (
        <main className=''>
            <div className='flex justify-between items-center w-full max-lg:flex-col max-lg:gap-10'>
                <div className='flex items-center gap-3'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='outline-none'>
                            <span className='flex items-center gap-2'>
                                <Avatar>
                                    <AvatarImage src={session?.user?.image} />
                                    <AvatarFallback>
                                        {session?.user?.name.slice(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <span>
                                    <h2 className='text-white font-semibold text-lg'>{session?.user?.name}</h2>
                                    <p className='font-thin text-sm lg:text-gray-400 text-white'>@steverogers_</p>
                                </span>
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={'/profile'}>Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/upload-post'}>Upload Post</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div className='flex gap-8 lg:pl-12 max-lg:flex-col'>
                    <Link
                        href={"#"}
                        className='flex items-center gap-2 text-white '
                    >
                        <IoSettingsOutline className='lg:text-3xl text-2xl' />
                        <p className='text-lg hidden max-lg:flex'>Settings</p>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger className='outline-none flex items-center gap-2 text-white'>
                            <IoMdNotificationsOutline className='lg:text-3xl text-2xl' />
                            <p className='text-lg hidden max-lg:flex'>Notifications</p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="lg:w-[30rem] w-[20rem] lg:mx-10">
                            <DropdownMenuLabel className='flex justify-center items-center text-lg lg:text-2xl'>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={"#"}>
                                    <div className='flex items-center gap-3 mb-2'>
                                        <Image
                                            src={"/img-bg-1.jpg"}
                                            width={500}
                                            height={500}
                                            alt=''
                                            className='w-12 h-12 rounded-full'
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <p>
                                                @steverogers_
                                            </p>
                                            <p className='line-clamp-1'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod doloremque unde nihil illo libero laudantium cumque fugiat, porro ad perspiciatis!
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"#"}>
                                    <div className='flex items-center gap-3 mb-2'>
                                        <Image
                                            src={"/img-bg-1.jpg"}
                                            width={500}
                                            height={500}
                                            alt=''
                                            className='w-12 h-12 rounded-full'
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <p>
                                                @steverogers_
                                            </p>
                                            <p className='line-clamp-1'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod doloremque unde nihil illo libero laudantium cumque fugiat, porro ad perspiciatis!
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </main>
    )
}

export default UserOptions

