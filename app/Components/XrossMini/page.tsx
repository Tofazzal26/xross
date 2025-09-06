import Image from "next/image";
import React from "react";

const XrossMini = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <div className="flex justify-center items-center">
          <Image src={"/mini.png"} width={800} height={800} alt="mini" />
        </div>
        <div className="mt-10">
          <p className="w-[600px] mx-auto">
            The XROS 5 is a professional and playable MTL device designed for
            those seeking a more professional and high-quality lifestyle.
            Empowered by COREX 3.0 Tech, it provides users with a more constant
            and stable a richer aroma reproduction, delicate flavor, and
            smoother vaping experience. It has a 1500mAh battery and supports 3A
            Super charging. Adjustable power and airflow allow for
            customization, and the 0.88-inch HD Screen display with six
            different colorful themes provides users with fun interactive
            enjoyment.
          </p>
          <button className="border-[1px] border-gray-600 text-gray-800 mt-5 rounded-full px-6 py-2">
            Watch the video
          </button>
        </div>
      </div>
    </div>
  );
};

export default XrossMini;
