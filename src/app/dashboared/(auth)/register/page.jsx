"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboared/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <>
      <section className="border-red-500 bg-gray-200 dark:bg-gray-800 md:py-16 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl ">
          <div className="md:w-full px-5">

            <h2 className="text-2xl font-bold text-[#002D74]">Create an Account</h2>

            <p className="text-sm mt-4 text-[#002D74]">
              Thank you for choosing to create an account on our website. We are excited to have you join us!
            </p>
            <form className="mt-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="text"
                  placeholder="Email"
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
                  placeholder="Password"
                  // minLength="8"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
           
              <div className=" mt-2">
              <input type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700" />
                <Link
                  href="/terms"
                  className="ml-2 text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Terms & Conditions
                </Link>
              </div>

              <button type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >Register</button>
              {error && "Something went wrong!"}
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you already have an account...</p>
              <Link className="py-2 px-5 ml-3 bg-white border rounded-lg hover:scale-110 duration-300 border-blue-400" href="/dashboared/login">Login
              </Link>
            </div>
          </div>
          <div className="w-full md:block hidden relative">
            <div className="h-fullabsolute top-0 left-0 "></div>
            <div className="h-full w-full border-2 p-4 relative z-10 rounded-md bg-gradient-to-r from-slate-500 to-slate-800">
              <h1 className="text-2xl font-bold text-center text-white">Create an Account!</h1>
              <Image
                src="/assets/register.jpg"
                className="mt-10 rounded-md"
                alt="login image"
                width={300}
                height={400}
              />
              <p className="text-lg text-white mt-6">
                Thank you for choosing to create an account on our website. We are excited to have you join us!
                Please enter your email address and password to log in and access your account.
              </p>

            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Register;
