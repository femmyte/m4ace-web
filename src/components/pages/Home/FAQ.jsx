import React from "react";
import { IoMdAdd } from "react-icons/io";

const Item = ({ title }) => {
  return (
    <div className="p-5 bg-cream mt-[10px]">
      <div className="flex justify-between items-center">
        <p className="font-[500] text-[20px] leading-[30px] text-[#222057]">
          {title}
        </p>
        <IoMdAdd size={17} />
      </div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[30px]">
      <div className="w-1/2">
        <p className="font-[400] text-[20px] leading-[30px] text-[#1E1E1E] text-center my-[10px]">
          Got Some Questions
        </p>
        <h3 className="font-[700] leading-[42px] text-[30px] text-[#222057] text-center">
          Frequently Asked <span className="text-primary">Question</span>
        </h3>
        <div className="mt-[20px]">
          <Item title={"Are the programs on-site or online?"} />
          <Item title={"Are the programs on-site or online?"} />
          <Item title={"Are the programs on-site or online?"} />
          <Item title={"Are the programs on-site or online?"} />
          <Item title={"Are the programs on-site or online?"} />
          <Item title={"Are the programs on-site or online?"} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
