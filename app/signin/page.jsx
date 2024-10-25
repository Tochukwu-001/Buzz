import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import GithubSignin from "@/components/GithubSignin";
import EmailSignin from "@/components/EmailSignin";

export const metadata = {
  title: "Sign In"
}
const page = () => {
  return (
    <>
      <section className="bg-white overflow-y-auto h-dvh">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <Image
                className="object-cover w-full h-full"
                src={"/img-bg-2.jpg"}
                alt=""
                width={980}
                height={500}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join 35k+ web artisans online today
                </h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 min-h-dvh py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up to Buzz
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  href={"/signin"}
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  Login
                </Link>
              </p>

              <EmailSignin />

              <GithubSignin />
              <br />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
