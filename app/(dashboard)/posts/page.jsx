"use client";
import { db } from '@/lib/firebaseConfig';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHeart } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { FaRegUser } from "react-icons/fa";

const Page = () => {
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const userId = session?.id;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const postData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postData);
            } catch (error) {
                console.error("Error fetching posts", error);
                alert("There was an error displaying the posts");
            }
        };

        fetchPosts();
    }, []);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleLikePost = async (postId) => {
        // Find the post by its ID
        const postIndex = posts.findIndex((post) => post.id === postId);
        if (postIndex === -1) return;

        const post = posts[postIndex];
        const likedBy = post.likedBy || [];

        // Toggle like state
        const updatedLikedBy = likedBy.includes(userId)
            ? likedBy.filter(id => id !== userId)
            : [...likedBy, userId];

        // Update likes count
        const updatedLikes = updatedLikedBy.length;

        // Update the database
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            likes: updatedLikes,
            likedBy: updatedLikedBy,
        });

        // Update the local state
        setPosts((prevPosts) => prevPosts.map((p) =>
            p.id === postId ? { ...p, likes: updatedLikes, likedBy: updatedLikedBy } : p
        ));
    };

    return (
        <main className='max-w-2xl mx-auto lg:p-4 overflow-y-auto h-[87vh]'>
            <h1 className='capitalize font-bold text-3xl text-white mb-3'>Posts</h1>
            {posts.map((post) => (
                <section
                    key={post.id}
                    className='bg-gray-800 lg:p-5 p-3 rounded-lg mb-3 lg:mb-6 shadow-md flex flex-col gap-4 md:gap-6'
                >
                    <div className='flex items-center gap-3 md:gap-4'>
                        <Avatar>
                            <AvatarImage src={post.authorImage || <FaRegUser className='text-2xl'/>} />
                            <AvatarFallback>{post.author?.slice(0, 2).toUpperCase() || "NA"}</AvatarFallback>
                        </Avatar>

                        <div>
                            <h3 className='text-white font-semibold text-base md:text-lg'>{post.author}</h3>
                            <h4 className='text-gray-400 font-light text-xs md:text-sm'>{post.handle || "@unknown_handle"}</h4>
                        </div>
                    </div>

                    <div className='text-white mt-2 md:mt-3'>
                        <p className='mb-3 md:mb-4 text-sm md:text-base'>{post.post}</p>
                        {
                            post.images && post.images.length > 0 && (
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                    {
                                        post.images.map((imageUrl, i) => (
                                            <Image
                                                key={i}
                                                src={imageUrl}
                                                width={900}
                                                height={900}
                                                alt='Post image'
                                                onClick={() => handleImageClick(imageUrl)}
                                                className='rounded-md object-contain w-full max-h-60 md:max-h-80 cursor-pointer hover:opacity-80 transition-opacity duration-150'
                                            />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <button onClick={() => handleLikePost(post.id)}>
                            {post.likedBy && post.likedBy.includes(userId) ? (
                                <FaHeart className='text-red-500 text-lg' />
                            ) : (
                                <FaRegHeart className='text-gray-300 text-lg' />
                            )}
                        </button>
                        <span className='text-gray-300 text-lg'>
                            {post.likes || 0}
                        </span>
                    </div>
                </section>
            ))}

            {
                selectedImage && (
                    <div className='fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center' onClick={closeModal}>
                        <Image
                            src={selectedImage}
                            width={900}
                            height={900}
                            alt='Selected post image'
                            className='rounded-md max-w-full max-h-full'
                        />
                    </div>
                )
            }
        </main>
    );
};

export default Page;
