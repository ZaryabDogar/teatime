"use client";
import CIcon from "@/components/CIcon";
import { DM_Sans, Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { FiCheckCircle, FiUser, FiUsers } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { PiBell } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbMessageCircle } from "react-icons/tb";
import { ToastContainer } from "react-toastify";
import { MdOutlineAccountCircle } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa6";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function AdminLayout({ children }) {
  const [sider, setSider] = useState(false);
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      icon: RxDashboard,
      title: "Dashboard",
      route: "/dashboard",
      check: "dashboard",
    },
    {
      icon: FiCheckCircle,
      title: "Approval requests",
      count: 1,
      route: "/dashboard/approvals",
      check: "approvals",
    },
    {
      icon: TbMessageCircle,
      title: "Broadcast",
      route: "/dashboard/broadcast",
      check: "broadcast",
    },
    {
      icon: FiUser,
      title: "Residents",
      route: "/dashboard/residents",
      check: "residents",
    },
    {
      icon: FiUsers,
      title: "Family",
      route: "/dashboard/family",
      check: "family",
    },
    {
      icon: FaRegHeart,
      title: "Care workers",
      route: "/dashboard/careworker",
      check: "careworker",
    },
  ];

  return (
    <section className={`bg-shade min-h-screen ${outfit.className}`}>
      <nav className="sticky top-0 z-50 w-full bg-dark">
        <div className="px-3 py-4 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                className="inline-flex items-center p-2 text-xl text-lightWhite rounded-lg lg:hidden outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <MdMenu onClick={() => setSider(!sider)} />
              </button>
              <Link href="/dashboard" className="flex ms-2 md:me-24">
                <img
                  src="/images/logo.png"
                  className="h-[57px] w-[57px] sm:me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-sm whitespace-nowrap dark:text-white">
                  Tea Time
                </span>
              </Link>
            </div>
            {/* Info */}
            <div className="text-white flex items-center sm:justify-between justify-end sm:w-[80%] w-[50%] sm:pr-8 pr-0">
              <h3 className="font-bold sm:block hidden text-[22px] leading-[30px]">
                👋Jimmy Trick
              </h3>
              <div className="flex items-center justify-between sm:gap-x-8 gap-x-2">
                <button className="w-full sm:flex hidden items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-2xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                  <FaPlus /> Broadcast
                </button>
                <div className="relative cursor-pointer">
                  <p className="w-[1rem] h-[1rem] rounded-full bg-gradient-to-r from-btnFrom to-btnTo flex items-center justify-center text-[8px] absolute -top-1 right-0">
                    1
                  </p>
                  <PiBell className="text-[1.5rem]" />
                </div>
                <div className=" cursor-pointer">
                  <RiSettings4Line className="text-[1.5rem]" />
                </div>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="">
                    {" "}
                    <Image
                      className="rounded-full"
                      width={32}
                      height={32}
                      src="/images/user.png"
                      alt="user photo"
                    />
                  </Link>
                </button>
                <div
                  className={`z-50 my-4 text-base sm:hidden ${
                    menu ? "block" : "hidden"
                  } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="px-4 py-3">
                    <p className="text-sm">Jimmy Trick</p>
                    <p className="text-sm font-medium" role="none">
                      jimmy.trick@teatime.com
                    </p>
                    <Link href="/myacc">
                      <p className="text-sm font-medium flex gap-x-[.5rem] py-2 items-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% w-fit my-2 px-2 rounded-lg">
                        <FaRegUser /> MyAccount
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between gap-x-4 py-4 px-2">
                    <button className="w-full flex items-center justify-between py-[.5rem] px-[1rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% text-base font-bold">
                      <FaPlus /> Broadcast
                    </button>
                    
                  </div>
                </div>
                <div
                  className={`z-50 my-4 text-base  ${
                    menu ? "sm:block hidden" : "hidden"
                  } list-none bg-dark divide-y divide-gray-100 rounded shadow  text-white absolute top-10 right-0`}
                >
                  <div className="flex items-center justify-center  py-4 px-5 w-full">
                    <Link href="/myacc">
                      <button className="w-full flex items-center justify-between py-[.5rem] px-[1.5rem] gap-x-[.5rem] rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80%  font-bold text-sm">
                        <FaRegUser /> MyAccount
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-start z-50">
        <aside
          className={`fixed top-18 lg:pt-0 left-0 z-40 w-64 h-[calc(100vh-72px)] transition-transform ${
            sider ? "translate-x-0" : "-translate-x-full"
          } bg-dark lg:translate-x-0`}
        >
          <div className="h-full pb-4 flex flex-col items-start justify-between overflow-y-auto bg-dark text-disable lg:pt-14 pt-8">
            <ul className="space-y-6 font-medium text-sm">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`${item.route}`}
                    className={`font-bold text-sm leading-[24px] flex items-center gap-3 relative ${
                      i === 0
                        ? pathname === item.route || pathname.includes("/home")
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-btnFrom to-btnTo"
                          : ""
                        : pathname.includes(item.check)
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-btnFrom to-btnTo"
                        : ""
                    }`}
                  >
                    <div
                      className={`min-w-[3px] min-h-[32px] ${
                        i === 0
                          ? pathname === item.route ||
                            pathname.includes("/home")
                            ? "bg-gradient-to-r from-btnFrom to-btnTo"
                            : ""
                          : pathname.includes(item.check)
                          ? "bg-gradient-to-r from-btnFrom to-btnTo "
                          : "bg-none"
                      } rounded-r-full`}
                    ></div>
                    <div className="text-[1.5rem] pl-2">
                      {
                        <CIcon
                          isActive={
                            i === 0
                              ? pathname === item.route ||
                                pathname.includes("/home")
                                ? true
                                : false
                              : pathname.includes(item.check)
                              ? true
                              : false
                          }
                          Icon={item.icon}
                        />
                      }
                    </div>
                    <span className="ms-3">{item.title}</span>
                    {item.count ? (
                      <span className="w-[1rem] h-[1rem] rounded-full bg-btnFrom flex items-center justify-center text-[8px] absolute -right-10 text-white">
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-bold text-xs px-[2rem]">
              © 2023 TeaTime Media Pty Ltd. All rights reserved.
            </p>
          </div>
        </aside>
        <div className="flex-1 lg:ml-64 px-2 sm:px-4 2xl:px-16 overflow-hidden">
          <div className={`w-full mx-auto ${dm.className} relative`}>
            {children}
            <div className="absolute -top-[1%] left-5 sm:left-[50%] translate-x-[-50%] max-w-[625px]">
              <ToastContainer
                className="Toastify__toast-container"
                toastStyle={{
                  margin: 0,
                  padding: 0,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  width: "100%",
                }}
                closeButton={false}
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
                icon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
