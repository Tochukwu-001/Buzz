"use client"
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { signIn } from 'next-auth/react'

const GithubSignin = () => {
    const handleSignin = () => {
        signIn('github', { callbackUrl: '/posts' })
    }
    return (
        <main>
            <div className="mt-3 space-y-3">
                <button
                onClick={handleSignin}
                    type="button"
                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-slate-900 border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                    <div className="me-3 text-2xl">
                        <FaGithub />
                    </div>
                    Sign up with Github
                </button>
            </div>
        </main>
    )
}

export default GithubSignin