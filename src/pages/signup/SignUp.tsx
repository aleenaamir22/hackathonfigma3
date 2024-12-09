import Link from "next/link";
import React from "react"
import Image from "next/image"



import HeroUp from "./Hero";



export default function SignUpPage() {
  return (
    <>
      <HeroUp/>
      <div className="min-h-screen bg-white">  
      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <div className="container mx-auto max-w-md p-4">
  <form>
    <input
      type="email"
      className="w-full p-2 mb-4 border rounded-lg"
      placeholder="Email"
    />
    <input
      type="password"
      className="w-full p-2 mb-4 border rounded-lg"
      placeholder="Password"
    />
    <button
      type="submit"
      className="w-full py-2 bg-orange-500 text-white rounded-lg"
    >
      Sign Up
    </button>
  </form>
</div>

          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={require("../../../public/google.png")} alt="Google" className="w-[20px] h-[20px] left-[16px] mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={require("../../../public/apple2.jpeg")} alt="Apple" className="w-[24px] h-[24px] left-[16px] mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
 </>
  );
}