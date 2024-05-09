import React from "react";

const Directions = (props) => {
    const {Datadirections} = props
  return (
    <>
      <div className="hidden 800px:block relative max-w-[637px]">
        <ol
          style={{
            scrollbarWidth: "thin",
            whiteSpace: "nowrap",
          }}
          className="w-[97%] overflow-y-hidden overflow-x-scroll mx-[8px] my-0 whitespace-nowrap py-0 px-[15px]"
        >
          <li className="liDirections">
            <span>cho tot</span>
          </li>
          <li className="liDirections">
            <span>{Datadirections.carousel}</span>
          </li>
        </ol>
      </div>

      {/* Phan reponsive */}
      <div className="block 800px:hidden">
        <div>
          <div className="relative max-w-[637px]">
            <ol className="w-[97%] bg-[transparent] overflow-y-hidden overflow-x-scroll whitespace-nowrap py-0 px-[15px]">
              <li className="liDirections">
                <span>cho tot</span>
              </li>
              <li className="liDirections">
                <span>{Datadirections.carousel}</span>
              </li>
            </ol>
          </div>
          <div>
            <h1
              style={{ maxWidth: "calc(100% - 20px)" }}
              className="text-[14px] inline-block overflow-hidden text-ellipsis mb-[4px] whitespace-nowrap mt-1 ml-3 font-bold"
            >
              {Datadirections.Title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Directions;
