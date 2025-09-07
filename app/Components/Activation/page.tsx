import React from "react";
import Image from "next/image";
const Activation = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center">
        <Image src={"/activation.png"} width={1000} height={1000} alt="mini" />
      </div>
    </div>
  );
};

export default Activation;
