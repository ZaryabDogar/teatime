"use client";
import Template1 from "@/components/Whatsontemp/Template1";
import Template2 from "@/components/Whatsontemp/Template2";
import Template3 from "@/components/Whatsontemp/Template3";
import Template4 from "@/components/Whatsontemp/Template4";
import Template5 from "@/components/Whatsontemp/Template5";
import { handleToast } from "@/utils/showToast";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import React, {  useState } from "react";
import { FiCheckCircle, FiSearch } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";
import Switch from "react-switch";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import html2canvas from "html2canvas";
const Templates = () => {
  const search_parms = useSearchParams();
  const data = search_parms.get('eventData')
  const result = JSON.parse(data)
  // console.log(result)


  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const [selected, setSelected] = useState(0);

  const [total, setTotal] = useState(0);


  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const pagination = {
    clickable: true,
  };

  const slides = [
    { url: "/images/temp1.png" },
    { url: "/images/temp2.png" },
    { url: "/images/temp3.png" },
  ];
  const templateSlides = [
    { component: Template1 },
    { component: Template2 },
    { component: Template3 },
    { component: Template4 },
    { component: Template5 },
  ];
  const selectedSlide = templateSlides[selected];
  // console.log(selectedSlide.component.name)

  const residents = [
    {
      img: "/images/avatar1.png",
      name: "All residents",
    },
    {
      img: "/images/avatar2.png",
      name: "Mia Sutton",
      post: 20,
    },
    {
      img: "/images/avatar3.png",
      name: "Daniel Thomas",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
    {
      img: "/images/avatar4.png",
      name: "Joshua Smith",
      post: 20,
    },
  ];


 
  const handleDownloadImage = async () => {
    // Wait for a brief moment before capturing the screenshot
   
  
    const element = document.getElementById('print');

    // Set html2canvas configuration
    const canvas = await html2canvas(element, {
      backgroundColor: null, // Set background color to transparent
    });

  
  
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
  
    link.href = data;
    link.download = 'downloaded-image.png';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




  const [residentsState, setResidentsState] = useState(Array(residents.length).fill(false));
  return (
    <>
      <style>
        {`
          .swiper-container {
            // space-between: 20px;
            width: 85%; /* Default width */
          }

          @media (max-width: 1400px) {
            .swiper-container {
              width: 90%;
            }
          }

          @media (max-width: 1300px) {
            .swiper-container {
              width: 80%;
            }
          }

          @media (max-width: 1024px) {
            .swiper-container {
              width: 89%;
            }
          }

          @media (max-width: 768px) {
            .swiper-container {
              width: 50%;
            }
          }

          @media (max-width: 640px) {
            .swiper-container {
              width: 60%;
            }
          }
          @media (max-width: 500px) {
            .swiper-container {
              width: 80%;
            }
          }
          @media (max-width: 400px) {
            .swiper-container {
              width: 89%;
            }
          }
          @media (max-width: 350px) {
            .swiper-container {
              width: 95%;
            }
          }
        `}
      </style>
      <div className=" bg-lightDark rounded-xl ">
        {/* Heading */}
        <div className="relative flex sm:flex-row flex-col items-center justify-between px-3 sm:px-6 py-4 border-b border-[#FFFFFF0D] ">
          <h3 className="font-bold">Whats on this week</h3>
          <h3 className="font-bold">
            {activeIndex === 1
              ? "Select Template"
              : activeIndex === 2
                ? "Preview"
                : activeIndex === 3
                  ? "Who is it for?"
                  : ""}
          </h3>
          <h3 className="sm:static absolute -top-2 right-10">
            {activeIndex} of {total}
          </h3>
        </div>
        {/* Slider */}
        <div className="slider ">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            // nested={true}
            slidesPerView={1}
            spaceBetween={50}
            className="w-full "
            onPaginationRender={(s) => {
              setSwiper(s); // Set swiper instance once it's available
              setTotal(s.slides.length);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex + 1);
            }}
          >
            <SwiperSlide className=" ">
              <Swiper
                spaceBetween={20}
                className="swiper-container"
                pagination={pagination}
                // modules={[Pagination]}
                breakpoints={{
                  1600: {
                    slidesPerView: 3,
                  },
                  1300: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                }}
              >
                {templateSlides.map((slide, i) => (
                  <SwiperSlide className="w-full pb-8 pt-8 max-w-[440px] select-none  " key={i}>
                    <div
                      className={`${selected === i ? "bg-gradient-to-r from-btnFrom to-btnTo rounded-xl overflow-hidden" : ""
                        }   p-1`}
                      onClick={() => setSelected(i)}
                    >
                      <slide.component venue={result.venue} weekCommencing={result.weekCommencing} event={result.events} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>

            <SwiperSlide className="pt-8">
              <div
                className={`bg-gradient-to-r from-btnFrom to-btnTo  p-1 max-w-[320px]  mx-auto rounded-xl`}
              >
                <div id="print" className="bg-transparent">
                {React.createElement(selectedSlide.component, {
                  venue: result.venue,
                  weekCommencing: result.weekCommencing,
                  event: result.events 
                })}</div>


              </div>
            </SwiperSlide>

            <SwiperSlide className=" pt-8 h-full">
              <div className="xl:w-[50%] sm:w-[75%] w-[100%] mx-auto space-y-4">
                {/* Toggle */}
                <div className="bg-[#FFFFFF1A] rounded-[3.28px] px-4 py-3 flex items-center justify-between">
                  <p className="font-semibold text-[13.93px] leading-[18.03px] text-[#F2F2F2]">
                    Publish to my %ageCare% feed
                  </p>
                  <Switch
                    onChange={handleChange}
                    checked={checked}
                    onColor="#F72585"
                    offColor="#B1B1B1"
                    onHandleColor="#F2F2F2"
                    offHandleColor="#F2F2F2"
                    handleDiameter={19.67}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
                {/* Share to */}
                <div className="bg-[#FFFFFF1A] rounded-[3.28px] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[13.93px] leading-[18.03px] text-[#F2F2F2]">
                      Share with individual residents group
                    </p>
                    <GoChevronRight className="text-[19.67px] cursor-pointer" />
                  </div>
                  {/* Searchbar */}
                  <div className="pb-4 pt-8 px-2">
                    <div className="bg-[#FFFFFF1A] rounded-md px-4 py-1 flex items-center gap-2">
                      <FiSearch className="text-[14.75px]" />
                      <input
                        type="text"
                        placeholder="Search Residents"
                        className="bg-transparent px-1 py-0 w-full outline-none text-[17px] leading-[22px] text-disable"
                      />
                    </div>
                  </div>
                  {/* Residents */}
                  <div className="xl:w-[80%] sm:w-[60%] w-[90%] mx-auto py-4 h-[350px]">
                    <ul className="flex flex-col gap-y-8 max-h-full overflow-y-scroll overflow-x-hidden px-2 scrollbar">
                      {residents.map((item, i) => (
                        <li className="flex items-center justify-between" key={i}>
                          <div className="flex items-center gap-2">
                            <Image
                              width={40.97}
                              height={40.97}
                              src={item.img}
                              alt="Residents Img"
                            />
                            <div className="flex flex-col items-start">
                              <p className="text-white font-semibold text-[15px] leading-[20px]">
                                {item.name}
                              </p>
                              <span className="text-[13px] leading-[18px] text-disable">
                                {item.post
                                  ? `Last post ${item.post} hours ago`
                                  : ""}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`w-[22.12px] h-[22.12px] rounded-full ${residentsState[i] ? "bg-primary" : "bg-[#848484]"
                              } cursor-pointer`}
                            onClick={() => {
                              const updatedResidentsState = [...residentsState];
                              updatedResidentsState[i] = !updatedResidentsState[i];
                              setResidentsState(updatedResidentsState);
                            }}
                          // onClick={() => {
                          //   if (i === 0) {
                          //     // If the clicked index is the first index, toggle all states
                          //     const updatedResidentsState = residentsState.map((state, index) => !residentsState[index]);
                          //     setResidentsState(updatedResidentsState);
                          //   } else {
                          //     // Otherwise, toggle only the clicked index
                          //     const updatedResidentsState = [...residentsState];
                          //     updatedResidentsState[i] = !updatedResidentsState[i];
                          //     setResidentsState(updatedResidentsState);
                          //   }
                          // }}
                          ></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Buttons */}
        <div className="px-10">
          <div className="py-6 font-bold text-xs text-white flex sm:flex-row flex-col items-center justify-center gap-4">
            {activeIndex === 1 && (<Link href="/dashboard/broadcast/whatson">
              <button className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl">
                Back
              </button>
            </Link>)}
            {activeIndex === 2 && (<button
              className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl"
              onClick={() => {

                swiper.slidePrev(); // Move to the next slide
              }}
            >

              Back
            </button>)}
            {activeIndex === 3 && (<button
              className="px-20 py-3 bg-[#FFFFFF0D] rounded-2xl"
              onClick={() => {

                swiper.slidePrev(); // Move to the next slide
              }}
            >

              Back
            </button>)}
            {activeIndex === 1 && (<button
              className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl"
              onClick={() => {

                swiper.slideNext(); // Move to the next slide
              }}
            >

        Preview
            </button>)}
            {activeIndex === 2 && (<button
              className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl"
              onClick={() => {

                swiper.slideNext(); // Move to the next slide
              }}
            >

              Next
            </button>)}
            {activeIndex === 3 && (<Link href="/dashboard/broadcast">

              <button
                className="px-20 py-3 bg-gradient-to-r from-btnFrom to-btnTo rounded-2xl"
                onClick={() => {
                  handleToast("Broadcast shared", <FiCheckCircle />, true);
                  handleDownloadImage()
                }}
                
              >
                {activeIndex === 3
                  ? "Publish"
                  : activeIndex === 4 ? 'Publish' : ''}
              </button>
            </Link>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
