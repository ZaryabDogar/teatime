'use client';
import FamilyModel from '@/components/FamilyModel';
import Model from '@/components/Model';
import React, { useState } from 'react';
import Button from '../../../components/Button';
import CareworkerTable from '@/components/CareworkerTable';
import Search from '../../../components/Search';
import Careworkermodel from '@/components/Careworkermodel';

const page = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	//imaginary data passes to the table

	const tableData = [
        { id: 1, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com',color:"#9f1239" },
        { id: 2, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com',color:"#be185d" },
        { id: 3, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com',color:"#a21caf" },
        { id: 4, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com',color:"#7e22ce" },
        { id: 5, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' ,color:"#7c3aed"},
        { id: 6, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com',color:"#2563eb" },
        { id: 7, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com',color:"#9f1239" },
        { id: 8, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com',color:"#9f1239" },
        { id: 9, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com' ,color:"#075985"},
        { id: 10, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com',color:"#155e75" },
        { id: 11, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com',color:"#0f766e" },
        { id: 12, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com' ,color:"#166534"},
        { id: 13, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com',color:"#9f1239" },
        { id: 14, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com',color:"#082f49" },
        { id: 15, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com',color:"#4f46e5" },
        { id: 16, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com',color:"#2e1065" },
        { id: 17, col1: 'Edward', col2: 'Scissorhand', col3: 'mbriso432@teatime.com',color:"#9f1239" },
        { id: 18, col1: 'Jeremy', col2: 'Scissorhand', col3: 'jerradu24@teatime.com' ,color:"#500724"},
        { id: 19, col1: 'Mayak', col2: 'Scissorhand', col3: 'edcross@teatime.com' ,color:"#3b0764"},
        { id: 20, col1: 'Radu', col2: 'Scissorhand', col3: 'choo_jim@teatime.com',color:"#166534" },

    
	];
	return (
		<section className="  sm:p-3  md:pt-16 relative">
			<div className="flex sm:justify-between sm:px-5 sm:flex-row flex-col-reverse sm:items-end space-y-3">
				<p className="text-greyText2 font-bold leading-[26.53px]">
					Care workers
				</p>
				<div className="w-full sm:w-fit flex  items-center md:space-x-14 sm:space-x-12 space-x-5 sm:flex-row flex-ro justify-end relative">
					<Search />
					<Button onopen={openModal} />
				</div>
			</div>{' '}
			<Model isOpen={isModalOpen} onClose={closeModal}>
				<div className="w-full h-full ">
					<Careworkermodel onClose={closeModal}></Careworkermodel>
				</div>
			</Model>
			<CareworkerTable data={tableData} />
		</section>
	);
};

export default page;
