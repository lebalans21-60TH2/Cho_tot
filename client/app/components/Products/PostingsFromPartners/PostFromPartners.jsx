import React from "react";
import { homeProducts } from "../../Constant/indexData";

const PostFromPartners = (props) => {
    const { category } = props;
    let productByCategory = homeProducts.filter(sp => sp.category === category);
   
  return (
    <>
      <div className="bg-[#FFFFFF] my-[12px] w-full hidden 800px:block">
        <h2
          style={{ fontStretch: "normal", fontStyle: "normal" }}
          className="text-[16px] font-bold m-0 mx-[12px] mt-[12px] mb-[9px] leading-[1.41] tracking-normal text-[#222] flex items-center "
        >
          <div>Tin đăng từ Đối Tác Chợ Tốt</div>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(https://static.chotot.com/storage/chotot-icons/svg/info-icon.svg)",
              marginLeft: "8px",
              marginTop: " 2px",
              cursor: "pointer",
            }}
          ></div>
        </h2>
        <div className="relative ">
          <div className="px-[12px] pt-[7px] pb-[16px] justify-start text-[14px] flex text-[#222] overflow-x-auto overflow-y-hidden whitespace-nowrap w-full">
            <div className="text-[12px] text-[#fe9900] font-bold min-w-[48px] ">
              Đối tác <br /> chợ tốt
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Hàng đúng mô tả
              </div>
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Đồng kiểm tra hàng
              </div>
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Địa điểm bán uy tín
              </div>
            </div>
          </div>
        </div>
        {/* LIST SAN PHAM */}
        <div className="relative">
          <div
            style={{
              scrollbarWidth: "thin",
              whiteSpace: "nowrap",
            }}
            className="overflow-x-auto bg-[#fff] flex items-start list-none border-t-[1px] border-solid border-[#f4f4f4] w-full"
          >
            <div className="flex border-b-[1px] border-solid border-[#F4F4F4] py-0 px-[2px]">
              {productByCategory.map((item) => (
                <div className="w-[178px] p-[12px] border-b-0 ">
                  <div className="relative block h-full outline-0">
                    {/* hifnh anh */}
                    <div className="relative flex justify-center ">
                      <div
                        style={{
                          position: "relative",
                          background:
                            "url(https://static.chotot.com/storage/default_images/c2c_ad_image.webp) 50% no-repeat",
                          backgroundSize: "cover",
                          height: "183px",
                          width: "183px",
                          borderRadius: "2px",
                          overflow: "hidden",
                          display: "inline-block",
                        }}
                        className="h-[152px] w-[152px]"
                      >
                        <img
                          className="absolute w-full h-full object-cover"
                          src={item.ImgUrl}
                          alt=""
                        />
                        <div className="absolute top-[8px] left-[8px]">
                          <div
                            style={{
                              background:
                                "url(https://static.chotot.com/storage/chotot-icons/svg/number-image.svg) no-repeat",
                              width: "24px",
                              height: "20px",
                              fontWeight: "700",
                              color: "#fff",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="absolute right-[8px] bottom-0 z-[8]">
                        <button className="p-0 bg-[transparent] cursor-pointer border-0 outline-0 text-[12px] h-[35px]">
                          <img
                            className="align-middle w-[20px] h-[20px]"
                            src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    {/* Phan ten san pham */}
                    <div className="pb-[20px] relative ">
                      <div
                        style={{ whiteSpace: "inherit" }}
                        className="text-[14px] overflow-hidden leading-[1.43] mt-[8px] h-[40px] block text-ellipsis"
                      >
                        <div
                          style={{
                            background:
                              "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon_v2.svg) no-repeat 50%",
                          }}
                          className="z-[1] w-[63px] h-[16px] cursor-pointer rounded-[2px]relative inline-block mr-[4px] mb-[-1px] top-[2px]"
                        ></div>
                        {item.Nameproduct}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold leading-[1.33] text-[#d0021b] flex items-center flex-wrap mt-[2px] mr-[4px] mb-0 ml-0">
                          {item.Price}
                        </p>
                        <div className="flex flex-wrap items-center"></div>
                      </div>
                    </div>
                    {/* dia chi */}
                    <div className="text-[#9b9b9b] absolute bottom-[-6px] w-full left-0 flex items-center ">
                      <img
                        className="mt-[1px] mr-[3px] object-cover inline-block overflow-hidden w-[16px] h-[16px]"
                        src="https://static.chotot.com/storage/icons/owner/shop.svg"
                        alt=""
                      />
                      <div
                        style={{ textTransform: "capitalize" }}
                        className="inline-block text-[11px] overflow-hidden whitespace-nowrap text-ellipsis mt-[2px] "
                      >
                        <span className="my-0 mx-[3px]">
                          {item.Datesubmited}
                        </span>
                      </div>
                      <span className="max-w-[65px] inline-block text-[11px] overflow-hidden whitespace-nowrap text-ellipsis mt-[2px] capitalize">
                        <span className="mr-0 my-0 ml-[3px]">
                          {item.Address}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Loc tin dang tu doi tac cho tot */}
        <div className="w-full text-[#38699F] text-[14px] font-bold leading-[20px] my-0 mx-[auto] h-full mt-[4px]">
          <button className="cursor-pointer block w-full text-[#38699F] text-[16px] font-bold leading-[20px] my-0 mx-[auto]">
            Lọc Tin Đăng từ đối tác chợ tốt
            <svg
              className="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#38699F"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M1.125 3L6.75 8 1.125 13"
                  transform="translate(1 1)"
                ></path>
                <path
                  stroke="#FFF"
                  stroke-width=".1"
                  d="M0 0H9V16H0z"
                  opacity=".01"
                  transform="translate(1 1)"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* Cac dich vu tien ich */}
        <div>
          <div className="py-[12px] px-[14px] my-[5px] mx-[0] bg-[#fff]">
            <span className="font-bold text-[16px] leading-[24px]">
              Các dịch vụ và tiện ích
            </span>
            <div className="mt-[10px] flex overflow-x-auto">
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/vAS6Z0lt1jqj4qLzBtrpOxE5E6I0WiZyB5nA8zpFsN0/preset:raw/plain/e174eac2ffdcda07cb08d99930bfc9ab-2825525781931073976.jpg"
                    alt=""
                  />
                </div>
                <span>Chợ Tốt Official Store</span>
              </div>
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/O1v9odhM7JukIqUoPwv4tyC9a27e-1jBMoOgijiReuU/preset:raw/plain/5eac4e4dab28fe9be9be5cbcf7428d70-2868438485585641492.jpg"
                    alt=""
                  />
                </div>
                <span>Giá Tốt Giá Hời</span>
              </div>
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/VE9E6WSFsPLD7GAfc4LGTyEKNx9MHkpKRrbYaBMfpKs/preset:raw/plain/2825e0cf2f0381833231214b50e1379a-2815512788295310899.jpg"
                    alt=""
                  />
                </div>
                <span>Chợ Tốt Ưu Đãi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reponsive */}
      <div className="bg-[#FFFFFF] my-[12px] w-full 800px:hidden">
        <h2
          style={{ fontStretch: "normal", fontStyle: "normal" }}
          className="text-[16px] font-bold m-0 mx-[12px] mt-[12px] mb-[9px] leading-[1.41] tracking-normal text-[#222] flex items-center "
        >
          <div>Tin đăng từ Đối Tác Chợ Tốt</div>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(https://static.chotot.com/storage/chotot-icons/svg/info-icon.svg)",
              marginLeft: "8px",
              marginTop: " 2px",
              cursor: "pointer",
            }}
          ></div>
        </h2>
        <div className="relative ">
          <div className="px-[12px] pt-[7px] pb-[16px] justify-start text-[14px] flex text-[#222] overflow-x-auto overflow-y-hidden whitespace-nowrap w-full">
            <div className="text-[12px] text-[#fe9900] font-bold min-w-[48px] ">
              Đối tác <br /> chợ tốt
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Hàng đúng mô tả
              </div>
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Đồng kiểm tra hàng
              </div>
            </div>
            <div className="mr-[36px] flex ">
              <div
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg)",
                  position: "relative",
                }}
                className="w-[20px] h-[20px] top-0 "
              ></div>
              <div className="leading-[20px] text-center align-middle ml-[4px] ">
                Địa điểm bán uy tín
              </div>
            </div>
          </div>
        </div>
        {/* LIST SAN PHAM */}
        <div className="relative">
          <div
            style={{
              scrollbarWidth: "thin",
              whiteSpace: "nowrap",
            }}
            className="overflow-x-auto bg-[#fff] flex items-start list-none border-t-[1px] border-solid border-[#f4f4f4] w-full"
          >
            <div className="flex border-b-[1px] border-solid border-[#F4F4F4] py-0 px-[2px]">
              {productByCategory.map((item) => (
                <div className="w-[178px] p-[12px] border-b-0 ">
                  <div className="relative block h-full outline-0">
                    {/* hifnh anh */}
                    <div className="relative flex justify-center ">
                      <div
                        style={{
                          position: "relative",
                          background:
                            "url(https://static.chotot.com/storage/default_images/c2c_ad_image.webp) 50% no-repeat",
                          backgroundSize: "cover",
                          height: "183px",
                          width: "183px",
                          borderRadius: "2px",
                          overflow: "hidden",
                          display: "inline-block",
                        }}
                        className="h-[152px] w-[152px]"
                      >
                        <img
                          className="absolute w-full h-full object-cover"
                          src={item.ImgUrl}
                          alt=""
                        />
                        <div className="absolute top-[8px] left-[8px]">
                          <div
                            style={{
                              background:
                                "url(https://static.chotot.com/storage/chotot-icons/svg/number-image.svg) no-repeat",
                              width: "24px",
                              height: "20px",
                              fontWeight: "700",
                              color: "#fff",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="absolute right-[8px] bottom-0 z-[8]">
                        <button className="p-0 bg-[transparent] cursor-pointer border-0 outline-0 text-[12px] h-[35px]">
                          <img
                            className="align-middle w-[20px] h-[20px]"
                            src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    {/* Phan ten san pham */}
                    <div className="pb-[20px] relative ">
                      <div
                        style={{ whiteSpace: "inherit" }}
                        className="text-[14px] overflow-hidden leading-[1.43] mt-[8px] h-[40px] block text-ellipsis"
                      >
                        <div
                          style={{
                            background:
                              "url(https://static.chotot.com/storage/chotot-icons/svg/protected_icon_v2.svg) no-repeat 50%",
                          }}
                          className="z-[1] w-[63px] h-[16px] cursor-pointer rounded-[2px]relative inline-block mr-[4px] mb-[-1px] top-[2px]"
                        ></div>
                        {item.Nameproduct}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold leading-[1.33] text-[#d0021b] flex items-center flex-wrap mt-[2px] mr-[4px] mb-0 ml-0">
                          {item.Price}
                        </p>
                        <div className="flex flex-wrap items-center"></div>
                      </div>
                    </div>
                    {/* dia chi */}
                    <div className="text-[#9b9b9b] absolute bottom-[-6px] w-full left-0 flex items-center ">
                      <img
                        className="mt-[1px] mr-[3px] object-cover inline-block overflow-hidden w-[16px] h-[16px]"
                        src="https://static.chotot.com/storage/icons/owner/shop.svg"
                        alt=""
                      />
                      <div
                        style={{ textTransform: "capitalize" }}
                        className="inline-block text-[11px] overflow-hidden whitespace-nowrap text-ellipsis mt-[2px] "
                      >
                        <span className="my-0 mx-[3px]">
                          {item.Datesubmited}
                        </span>
                      </div>
                      <span className="max-w-[65px] inline-block text-[11px] overflow-hidden whitespace-nowrap text-ellipsis mt-[2px] capitalize">
                        <span className="mr-0 my-0 ml-[3px]">
                          {item.Address}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Loc tin dang tu doi tac cho tot */}
        <div className="w-full text-[#38699F] text-[14px] font-bold leading-[20px] my-0 mx-[auto] h-full mt-[4px]">
          <button className="cursor-pointer block w-full text-[#38699F] text-[16px] font-bold leading-[20px] my-0 mx-[auto]">
            Lọc Tin Đăng từ đối tác chợ tốt
            <svg
              className="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#38699F"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M1.125 3L6.75 8 1.125 13"
                  transform="translate(1 1)"
                ></path>
                <path
                  stroke="#FFF"
                  stroke-width=".1"
                  d="M0 0H9V16H0z"
                  opacity=".01"
                  transform="translate(1 1)"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* Cac dich vu tien ich */}
        <div>
          <div className="py-[12px] px-[14px] my-[5px] mx-[0] bg-[#fff]">
            <span className="font-bold text-[16px] leading-[24px]">
              Các dịch vụ và tiện ích
            </span>
            <div className="mt-[10px] flex overflow-x-auto">
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/vAS6Z0lt1jqj4qLzBtrpOxE5E6I0WiZyB5nA8zpFsN0/preset:raw/plain/e174eac2ffdcda07cb08d99930bfc9ab-2825525781931073976.jpg"
                    alt=""
                  />
                </div>
                <span>Chợ Tốt Official Store</span>
              </div>
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/O1v9odhM7JukIqUoPwv4tyC9a27e-1jBMoOgijiReuU/preset:raw/plain/5eac4e4dab28fe9be9be5cbcf7428d70-2868438485585641492.jpg"
                    alt=""
                  />
                </div>
                <span>Giá Tốt Giá Hời</span>
              </div>
              <div className="relative cursor-pointer flex flex-col items-center text-center min-w-[96px] text-[14px] whitespace-pre-line my-0 mx-[15px] text-[#222]">
                <div className="relative ">
                  <img
                    className="mb-[8px] rounded-[4px] w-[36px] h-[36px]"
                    src="https://cdn.chotot.com/admincentre/VE9E6WSFsPLD7GAfc4LGTyEKNx9MHkpKRrbYaBMfpKs/preset:raw/plain/2825e0cf2f0381833231214b50e1379a-2815512788295310899.jpg"
                    alt=""
                  />
                </div>
                <span>Chợ Tốt Ưu Đãi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFromPartners;
