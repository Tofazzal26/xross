import React from "react";
import Image from "next/image";
const Finish = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/Finish.png"}
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

export default Finish;
