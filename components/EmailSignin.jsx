import { getCsrfToken } from 'next-auth/react';
import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const EmailSignin = async () => {
    const csrfToken = await getCsrfToken();
    return (
        <main>
            <form action="/api/auth/signin/email" method="post" className="mt-8">
                <input type="hidden" name='csrfToken' defaultValue={csrfToken} />
                <div className="space-y-5">
                    <div>
                        <label
                            for=""
                            className="text-base font-medium text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MdOutlineAlternateEmail />
                            </div>

                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder="Enter email to get started"
                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                        >
                            Sign up with Email
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default EmailSignin