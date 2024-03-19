import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="py-[30px] px-6 md:px-[120px]">
      <h3 className="text-[30px] font-[700] leading-[42px] text-center">
        Our Partners and Sponsors
      </h3>
      <div className="mt-[20px] flex gap-x-[2rem] justify-center items-center ">
        <Image
          src={"/images/partners/payconnect.png"}
          alt="mypayconnect"
          height={70}
          width={233}
        />
        <Image
          src={"/images/partners/jobberman.png"}
          alt="mypayconnect"
          height={70}
          width={233}
        />
      </div>
    </div>
  );
};

export default Partners;
