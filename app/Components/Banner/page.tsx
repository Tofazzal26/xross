import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative h-[720px] bg-cover bg-no-repeat bg-center bg-[url('/banner.webp')] ">
        <div className="absolute right-[190px] top-[330px]">
          <div>
            <h2 className="text-7xl font-medium text-right">XROS 5</h2>
            <p className="text-3xl font-medium">
              Cross the limits, Cross super charging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
