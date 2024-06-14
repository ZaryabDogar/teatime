'use client'
import FamilyModel from '@/components/FamilyModel';
import Model from '@/components/Model';
import React, { useState } from 'react';
import Button from '../../../components/Button';
import Familytable from '../../../components/Familytable';
import Search from '../../../components/Search';
import {showToast} from '../../../utils/showToast'
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
    { id: 1, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Jimmy Lacrose" },
    {
      id: 2,
      col1: "Mr",
      col2: "Jimmy",
      col3: "Johnson",
      col4: "Jimmy Lacrose",
    },
    {
      id: 3,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",
      col4: "Conor Mcgregor",
    },
    {
      id: 4,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",
      col4: "Conor Mcgregor",
    },
    { id: 5, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Jimmy Lacrose" },
    { id: 6, col1: "Mrs", col2: "Ed ", col3: "Trick", col4: "Jimmy Lacrose" },
    { id: 7, col1: "Mr", col2: "Jimmy ", col3: "Johnson", col4: "Mitch Ross" },
    {
      id: 8,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",
      col4: "Mitch Ross",
    },
    { id: 9, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    {
      id: 10,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",
      col4: "Mitch Ross",
    },
    { id: 11, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    {
      id: 12,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",       
      col4: "Mitch Ross",
    },
    { id: 13, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    {
      id: 14,
      col1: "Mrs",
      col2: "Rhonda ",
      col3: "Patrick",
      col4: "Mitch Ross",
    },
    { id: 15, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza sada" },
    { id: 16, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza sadh" },
    { id: 17, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Radsa Shah" },
    { id: 18, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    { id: 19, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    { id: 20, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Rasad Shah" },
    { id: 21, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Raza Shah" },
    { id: 22, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Razdsahah" },
    { id: 23, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "Razadc sahah" },
    { id: 24, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 25, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 26, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 27, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 28, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 29, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 30, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 31, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 32, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 33, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 34, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 35, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 36, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 37, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 38, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 39, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
    { id: 40, col1: "Mr", col2: "Ed ", col3: "Trick", col4: "zaryab" },
  ];
  return (
    <section className={`${isModalOpen?'overflow-hidden ':''}  sm:p-3  md:pt-16 relative`}>
      <div className="flex sm:justify-between sm:px-5 sm:flex-row flex-col-reverse sm:items-end space-y-3">
        <p className="text-greyText2 font-bold leading-[26.53px]">
          Family members
        </p>
        <div className="w-full sm:w-fit flex  items-center md:space-x-14 sm:space-x-12 space-x-5 sm:flex-row flex-ro justify-end relative">
          <Search />
          <Button onopen={openModal} />


        </div>
      </div> <Model isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-full h-full ">
          <FamilyModel onClose={closeModal}></FamilyModel>
        </div>
      </Model>
      <Familytable data={tableData} />
    </section>
  );
};

export default page;
