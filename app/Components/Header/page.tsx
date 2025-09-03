import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div>
            <div className="flex justify-between items-center py-4">
              <div>
                <h2 className="text-xl">XROS 5</h2>
              </div>
              <div>
                <ul className="flex items-center gap-6">
                  <li>Overview</li>
                  <li>Score</li>
                  <li>3D Exihibit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
