import Image from "next/image";
import React from "react";

const Vaping = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center text-center">
          <Image
            src={"/vaping.png"}
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

export default Vaping;
