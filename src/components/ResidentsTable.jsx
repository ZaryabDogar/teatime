"use client";
import Model from "@/components/Model";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Delresmodel from "./Delresmodel";
import Editresidentmodel from "./Editresidentmodel";
const ResidentTable = (props) => {
  const [iseditmodel, setiseditmodel] = useState(false);
  const [isdelModalOpen, setIsdelModalOpen] = useState(false);

  const { data } = props;

  const [menu, setMenu] = useState({
    disp: false,
    index: null,
  });

  const [selectedRows, setSelectedRows] = useState([]); //can use in futre for checkbox implementaion

  //can use in futre for checkbox implementaion
  const handleCheckboxChange = (rowIndex) => {
    const updatedSelectedRows = selectedRows.includes(rowIndex)
      ? selectedRows.filter((index) => index !== rowIndex)
      : [...selectedRows, rowIndex];

    setSelectedRows(updatedSelectedRows);
  };

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [selectedPage, setSelectedPage] = useState(0);

  const itemsPerPage = 9;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const endOffset = itemOffset + itemsPerPage;

  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setSelectedPage(event.selected);
  };
  //double chevron logic

  const handleDoubleLeftClick = () => {
    if (selectedPage > 0) {
      const newOffset = 0;
      setItemOffset(newOffset);
      setSelectedPage(0);
    }
  };

  const handleDoubleRightClick = () => {
    if (selectedPage < pageCount - 1) {
      const newOffset = (pageCount - 1) * itemsPerPage;
      setItemOffset(newOffset);
      setSelectedPage(pageCount - 1);
    }
  };
  const opendelModal = () => {
    setIsdelModalOpen(true);
  };

  const closedelModal = () => {
    setIsdelModalOpen(false);
  };
  const openeditModal = () => {
    setiseditmodel(true);
  };

  const closeeditModal = () => {
    setiseditmodel(false);
  };

  return (
    <div className="flex flex-col py-2 space-y-4">
      {/*  Table */}
      <div className="relative sm:px-4 w-full overflow-x-auto shadow-md rounded-xl p-3 bg-table mt-3 min-h-[560px]">
        <table className="w-full text-sm text-left rtl:text-right text-white  min-w-[540px]">
          <thead className="w-full sm:text-sm text-xs text-white font-bold uppercase bg-white/10 rounded-xl ">
            <tr className="rounded-xl px-3">
              <th
                scope="col"
                className="pl-10 py-3 rounded-tl-xl rounded-bl-xl "
              >
                title
              </th>
              <th scope="col" className="px-2 py-3 uppercase">
                First Name
              </th>
              <th scope="col" className="px-2 py-3 uppercase">
                Last Name
              </th>
              <th scope="col" className="px-2 py-3 uppercase">
                d.o.b
              </th>
              <th scope="col" className="px-2 py-3 uppercase">
                sharing consent
              </th>
              <th
                scope="col"
                className="px-2 py-3 rounded-tr-xl rounded-br-xl"
              ></th>
            </tr>
          </thead>
          <tbody>
            {/* Adjust data and structure based on your needs */}
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className=" ">
                  <div className=" text-checkbox py-4 flex items-center ">
                    {/* checkbox color to do  */}
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-lightPink"
                      onClick={handleCheckboxChange}
                      key={row.id}
                    />
                    <label
                      htmlFor={`checkbox-table-search-${row.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                    <p className="pl-6 text-[16.88px] font-[500] text-white">
                      {row.col1}
                    </p>
                  </div>
                </td>
                <td className="pr-6 pl-2 py-4 ">
                  <p className="text-[16.88px] font-[500]">{row.col2}</p>
                </td>
                <td className="pr-6 pl-2 py-4">
                  <p className="text-[16.88px] font-[500]">{row.col3}</p>
                </td>
                <td className="pr-6 pl-2 py-4">
                  <p className="text-[16.88px] font-[500]">{row.col4}</p>
                </td>
                <td className="pr-6 pl-14 py-4">
                  <div className="text-xl flex items-center justify-start">
                    <span
                      className={`${
                        row.col5
                          ? "bg-sharpGreen text-[#474747]"
                          : "bg-red text-white"
                      } rounded-full p-[2px]`}
                    >
                      {row.col5 ? <FiCheckCircle /> : <MdOutlineCancel />}
                    </span>
                  </div>
                </td>
                <td className="relative">
                  {" "}
                  <p
                    onClick={() =>
                      setMenu({
                        disp: !menu.disp,
                        index: rowIndex,
                      })
                    }
                  >
                    <HiOutlineDotsHorizontal className=" text-lightWhite text-[1.5rem] cursor-pointer" />
                  </p>
                  <div
                    className={`${
                      menu.disp && menu.index === rowIndex ? "block" : "hidden"
                    } absolute top-12 right-3 2xl:right-12 w-[180px] bg-[#232323] z-10 px-3 py-2 rounded-xl`}
                  >
                    <div className="absolute -top-5 right-1 text-[2rem] text-[#232323]">
                      <IoMdArrowDropup />
                    </div>
                    <ul className="text-center font-medium text-[16.88px] leading-[26.53px] -tracking-[.48px]">
                      <li
                        className="px-2 py-2 cursor-pointer border-gradient"
                        onClick={() => setMenu({ disp: false })}
                      >
                        <p>Key family contact</p>
                      </li>
                      <li
                        className="px-2 py-2 cursor-pointer border-gradient"
                        onClick={() => {
                          setMenu({ disp: false });
                          openeditModal();
                        }}
                      >
                        <p>Edit details</p>
                      </li>
                      <li
                        className="px-2 py-2 cursor-pointer"
                        onClick={() => {
                          setMenu({ disp: false });
                          opendelModal();
                        }}
                      >
                        <p className="text-lightPink">Remove resident</p>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* //models */}
      <Model isOpen={isdelModalOpen} onClose={closedelModal}>
        <div className="w-full h-full ">
          <Delresmodel onClose={closedelModal} />{" "}
        </div>
      </Model>

      <Model isOpen={iseditmodel} onClose={closeeditModal}>
        <div className="w-full h-full ">
          <Editresidentmodel onClose={closeeditModal} />{" "}
        </div>
      </Model>

      <div className="flex text-black w-full md:justify-end items-center justify-center mt-2 space-x-2 ">
        <div
          className={`flex items-center bg-black px-2 py-1 cursor-pointer ${
            selectedPage === 0 ? "disabled bg-greyText2" : ""
          }`}
        >
          <HiOutlineChevronDoubleLeft
            className={`text-white  text-center sm:text-2xl `}
            onClick={handleDoubleLeftClick}
          />
        </div>
        <ReactPaginate
          breakLabel={`of ${pageCount}`}
          forcePage={selectedPage}
          breakLinkClassName="px-3 text-2xl leading-[26.53px] flex items-center text-center font-[700] text-greyText2"
          breakClassName="flex items-center"
          nextLabel={
            <HiOutlineChevronRight className="text-2xl text-center " />
          }
          onPageChange={(event) => {
            // Update the offset when the page changes
            const newOffset = (event.selected * itemsPerPage) % data.length;
            setItemOffset(newOffset);
            handlePageClick(event);

            // Update ReactPaginate's state
            setSelectedPage(event.selected);
          }}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<HiOutlineChevronLeft />}
          renderOnZeroPageCount={null}
          marginPagesDisplayed={0}
          containerClassName="flex select-none sm:text-2xl text-center font-[700] sm:space-x-2 space-x-1"
          pageClassName="px-2"
          // prevPageRel="bg-black"
          previousClassName="bg-black text-white px-2 text-center flex items-center sm:text-2xl "
          nextClassName="bg-black text-white px-2 text-center flex items-center sm:text-xl"
          activeClassName="bg-black text-white  px-3 text-center flex items-center sm:text-2xl"
          disabledClassName="bg-greyText2"
          pageLinkClassName="custom-page-link" // Add a custom class to the page link
        />
        <div
          className={`flex items-center bg-black px-2 py-1 cursor-pointer ${
            selectedPage === pageCount - 1 ? "disabled bg-greyText2" : ""
          }`}
        >
          <HiOutlineChevronDoubleRight
            className="text-white  text-center sm:text-2xl cursor-pointer"
            onClick={handleDoubleRightClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ResidentTable;
