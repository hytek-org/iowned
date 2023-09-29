"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboared");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <>
     
      <section className="border-red-500 bg-gray-200 dark:bg-gray-800 min-h-screen flex items-center justify-center md:py-16">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl ">
          <div className="md:w-full px-5">
          <h2 className="text-2xl font-bold text-[#002D74]">{success ? success : "Welcome Back"}</h2>
        <h2 className="text-2xl font-bold text-[#002D74]">Please sign in to continue.</h2>
            
            <p className="text-sm mt-4 text-[#002D74]">
              Thank you for returning to our website. We are glad to have you back!
            </p>
            <form className="mt-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="required"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  // minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
              {error && error}
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>
            <button   onClick={() => {
            signIn("google");
          }} className="bg-white border py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
              <FcGoogle className="w-6 h-6" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
              <span className="ml-4">Login with Google</span>
            </button>
            <button   onClick={() => {
            signIn("github");
          }} className="bg-white border py-2 w-full rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
              <FaGithub className="w-6 h-6" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
              <span className="ml-4">Login with Github</span>
            </button>
            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you don&apos;t have an account...</p>
              <Link className="py-2 px-5 ml-3 bg-white border rounded-lg hover:scale-110 duration-300 border-blue-400" href="/dashboared/register">    Register
              </Link>
            </div>
          </div>
          <div className="w-full md:block hidden relative">
  <div className="h-fullabsolute top-0 left-0 "></div>
  <div className="h-full w-full border-2 p-4 relative z-10 rounded-md bg-gradient-to-r from-slate-500 to-slate-800">
    <h1 className="text-2xl font-bold text-center text-white">Welcome back!</h1>
    <Image
      src="/assets/login.jpg"
      className="mt-10 rounded-md"
      alt="login image"
      width={300}
      height={400}
    />
    <p className="text-lg text-white mt-6">
      Thank you for returning to our website. We are glad to have you back! 
      Please enter your email address and password to log in and access your account.
    </p>
  </div>
</div>



        </div>
      </section>
    </>
  );
};

export default Login;
