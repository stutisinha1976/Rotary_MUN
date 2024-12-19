"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className='bg-[url("/logo.png")] fixed  bg-center bg-no-repeat h-screen'>
        <div className="text-center">
          <p className="text-8xl font-thin lg:text-6xl lg:mt-4 text-[#001F3F] font-serif">
            Rotary Club of Bengal Presidency
            <br />
            <span className="text-3xl">
              <i>presents</i>
            </span>
            <br />
          </p>
          <p className="text-8xl font-thin lg:text-8xl lg:mt-4 text-[#3A6D8C] font-serif">
            Forum of Diplomacy:
          </p>
          <p className="mt-4 text-2xl font-thin text-[#001F3F] font-serif">
            A potpourri of diplomacy, debate, fun, and frolic.
          </p>

          <div className="mt-10">
            <Link href="/register">
              <button className="text-3xl bg-[#3A6D8C] font-serif border border-[#001F3F] hover:bg-[#001F3F] hover:-translate-y-1 hover:scale-110 hover:text-[#6A9AB0] duration-300 text-white px-4 py-4 rounded-xl gap-5 font-light">
                Register now
              </button>
            </Link>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Register;
