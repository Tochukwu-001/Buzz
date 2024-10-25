"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Montserrat, Raleway } from 'next/font/google';
import { AiFillHome } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const icons = {
    AiFillHome: AiFillHome,
    FaUserCircle: FaUserCircle,
    FaPencil: FaPencil,
    IoChatbubbleEllipsesOutline: IoChatbubbleEllipsesOutline
};

const LeftSideNav = () => {
    const pathname = usePathname();

    const panelists = [
        {
            id: 1,
            title: "Posts",
            icon: "AiFillHome",
            path: '/posts'
        },
        {
            id: 2,
            title: "Chats",
            icon: "IoChatbubbleEllipsesOutline",
            path: '/chat'
        },
        {
            id: 3,
            title: "Upload Post",
            icon: "FaPencil",
            path: '/upload-post'
        },
        {
            id: 4,
            title: "Profile",
            icon: "FaUserCircle",
            path: '/profile'
        },
    ];

    return (
        <main className='lg:w-[14rem] w-[4rem] flex flex-col justify-between items-center py-2 lg:py-5 lg:pl-8 h-full'>
            <div className="flex flex-col gap-10 fixed lg:w-[15rem] justify-between h-full">
                <div className=''>
                    <h1 className='text-lg font-semibold text-blue-300 mb-5 pl-5 hidden lg:block'>Explore Panel</h1>
                    {panelists.map(item => {
                        const IconComponent = icons[item.icon];
                        const isActive = pathname === item.path;

                        return (
                            <Link key={item.id} href={item.path} className={`lg:w-[14rem] w-[4rem] flex items-center gap-3 lg:pl-5 pb-5 py-2 ${raleway.className}`}>
                                <IconComponent className={isActive ? 'text-blue-600 text-2xl lg:text-xl mx-auto lg:mx-0' : 'text-white text-2xl lg:text-xl mx-auto lg:mx-0'} />
                                <p className={`hidden lg:block ${isActive ? 'text-blue-500' : 'text-white'}`}>{item.title}</p>
                            </Link>
                        );
                    })}
                </div>


                <div className='absolute max-lg:bottom-20 bottom-28 max-lg:ml-3'>
                    <button onClick={()=> signOut({callbackUrl: '/signin'})} className=''>
                        <div className='w-full flex items-center gap-3 text-red-100 rounded-lg py-2 lg:pl-5'>
                            <MdLogout className='text-2xl' />
                            <span className="hidden lg:block">Log Out</span>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default LeftSideNav;
