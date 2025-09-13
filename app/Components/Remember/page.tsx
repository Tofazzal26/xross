import React from "react";
import Image from "next/image";
const Remember = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/Remember.png"}
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

export default Remember;
