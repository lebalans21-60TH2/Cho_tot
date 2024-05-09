import React from "react";

const Directional = () => {
  return (
    <>
       {/* Phann dieu huong */}
       <div className="w-full overflow-auto flex flex-col justify-between ">
                <div
                  style={{
                    display: "flex",
                    maxWidth: "calc(100vw - 12px)",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <div className="max-w-[637px] relative">
                    <ol
                      style={{
                        scrollbarWidth: "thin",
                        whiteSpace: "nowrap",
                      }}
                      className="w-[97%] bg-[#00000000] overflow-y-hidden overflow-x-auto "
                    >
                      <li className="liDirections">Cho tot</li>
                      <li className="liDirections">Dien thoai</li>
                      <li className="liDirections">Sam sung</li>
                      <li className="liDirections">Sam sung galaxy</li>
                      <li className="liDirections">Sam sung galaxy a30</li>
                      <li className="liDirections">Sam sung galaxy a24</li>
                      <li className="liDirections">Sam sung galaxy a11</li>
                      <li className="liDirections">Sam sung galaxy a30</li>
                    </ol>
                  </div>
                  <div className="pl-4 pr-4 min-h-[1px]">
                    <div className=" mr-0 ml-0 flex justify-end">
                      <button className="buttonBack">Về danh sách</button>
                      <button className="buttonNextAds">Tin tiep</button>
                    </div>
                  </div>
                </div>
              </div>


    </>
  );
};

export default Directional;
