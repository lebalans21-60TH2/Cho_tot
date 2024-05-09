import React, { useState, useEffect } from "react";
import {
  CategoriesHouseWareData,
  entertainmentData,
  serviceTravelData,
  petCategoryData,
  householdElectrical,
  officeSuppliesData,
  persionalItemsData
} from "../Constant/indexData";

const Categories = (props) => {
  const { pathname } = props;
  const [dataCategories, setDataCategories] = useState();
  const [categories, setCategories] = useState(pathname);

  useEffect(() => {
    if (categories === "/pages/categories/houseware") {
      setDataCategories(CategoriesHouseWareData);
    } else if (categories === "/pages/categories/entertainment") {
      setDataCategories(entertainmentData);
    } else if (categories === "/pages/categories/serviceTravel") {
      setDataCategories(serviceTravelData);
    } else if (categories === "/pages/categories/pet") {
      setDataCategories(petCategoryData);
    } else if (categories === "/pages/categories/householdElectrical") {
      setDataCategories(householdElectrical);
    } else if (categories === "/pages/categories/officeSupplies") {
      setDataCategories(officeSuppliesData);
    } else if (categories === "/pages/categories/personalItems") {
      setDataCategories(persionalItemsData);
    } 
  });

  return (
    <>
      <div
        style={{
          scrollbarWidth: "thin",
          whiteSpace: "nowrap",
        }}
        className="hidden overflow-x-auto bg-[#fff] 800px:flex list-none py-[12px] px-0 mb-[8px] "
      >
        {dataCategories?.map((item) => (
          <div className="w-[103px] flex-grow-0 flex-shrink-0 basis-[auto]">
            <div
              key={item.id}
              className="flex flex-col justify-center items-center border-b-[2px] border-solid border-[transparent] cursor-pointer "
            >
              <div className="flex justify-center items-center rounded-[50%] p-[8px] bg-[#f4f4f4] hover:bg-[#fecc00]">
                <span className="inline-block overflow-hidden w-[initial] h-[initial] opacity-[1] relative max-w-full">
                  <img
                    className="inset-[0px] p-0 m-[auto] block w-[36px] h-[36px]"
                    src={item.ImgUrl}
                    alt=""
                  />
                </span>
              </div>
              <p className="max-w-[90px] text-[12px] mt-[5px] text-center overflow-hidden text-ellipsis ">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* phan reponsive */}
      <div className="overflow-x-auto 800px:hidden bg-[#fff] flex list-none py-[12px] px-0 mb-[8px]">
        {dataCategories?.map((item) => (
          <div className="w-[78px] flex-grow-0 flex-shrink-0 basis-[auto]">
            <div className="flex flex-col justify-center items-center border-b-[2px] border-solid border-[transparent] cursor-pointer">
              <div className="flex justify-center items-center rounded-[50%] p-[8px] bg-[#f4f4f4]">
                <span className="inline-block overflow-hidden w-[initial] h-[initial] opacity-[1] relative max-w-full">
                  <img
                    className="inset-[0px] p-0 m-[auto] block w-[36px] h-[36px]"
                    src={item.ImgUrl}
                    alt=""
                  />
                </span>
              </div>
              <p className="max-w-[90px] text-[12px] mt-[5px] text-center overflow-hidden text-ellipsis ">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
