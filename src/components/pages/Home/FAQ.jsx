"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const content = [
  {
    id: 1,
    question: "Are the programs on-site or online?",
    answer: "lorem ipsum dolor",
  },
  {
    id: 2,
    question: "Are the programs on-site or online?",
    answer: "lorem ipsum dolor",
  },
  {
    id: 3,
    question: "Are the programs on-site or online?",
    answer: "lorem ipsum dolor",
  },
  {
    id: 4,
    question: "Are the programs on-site or online?",
    answer: "lorem ipsum dolor",
  },
  {
    id: 5,
    question: "Are the programs on-site or online?",
    answer: "lorem ipsum dolor",
  },
];
const Item = ({ title, handleOpen, opened, content }) => {
  return (
    <div className="p-5 bg-cream mt-[10px]">
      <div className="flex justify-between items-center" onClick={handleOpen}>
        <p className="font-[500] text-[20px] leading-[30px] text-[#222057]">
          {title}
        </p>
        <IoMdAdd size={17} />
      </div>
      {opened && (
        <div className="">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
const FAQ = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-center justify-center py-[30px]">
      <div className="px-3 w-full md:w-1/2">
        <p className="font-[400] text-[20px] leading-[30px] text-[#1E1E1E] text-center my-[10px]">
          Got Some Questions?
        </p>
        <h3 className="font-[700] leading-[42px] text-[30px] text-[#222057] text-center">
          Frequently Asked <span className="text-primary">Question</span>
        </h3>
        <div className="mt-[20px]">
          {content.map((item) => {
            return (
              <div className="" key={item.id}>
                <Item
                  title={item.question}
                  handleOpen={handleOpen}
                  opened={open}
                  content={item.answer}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
