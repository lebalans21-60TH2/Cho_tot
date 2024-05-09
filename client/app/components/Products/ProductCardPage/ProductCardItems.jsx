import React from "react";

const ProductCardItems = (props) => {
    const {DataProducts} = props
  return (
    <>
      <div className="hidden 800px:block mt-[1px] p-0 list-none w-full float-left">
        <ul className="list-none p-0 m-0 ">
          {DataProducts.map((item) => (
            <div key={item.id} className="py-[1.5px]">
              <li className="hover:shadow-bdpd my-0 py-[8px] px-[12px] min-h-[144px] overflow-visible bg-[#fff] border-t-[1px] border-solid border-[#f4f4f4] relative">
                <div className="bg-[transparent] flex relative overflow-visible cursor-pointer">
                  {/* Hinh anh */}
                  <div className="w-[auto] mr-[12px] inline-block ">
                    <div className="w-[128px] h-[128px] relative max-w-[200px] bg-cover overflow-hidden rounded-[2px] ">
                      <picture>
                        <img
                          style={{
                            backgroundSize: "contain",
                            backgroundPosition: "50% 50%",
                            backgroundImage:
                              "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/wAALCABPAG4BAREA/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBQIGB//EACoQAAEEAAUCBQUBAAAAAAAAAAABAgMEBRESITETQQYiI2FxFBUyUYHx/9oACAEBAAA/APrAAAAAAAAAAAAAAAAAAAAAAAAAK636rbSVlsRddeGatzqvbitLKkLtXSfocuW2fsvcmAAAK9y9BQiSSy9WtVckVGqu/wDDNu+IGsrMnpOikasiROSRrkVq88fBbTG6K1n2EmXpMfocuhdl+CJMQ+6tliw6d0Lo0Ryyubwua7K1d+O5k1MTxFaM1+W3riifobHoT1HLx/NypFaupBJiEr4mNbIisa6FvqyZ8ImWe37NCeTEocWho17qNbMmtqdNPTRc1yXY9DXZJHXjZNJ1JEbk5+WWpfgkAABm4xRnuJWkrKzqV5NaMk/FxHJQtWrdCWdldjYZXSytjVd17fKmfPhNitRkmnlrtWO19Qquculye5oVaFhI7tp74nWrjfKjFXQ1MttyFuBzs8PspslYyw2Tq6kXbPP9kK4LiOIXopcTlhSKPLyxrz3Xb37qX2YdMviGS/IrOkkeiNEXfj/TTAAAAOXsbIxWSNa5q8o5M0U64AAAAAAAAAAAAAAAAAAAAAAAAB//2Q==)",
                          }}
                          className="object-cover w-full h-full "
                          src={item.ImgUrl}
                          alt=""
                        />
                      </picture>
                      <div className="absolute top-[5px] right-[5px]">
                        <div
                          style={{
                            fontDisplay: "swap",
                            background:
                              "url(https://static.chotot.com/storage/chotot-icons/svg/number-image.svg) no-repeat",
                            backgroundSize: "cover",
                            width: "25px",
                            height: " 20px",
                            fontWeight: "700",
                            color: "#fff",
                            display: " flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* Phan ten va gia san pham */}
                  <div
                    style={{ width: "calc(100% - 128px)" }}
                    className="inline-block overflow-hidden"
                  >
                    <div className="flex flex-col min-h-[55px] h-full ">
                      <h3 className="text-[15px] leading-[1.33] whitespace-nowrap text-ellipsis inline-block ">
                        {item.Nameproduct}
                      </h3>
                      <div className="pt-[4px] ">
                        {item.Price==="0"?(
                          <div className='pt-1 '>
                            <span className="align-middle text-[#49a2a1]">
                              <i style={{
                                display: 'inline-block',
                                height: '30px',
                                width: '30px',
                                verticalAlign: 'middle',
                                background: 'url(https://static.chotot.com/storage/C2C_CDN_STAGING/d8d4dd03d80c145fcb0b53966ccc53f1.png) no-repeat',
                                backgroundSize: 'contain',
                              }}></i>
                              <span className="align-bottom ml-[5px]">Cho tặng</span>
                            </span>
                          </div>
                        ):(
                          <div className="text-[#c90927] text-[14px] font-bold leading-[1.33] mb-[4px]">
                          <p
                            style={{ maxWidth: "calc(100% - 15px)" }}
                            className="flex items-center flex-wrap whitespace-nowrap text-ellipsis overflow-visible float-none "
                          >
                            {item.Price}
                          </p>
                        </div>
                        )}
                        
                      </div>
                      <div className="flex-1 pt-[5px] "></div>
                      {/* dia chi */}
                      <div className="text-[#9b9b9b] relative text-[12px] flex ">
                        <div
                          style={{ maxWidth: "calc(100% - 35px)" }}
                          className=" m-0 bg-[transparent] overflow-hidden whitespace-nowrap p-0 flex"
                        >
                          <div className="mt-[4px] text-[#9B9B9B] float-left">
                            <div className="float-left max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis text-[12px] ">
                              <img
                                className="rounded-[50%] object-cover mr-[2px] inline-block overflow-hidden align-middle"
                                src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
                                alt=""
                              />
                            </div>
                            <div className="max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis text-[12px]">
                              <span className="ml-[2px] "> Ban chuyen</span>
                            </div>
                          </div>
                          <div className="commonstyle"></div>
                          <div className="max-w-[120px] ml-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[12px]">
                            <span
                              style={{
                                backgroundImage:
                                  "url(https://static.chotot.com/storage/chotot-icons/svg/prioritize.svg)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "12px 16px",
                              }}
                              className="w-[12px] inline-block h-[16px] relative top-[3px] mr-[3px]"
                            ></span>
                            Tin ưu tiên
                          </div>
                          <span className="mt-[4px]">
                            <div className="commonstyle"> </div>
                            <span className="max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis text-[12px]">
                              {item.Address}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Phan button yeu thich */}
                  <div className="absolute right-[12px] bottom-[-3px] ">
                    <button className="p-0 bg-[transparent] cursor-pointer border-none outline-0 ">
                      <img
                        className="w-[16px] h-[16px]"
                        src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Phan reponsive */}
      <div className="list-none 800px:hidden mt-[1px] w-full float-left p-0 relative min-h-[1px] bg-[#fff]">
        <ul className="list-none p-0 m-0 ">
          {DataProducts.map((item) => (
            <div key={item.id}>
              <li className="my-0 p-[12px] min-h-[124px] overflow-visible bg-[#fff] border-t-[1px] border-solid border-[#f4f4f4] relative">
                <div className="bg-[transparent] flex relative cursor-pointer overflow-visible ">
                  {/* Hinh anh */}
                  <div className="w-auto mr-[12px] inline-block cursor-pointer ">
                    <div className="w-[108px] h-[108px] relative max-w-[200px] bg-cover overflow-hidden rounded-[2px] ">
                      <picture>
                        <img
                          style={{
                            backgroundSize: "contain",
                            backgroundPosition: "50% 50%",
                            backgroundImage:
                              "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/wAALCABPAG4BAREA/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBQIGB//EACoQAAEEAAUCBQUBAAAAAAAAAAABAgMEBRESITETQQYiI2FxFBUyUYHx/9oACAEBAAA/APrAAAAAAAAAAAAAAAAAAAAAAAAAK636rbSVlsRddeGatzqvbitLKkLtXSfocuW2fsvcmAAAK9y9BQiSSy9WtVckVGqu/wDDNu+IGsrMnpOikasiROSRrkVq88fBbTG6K1n2EmXpMfocuhdl+CJMQ+6tliw6d0Lo0Ryyubwua7K1d+O5k1MTxFaM1+W3riifobHoT1HLx/NypFaupBJiEr4mNbIisa6FvqyZ8ImWe37NCeTEocWho17qNbMmtqdNPTRc1yXY9DXZJHXjZNJ1JEbk5+WWpfgkAABm4xRnuJWkrKzqV5NaMk/FxHJQtWrdCWdldjYZXSytjVd17fKmfPhNitRkmnlrtWO19Qquculye5oVaFhI7tp74nWrjfKjFXQ1MttyFuBzs8PspslYyw2Tq6kXbPP9kK4LiOIXopcTlhSKPLyxrz3Xb37qX2YdMviGS/IrOkkeiNEXfj/TTAAAAOXsbIxWSNa5q8o5M0U64AAAAAAAAAAAAAAAAAAAAAAAAB//2Q==)",
                          }}
                          className="object-cover w-full h-full "
                          src={item.ImgUrl}
                          alt=""
                        />
                      </picture>
                      <div className="absolute top-[5px] right-[5px]">
                        <div
                          style={{
                            fontDisplay: "swap",
                            background:
                              "url(https://static.chotot.com/storage/chotot-icons/svg/number-image.svg) no-repeat",
                            backgroundSize: "cover",
                            width: "25px",
                            height: " 20px",
                            fontWeight: "700",
                            color: "#fff",
                            display: " flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "11px",
                          }}
                        >
                          5
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ten san pam */}
                  <div
                    style={{
                      width: "calc(100% - 128px)",
                      display: "inline-block",
                    }}
                  >
                    <div className="pr-0 flex flex-col min-h-[55px] h-full">
                      <h3 className="text-[14px] leading-[1.43] max-h-[40px] text-[#222] m-0 font-[400] overflow-hidden">
                        {item.Nameproduct}
                      </h3>
                      <div className="pt-[2px] text-[#c90927] text-[14px] font-bold leading-[1.33] mb-[4px]">
                      {item.Price==="0"?(
                          <div className='pt-1 '>
                            <span className="align-middle text-[#49a2a1]">
                              <i style={{
                                display: 'inline-block',
                                height: '30px',
                                width: '30px',
                                verticalAlign: 'middle',
                                background: 'url(https://static.chotot.com/storage/C2C_CDN_STAGING/d8d4dd03d80c145fcb0b53966ccc53f1.png) no-repeat',
                                backgroundSize: 'contain',
                              }}></i>
                              <span className="align-bottom ml-[5px]">Cho tặng</span>
                            </span>
                          </div>
                        ):(
                           
                        <p
                        style={{ maxWidth: "calc(100% - 15px)" }}
                        className="flex items-center flex-wrap whitespace-nowrap text-ellipsis overflow-visible float-none"
                      >
                        {item.Price}d
                      </p>
                        )}
                      
                      </div>
                      <div className="flex-1 pt-[5px]"></div>
                      {/* phan footer thong tin san pham */}
                      <div className="text-[#9b9b9b] relative text-[12px] flex">
                        <div
                          style={{ maxWidth: "calc(100% - 35px)" }}
                          className="inline-block bg-transparent overflow-hidden text-ellipsis whitespace-nowrap m-0 p-0"
                        >
                          <div className="mt-[4px] text-[#9B9B9B] float-left flex justify-center item-center">
                            <div className="float-left text-[11px] capitalize max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis">
                              <img
                                className="object-cover inline-block overflow-hidden mr-0.5"
                                src="https://static.chotot.com/storage/icons/owner/pro.svg"
                                alt=""
                              />
                            </div>
                            {/* Phan nay se bo sung sau neu ko phai tin uu tien se hien con an neu la tin uu tien */}
                            <div className="hidden text-[11px] capitalize max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span className="ml-[2px] inline-flex">
                                Bán chuyên
                              </span>
                            </div>
                            <div className="commonstyle"></div>
                            <div className="text-[11px] capitalize max-w-[120px] whitespace-nowrap inline-flex">
                              <span
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "inline-flex",
                                  backgroundImage:
                                    " url(https://static.chotot.com/storage/chotot-icons/svg/prioritize.svg)",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "12px 16px",
                                  position: "relative",
                                  top: "3px",
                                  marginRight: "3px",
                                }}
                              ></span>
                              Tin ưu tiên
                            </div>
                            <span className="ml-[3px] inline-flex">
                              <div className="commonstyle"></div>
                              <span className="text-[11px] capitalize max-w-[120px] overflow-hidden whitespace-nowrap text-ellipsis">
                                {item.Address}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-[5px] absolute bottom-[3px]">
                    <button className="cursor-pointer p-0 border-[none] bg-[transparent] outline-0 ">
                      <img
                        className="w-[16px] h-[16px] cursor-pointer"
                        src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductCardItems;
