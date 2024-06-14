"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { IoEyeOutline } from "react-icons/io5";

export default function SignIn() {
  const [type, setType] = useState(false);

  const [pass, setPass] = useState("");

  const inputStyle =
    "w-[280px] border-none outline-none bg-field text-sm font-medium text-white px-[1.3rem] py-[.7rem] rounded-xl";

  return (
    <div className="flex justify-center items-center sm:px-[6rem] 2xl:px-[10rem] xl:py-[3rem] py-[1.5rem] min-h-screen max-h-screen overflow-hidden relative">
      {/* Left Heading */}
      <div className="lg:flex hidden flex-col items-start gap-y-4 font-bold text-disable pl-[1rem]">
        <h3 className="text-[38.6px]">Welcome to</h3>
        <div className="">
          <Image src="/images/logo.png" width={173.07} height={173.07} />
        </div>
        <h1 className="text-white text-[64px] font-[700]">TeaTime</h1>
        <h2 className="text-[55px] leading-[57.7px]">
          Welcome to the world's oldest innovation -{" "}
          <span className="text-primary">FAMILY</span>
        </h2>
      </div>
      {/* Images */}
      <Image
        src="/images/img0.png"
        width={127}
        height={127}
        className="absolute top-0 sm:block hidden"
      />
      <Image
        src="/images/img4.png"
        width={132}
        height={132}
        className="absolute bottom-0 left-28 sm:block hidden -z-10"
      />
      {/* Sign Up From */}
      <div className="xl:mt-[5rem] flex items-center justify-center lg:w-auto w-full relative">
        <Image
          src="/images/img1.png"
          width={119}
          height={119}
          className="absolute sm:top-0 lg:-top-24 2xl:top-44 lg:-right-16 sm:right-0"
        />
        <Image
          src="/images/img2.png"
          width={183}
          height={183}
          className="absolute lg:-left-32 sm:left-0"
        />
        <Image
          src="/images/img3.png"
          width={95}
          height={95}
          className="absolute sm:bottom-0 lg:-bottom-28 2xl:-bottom-24 sm:right-0 lg:-right-20"
        />
        <form className="bg-lightDark rounded-3xl shadow-form text-center xl:py-[2rem] py-[1rem] sm:px-[1.5rem] px-[1rem] z-10">
          <div className="py-[1rem] flex flex-col gap-y-[.7rem]">
            <h3 className="font-bold text-[22px] leading-[30px]">
              Getting Started
            </h3>
            <p className="text-grey font-normal text-sm">
              Create an account to continue!
            </p>
          </div>
          {/* Inputs */}
          <div className="inputs pt-[1rem] flex flex-col sm:gap-y-3 gap-y-2">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={inputStyle}
                required
              />
            </div>
            <div className={`${inputStyle} flex items-center justify-between`}>
              <input
                type={`${type ? "text" : "password"}`}
                placeholder="Create Password"
                className={`${inputStyle} !p-0 bg-transparent !rounded-none`}
                onChange={(e) => setPass(e.target.value)}
                required
              />
              <IoEyeOutline
                className="font-medium text-[1.4rem] text-lightWhite cursor-pointer"
                onClick={() => {
                  setType(!type);
                }}
              />
            </div>
          </div>
          <div className="py-[1rem]">
            <PasswordStrengthBar
              minLength={6}
              barColors={[
                "rgba(255, 255, 255, 0.05)",
                "rgba(255, 255, 255, 0.2)",
                "rgba(255, 255, 255, 0.4)",
                "rgba(255, 255, 255, 0.6)",
                "rgba(255, 255, 255, 0.8)",
                "rgba(255, 255, 255, 1)",
              ]}
              password={pass}
            />
          </div>
          <div className="terms flex items-start gap-x-[.5rem] text-grey text-sm font-normal">
            <input
              type="checkbox"
              className="mt-[.3rem] border border-[#DEEBFF] outline-none rounded-lg"
              required
            />
            <p className="text-left text-xs">
              By creating an account, you agree to our <br />
              <Link href="" className="text-primary font-bold">
                Term and Conditions
              </Link>
            </p>
          </div>
          <div className="py-[1.4rem]">
            <button className="w-full py-[.7rem] rounded-2xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-sm font-bold">
              Register
            </button>
          </div>
          <div className="haveAccount py-[.8rem] text-grey text-[13px] font-medium">
            <p>
              Already have an account?
              <Link
                href="/login"
                className="text-transparent bg-clip-text bg-gradient-to-r from-btnFrom from-5% to-btnTo to-80% font-bold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
