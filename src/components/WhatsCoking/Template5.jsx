import Image from 'next/image';
import React from 'react';
import './Template.css';
import DateConverter from '../DateConverter';
const Template5 = ({ date, mealData ,venue}) => {
	const { starter, main, dessert } = mealData || {};
	return (
		<div className="px-2  bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font  pt-8  mb-3 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="sm:text-2xl text-[22px] font-bold mb-1 text-[#6DFFED] ">
                            WHATS COOKING?
							</p>

							<div className="bg-gradient-to-r from-[#5FC8F5]  to-[#5FC8F5]  py-[1px] rounded-2xl"></div>
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
                    <p className="text-[17.5px] text-[#5FC8F5] font-[300]"><DateConverter inputDate={date}/></p>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 mt-4 max-w-[90%]">
                        <p className="font-[300] text-[#5FC8F5] text-[17.5px]">{starter}</p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">Food Item name </p>
						<div className=" float-right">
                        <Image
						width={50}
						height={50}
						src="/images/t5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="font-[300] text-[#5FC8F5] text-[17.5px]">Lunch </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">{main}</p>
                        <div className=" float-right">
                        <Image
						width={50}
						height={50}
						src="/images/f5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
					<div className="rounded-[18px] bg-[#1C1C1C] p-2 pr-1 pb-0  my-1 max-w-[90%]">
                        <p className="font-[300] text-[#5FC8F5] text-[17.5px]">Dinner </p>
                        <p className="text-[#FFFFFF] text-sm font-[300]">{dessert}</p>
                        <div className=" float-right">
                        <Image
						width={50}
						height={50}
						src="/images/j5.png"
						alt="Residents Img"
					/>
                        </div>
                    </div>
		
				</div>
				<div className="mb-3">
					<Image
						width={99}
						height={99}
						className='md:w-[68px] md:h-[68px] w-[99px] h-[99px]  p-3  float-right'
						src="/images/te5.png"
						alt="Residents Img"
                       
					/>
				</div>
			</div>
		</div>
	);
};

export default Template5;
