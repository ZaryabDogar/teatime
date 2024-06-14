import Image from 'next/image';
import React from 'react';
import './Template.css';

const Template3 = ({ venue,event,weekCommencing }) => {
	// const { weekCommencing, venue, events } = Data;
	

	const event1=event[0]
	const event2=event[1]
	const event3=event[2]
	const event4=event[3]
	const event5=event[4]
	const event6=event[5]
	const event7=event[6]

	function generateFullWeek(startDate) {
		// Convert the input date string to a JavaScript Date object
	

		
		const currentDate = new Date(startDate);
	  
		// Define the days of the week
		const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	  
		// Create an array to store the result
		const fullWeek = [];
	  
		// Iterate over the next 7 days
		for (let i = 0; i < 7; i++) {
		  // Calculate the current date
		  const currentDateStr = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
	  
		  // Format the date in the desired format
		  const formattedDate = currentDate.toLocaleString('en-US', {
			weekday: 'short',
			day: '2-digit',
			month: 'short',
		  });
	  
		  // Add the formatted date to the result array
		  fullWeek.push(formattedDate);
	  
		  // Move to the next day
		  currentDate.setDate(currentDate.getDate() + 1);
		}
	  
		return fullWeek;
	  }
	  
	  // Example usage
	  const startDate = weekCommencing;
	  const result = generateFullWeek(startDate);
	  
	  
	return (
		<div className="px-3 pr-6 bg-black rounded-xl font-popin ">
			<div className=" flex flex-col">
				<div className="font py-8 flex flex-col">
					<div className="flex justify-between ">
						<div className="w-fit ">
							<p className="text-2xl  text-[#F5E65F]  font-bold mb-1">
								WHATS ON?
							</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  py-[1px] rounded-2xl"></div>
							<p className="text-xs opacity-70 font-semibold">
								{venue===''?'Novenue':venue}
							</p>
						</div>
						<Image
							width={80}
							height={70}
							className='w-[80px] h-[70px]'
							src="/images/whatson.png"
							alt="Residents Img"
						/>
					</div>
					<div className="w-full mt-1">
						<p className="text-[16px] text-[#F5E65F] font-[300]">{result[0]}&nbsp;</p>
						<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[55%]"></div>
						<p className="text-[16px] text-[#F5E65F] font-bold">{event1.name===''?"No evnt":event1.name}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-[#D9D9D9] font-[300]">@ {event1.location===''?'/~':event1.location}</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[1]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event2.name===''?"No evnt":event2.name}</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[2]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event3.name===''?"No evnt":event3.name}</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]"> @{event2.location===''?'/~':event2.location}</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]">@{event3.location===''?'/~':event3.location}</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[3]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event4.name===''?"No evnt":event4.name}</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[4]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event5.name===''?"No evnt":event5.name}</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">@ {event4.location===''?'/~':event4.location}</p>
					</div>
					<div className="flex justify-between">
						{' '}
						<p className="text-xs text-[#D9D9D9] font-[300]"> {event5.location===''?'/~':event5.location}</p>
						<div className="flex flex-col items-end">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[5]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event6.name===''?"No evnt":event6.name}</p>
						</div>
					</div>
					<div className="flex justify-between">
						{' '}
						<div className="flex flex-col items-start">
							<p className="font-[300] text-[16px] text-[#F5E65F]">{result[6]}</p>
							<div className="bg-gradient-to-r from-[#FDCF75]  to-[#F5E65F]  p-[1px] rounded-2xl w-[120%]"></div>
							<p className="text-[16px] text-[#F5E65F] font-bold">{event7.name===''?"No evnt":event7.name}</p>
							<p className="text-xs text-[#D9D9D9] font-[300]">@{event7.location===''?'/~':event7.location}</p>
						</div>
						<p className="text-xs text-[#D9D9D9] font-[300]">@ {event6.location===''?'/~':event6.location}</p>
					</div>
				</div>
				<div className="w-full  justify-center">
				<Image
							width={346.86}
							height={400.72}
							className='w-[257px] h-[89px] 2xl:mt-0 lg:mt-[-68px]'
							src="/images/t3s.png"
							alt="Residents Img"
						/>
				</div>
			</div>
		</div>
	);
};

export default Template3;
