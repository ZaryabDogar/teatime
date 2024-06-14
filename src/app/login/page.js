"use client";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [type, setType] = useState(false);

  const inputStyle =
    "sm:w-full w-[280px] border-none outline-none bg-field text-sm font-medium text-white px-[1.3rem] py-[.7rem] rounded-xl";

  return (
    <div className="relative max-h-screen overflow-hidden">
      <div className="absolute lg:flex hidden items-center justify-start px-12">
        <Image width={173.7} height={173.7} src="/images/logo.png" />
        <h3 className="font-bold text-[22.43px] leading-[27.24px]">TeaTime</h3>
      </div>
      <Image
        src="/images/img5.png"
        width={127}
        height={127}
        className="sm:block hidden absolute top-10 right-52"
      />
      <Image
        src="/images/img1.png"
        width={213}
        height={213}
        className="sm:block hidden absolute 2xl:left-1/4 xl:left-24 left-14 2xl:top-1/3 xl:top-1/3 top-52"
      />
      <Image
        src="/images/img2.png"
        width={159}
        height={159}
        className="sm:block hidden absolute 2xl:right-1/4 right-5 2xl:bottom-1/3  bottom-[35%]"
      />
      <Image
        src="/images/img3.png"
        width={139}
        height={139}
        className="sm:block hidden absolute -bottom-5 2xl:left-1/3 left-1/4"
      />
      <Image
        src="/images/img4.png"
        width={81}
        height={81}
        className="sm:block hidden absolute bottom-[15%] right-1/3"
      />
      <div className="flex flex-col items-center justify-center gap-y-[2rem] relative overflow-hidden min-h-screen">
        <h1 className="font-bold text-[38.46px] leadinhg-[45.38px]">
          Welcome back
        </h1>

        <form className="bg-lightDark rounded-[3rem] shadow-form text-center xl:py-[2rem] py-[1rem] sm:px-[1.5rem] sm:w-[360px] sm:h-[463px] px-[1rem] z-10">
          <div className="py-[1rem] flex flex-col gap-y-[.7rem]">
            <h3 className="font-bold text-[22px] leading-[30px]">
              Let’s Sign You In
            </h3>
            <p className="text-grey font-normal text-sm leading-[20px]">
              Welcome back, you’ve been missed!
            </p>
          </div>
          {/* Inputs */}
          <div className="inputs font-medium pt-[1rem] flex flex-col sm:gap-y-3 gap-y-2">
            <div>
              <input
                type="text"
                placeholder="Your Email"
                className={inputStyle}
                required
              />
            </div>
            <div className={`${inputStyle} flex items-center justify-between`}>
              <input
                type={`${type ? "text" : "password"}`}
                placeholder="Your Password"
                className={`${inputStyle} !p-0 bg-transparent rounded-none`}
                required
              />
              <IoEyeOutline
                className="font-medium text-[1.4rem] text-lightWhite cursor-pointer"
                onClick={() => {
                  setType(!type);
                }}
              />
            </div>{" "}
            <div className="flex justify-between items-center  text-xs font-bold">
              <div className="remember py-[.5rem] flex items-center gap-x-[.5rem]">
                <input
                  type="checkbox"
                  className="border border-[#DEEBFF] outline-none rounded-lg"
                />

                <p className="text-left">Remember Me</p>
              </div>
              <p className="text-right bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-transparent bg-clip-text">
                Forgot Password
              </p>
            </div>
          </div>

          <div className="py-[1rem]">
            <Link href="/dashboard">
              <button
                type="button"
                className="w-full py-[.7rem] rounded-2xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-sm font-bold"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="haveAccount py-[.8rem] text-grey text-[13px] font-medium">
            <p>
              Don't have an account?
              <Link
                href="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-btnFrom from-5% to-btnTo to-80% font-bold"
              >
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
