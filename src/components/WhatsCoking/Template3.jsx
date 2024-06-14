import Image from 'next/image';
import React from 'react';
import './Template.css';
import DateConverter from '../DateConverter';
const Template3 = ({ date, mealData ,venue}) => {
	const { starter, main, dessert } = mealData || {};
	return (
		<div className="px-2  bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font  pt-8  mb-3 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="sm:text-2xl text-[22px] font-bold mb-1 text-[#F5E65F] ">
                            WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#F5E65F]  to-[#FDCF75]  py-[1px] rounded-2xl"></div>
							<p className="text-sm opacity-70 font-semibold">
							{venue===''?'Novenue':venue}
							</p>
						</div>
						
						<Image
							width={80}
							height={70}
							className='w-[80px] h-[90px]'
							src="/images/whatscook.png"
							alt="Residents Img"
						/>
					</div>
                    <p className="text-[17.5px] text-[#F5E65F] font-[300]"><DateConverter inputDate={date}/></p>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 mt-4 max-w-[90%]">
                        <p className="font-[300] text-[#F5E65F] text-[17.5px]">Breakfast </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">{starter}</p>
						<div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/t3.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="font-[300] text-[#F5E65F] text-[17.5px]">Lunch </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">{main}</p>
                        <div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/f3.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="font-[300] text-[#F5E65F] text-[17.5px]">Dinner </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">{dessert}</p>
                        <div className="  float-right">
                        <Image
						width={50}
						height={50}
						src="/images/j3.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
		
				</div>
				<div className="mb-3">
					<Image
						width={99}
						height={99}
						className='md:w-[68px] md:h-[68px] w-[99px] h-[99px] float-right'
						src="/images/te3.png"
						alt="Residents Img"
                       
					/>
				</div>
			</div>
		</div>
	);
};

export default Template3;
