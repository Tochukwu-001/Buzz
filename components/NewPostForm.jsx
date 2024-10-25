"use client";
import { db, storage } from '@/lib/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Field, Form, Formik } from 'formik';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { FaPaperPlane, FaPen, FaRegImage } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";

const NewPostForm = () => {
    const [imagePreview, setImagePreview] = useState([]);
    const { data: session } = useSession();

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const imageUrls = [] // store image URLs

            if (values.image && values.image.length > 0) {
                for (const file of values.image) {
                    if (file && file.name) {
                        const ext = file.name.split(".").pop(); // Get file extension
                        const fileName = `buzz_${new Date().getTime()}.${ext}`; // Generate unique file name

                        const storageRef = ref(storage, `uploads/${fileName}`); // Create storage reference
                        await uploadBytes(storageRef, file); // Upload file

                        const downloadUrl = await getDownloadURL(storageRef); // Get file URL
                        imageUrls.push(downloadUrl);
                    }
                }
            }

            const postData = {
                post: values.post,
                images: imageUrls,
                timestamp: new Date(),
                author: session?.user?.name,
                authorImg: session?.user?.image,
                likes: 0,
                likedBy: []
            }
            const docRef = collection(db, "posts")
            await addDoc(docRef, postData)

            resetForm({ values: { post: '', image: [] } })
            setImagePreview([])

        } catch (error) {
            console.error("Error adding post: ", error);
            alert("Failed to submit post, please try again")
        }
        finally {
        }

    }

    const handleImageChange = (e) => {
        const f = e.target.files;
        const files = Array.from(f)
        const previews = [];
        setImagePreview([])
        files.forEach(file => {

            if (file) {
                const fileUrl = URL.createObjectURL(file);
                previews.push(fileUrl)
            }
        });

        setImagePreview(previews)
    };

    const filterImage = (file) => {
        const images = imagePreview.filter(f => (f != file));
        setImagePreview(images)
    }

    return (
        <main className="flex justify-center lg:p-5 min-h-screen ">
            <Formik
                initialValues={{
                    post: "",
                    image: []
                }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className='flex flex-col gap-7 bg-gray-800 lg:p-6 p-3 rounded-lg shadow-lg w-full max-w-md h-[80vh] overflow-y-auto'>
                        <div className='flex items-center gap-4'>
                            <label htmlFor="post" className="text-white">
                                <FaPen className='lg:text-2xl text-lg' />
                            </label>
                            <Field
                                placeholder="Add a caption"
                                id="post"
                                name="post"
                                className="outline-none w-full p-3 rounded-md bg-gray-700 text-white"
                            />
                        </div>

                        <div className="flex overflow-x-auto gap-2 p-1 max-w-full imgPreview">
                            {imagePreview.map((file, index) => (
                                <div key={index} className="relative flex-shrink-0">
                                    <img src={file} alt="Preview" className="rounded-lg w-40 h-40 object-cover" />
                                    <button
                                        type="button"
                                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                                        onClick={() => filterImage(file)}
                                    >
                                        <IoIosClose className="text-lg" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="image">
                                    <FaRegImage className='text-white text-3xl cursor-pointer hover:opacity-80 transition-opacity duration-150' />
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    name='image'
                                    id='image'
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const files = Array.from(e.target.files);
                                        setFieldValue("image", files);
                                        handleImageChange(e)
                                    }}
                                />
                            </div>

                            <button
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-600 transition-colors duration-150 text-white text-lg px-4 py-2 rounded-full flex items-center gap-2'
                            >
                                Post <FaPaperPlane className='ml-2' />
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </main>
    )
}

export default NewPostForm