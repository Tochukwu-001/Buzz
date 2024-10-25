import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import NewPostForm from '@/components/NewPostForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    const session = await getServerSession(authOptions)
    if (session == null) {
        redirect("/signin");
    }
    return (
        <main className="lg:p-5 min-h-screen">
           <h1 className='text-white text-lg lg:text-3xl font-bold p-0 lg:fixed top-20'>What's on your mind?</h1>
           <NewPostForm/>
        </main>
    );
};

export default page;
