"use client";
import AddResidentModal from "@/components/AddResidentModal";
import Model from "@/components/Model";
import React, { useState } from "react";
import Button from "../../../components/Button";
import ResidentTable from "@/components/ResidentsTable";
import Search from "../../../components/Search";

const Residents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //imaginary data passes to the table

  const tableData = [
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: true,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: false,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: true,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: false,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: true,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: false,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: true,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: false,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: true,
    },
    {
      id: 1,
      col1: "Mr",
      col2: "Ed ",
      col3: "Trick",
      col4: "12/08/1942",
      col5: false,
    },
  ];
  
  return (
    <section className="sm:p-3 md:pt-16 relative">
      <div className="flex sm:justify-between sm:px-5 sm:flex-row flex-col-reverse sm:items-center">
        <p className="text-greyText2 font-bold leading-[26.53px]">
          Current residents
        </p>
        <div className="w-full sm:w-fit flex  items-center md:space-x-14 sm:space-x-12 space-x-5 sm:flex-row justify-end relative">
          <Search />
          <Button onopen={openModal} />
        </div>
      </div>{" "}
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-full h-full ">
          <AddResidentModal onClose={closeModal} progress={progress} setProgress={setProgress} />{" "}
        </div>
      </Model>
      <ResidentTable data={tableData} />
    </section>
  );
};

export default Residents;
