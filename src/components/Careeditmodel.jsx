import { handleToast } from '@/utils/showToast';
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
const Careeditmodel = ({ onClose }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const [field1, setField1] = useState('');
	const [field2, setField2] = useState('');
	const [field3, setField3] = useState('');
	const options = ['Mitch Ross', 'Raza Shah', 'Mitch Ross'];
	// Event handlers for each field
	const handleField1Change = (e) => {
		setField1(e.target.value);
	};

	const handleField2Change = (e) => {
		setField2(e.target.value);
	};

	const handleField3Change = (e) => {
		setField3(e.target.value);
	};
	const handleAddFamilyMember = () => {
		if (field1.trim() !== '' && field2.trim() !== '' && field3.trim() !== '') {
			onClose();
			handleToast(
				`${field1}  added as new careworker, 
                they will recieved a signup email soon`,
				<FiUser />,
				true
			);
		} else {
      handleToast(
				'please input all fields',
				<FiUser />,
				true
			);
			
		}
	};
	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<section className="bg-transparent h-screen flex flex-col items-center justify-center  ">
			<div className="max-w-[574px]  bg-model rounded-xl">
				<div className="flex justify-center flex-col py-4">
					<h2 className="text-[14px] font-bold text-white ">Edit care-worker</h2>
					<div
						className=" bg-greyText2  w-full 
                h-[0.5px] mt-3  "
					>
						<div className="flex justify-center  relative">
							<div className="w-[132px] border-t-4 border-blue-500 pt-2  rounded-t-md absolute -top-1"></div>
						</div>
					</div>
				</div>
				<form action="" className="sm:px-20 px-12 sm:py-8 py-2">
					<div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 max-w-[432px]">
						<div className="w-full">
							<label
								for="First Name"
								className="block mb-2 text-sm font-bold text-white/60 text-start capitalize"
							>
								FIRST NAME
							</label>
							<input
								type="text"
								name="brand"
								id="brand"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] placeholder:text-white"
								placeholder="Jonathan"
								required=""
								value={field1}
								onChange={handleField1Change}
							/>
						</div>
						<div className="w-full">
							<label
								for="Last Name"
								className="block mb-2 text-sm font-bold text-white/60 text-start capitalize"
							>
								LAST NAME
							</label>
							<input
								type="text"
								name="Last Name"
								id="Last Name"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] placeholder:text-white"
								value={field2}
								onChange={handleField2Change}
								placeholder="Hayes"
								required=""
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								for="Email address"
								className="block mb-2 text-sm font-bold text-white/60 text-start "
							>
								EMAIL ADDRESS
							</label>
							<input
								type="text"
								name="Email address"
								id="Email address"
								className="bg-white/10  text-sm rounded-2xl  block w-full p-3 outline-none text-white font-[700] placeholder:text-white"
								value={field3}
								onChange={handleField3Change}
								placeholder="johnh232@gmail.com"
								required=""
							/>
						</div>

					
					</div>
					<div className="w-full h-[0.5px] bg-white/10"></div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-y-3 py-8 gap-x-4">
						<button
							type="button"
							className="text-white bg-white/5  font-medium rounded-xl text-sm px-12 py-2.5 text-center   "
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							type="button"
							className={`text-red-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80% ${
								!field1 || !field2 || !field3
									? 'opacity-50 '
									: ''
							}`}
							onClick={handleAddFamilyMember}
							// disabled={!field1 || !field2 || !field3}
						>
							Add member
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Careeditmodel;
