import React from "react";
import Image from "next/image";
const PowerCharge = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/power.png"}
            className="w-full"
            width={1000}
            height={1000}
            alt="mini"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerCharge;
