'use client';
import React, { useState } from 'react';

import { TbCirclePlus } from 'react-icons/tb';
const Button = ({ onopen }) => {
	return (
		<button
			className=" flex items-center justify-between py-[.5rem] px-[1rem] sm:gap-x-[.5rem] gap-x-[.3rem]  rounded-xl bg-gradient-to-r from-btnFrom from-10% to-btnTo to-80%  font-bold sm:text-lg text-xs"
			onClick={onopen}
		>
			<TbCirclePlus className="sm:text-[24px] " /> Add new
		</button>
	);
};

export default Button;
