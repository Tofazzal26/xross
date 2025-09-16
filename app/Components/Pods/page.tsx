import React from "react";
import Image from "next/image";
const Pods = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/pods.png"}
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

export default Pods;
