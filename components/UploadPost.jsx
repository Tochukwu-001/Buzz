"use client";
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FaPen } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Image from 'next/image';


const UploadPost = () => {
    return (
        <main>
            <Formik>
                <Form className='flex flex-col gap-7 bg-transparent/10 p-5 rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="post">
                            <FaPen
                                className='text-white text-lg'
                            />
                        </label>
                        <Field
                            placeholder="Enter a caption..."
                            id="post"
                            name="post"
                            className="outline-none w-full p-2 rounded-lg bg-slate-800/0 text-white border-b"
                        />
                    </div>
                    <div className='flex justify-between px-10'>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="image">
                                <FaRegImage
                                    className='text-white text-3xl cursor-pointer'
                                />
                            </label>
                            <input
                                type="file"
                                id='image'
                                className="outline-none w-full p-2 rounded-lg bg-slate-800/0 text-white hidden"
                            />
                        </div>

                        <button type='submit' className='font-semibold text-white text-3xl flex justify-center rotate-45'>
                            <FaPaperPlane />
                        </button>
                    </div>
                </Form>
            </Formik>
        </main>
    )
}

export default UploadPost