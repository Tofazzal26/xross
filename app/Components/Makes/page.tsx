import React from "react";
import Image from "next/image";
const Makes = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/Makes.png"}
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

export default Makes;
