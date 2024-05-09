import React from "react";

const Footer = () => {
  return (
    <>
      <div className="hidden 800px:block 800px:leading-6 800px:w-full 800px:text-[0.75rem] 800px:pt-[24px] bg-[#fff]">
        <div className="w-[960px] mt-[0px] mr-[auto] mb-0 ml-[auto]">
          <section className="flex items-center justify-between content-center h-[260px]">
            <div className=" text-center h-[260px] p-[12px]">
              <p className="leading-6 font-bold text-[0.75rem] pb-[12px]">
                TẢI ỨNG DỤNG CHỢ TỐT
              </p>
              <div className="flex flex-row p-0 text-left ">
                <div className="w-[87px] h-[87px] pr-[12px]">
                  <img
                    className="w-[87px] h-[87px] object-contain"
                    src="https://static.chotot.com/storage/default/group-qr.webp"
                    alt=""
                  />
                </div>
                <div className="pr-[12px] text-left">
                  <ul className="list-none m-0 flex justify-between p-0 flex-col">
                    <li className="text-[0.875rem] m-0 leading-6 mb-[12px] mr-[16px] ">
                      <img
                        className="object-contain w-[94px] h-[32px]"
                        src="https://static.chotot.com/storage/default/ios.svg"
                        alt=""
                      />
                    </li>
                    <li className="text-[0.875rem] m-0 leading-6 mb-[12px] mr-[16px] ">
                      <img
                        className="object-contain w-[94px] h-[32px]"
                        src="https://static.chotot.com/storage/default/android.svg"
                        alt=""
                      />
                    </li>
                    <li className="text-[0.875rem] m-0 leading-6 mb-[12px] mr-[16px]">
                      <img
                        className="object-contain w-[94px] h-[32px]"
                        src="https://static.chotot.com/storage/default/huawei_app_install.webp"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[260px] p-[12px]">
              <p className="leading-6 font-bold text-[0.75rem] pb-[12px]">
                HỖ TRỢ KHÁCH HÀNG
              </p>
              <ul>
                <li>
                  <a href="https://trogiup.chotot.com/">Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a href="https://trogiup.chotot.com/">An toàn mua bán</a>
                </li>
                <li>
                  <a href="https://trogiup.chotot.com/">Liên hệ hỗ trợ</a>
                </li>
              </ul>
            </div>
            <div className="h-[260px] p-[12px]">
              <p className="leading-6 font-bold text-[0.75rem] pb-[12px]">
                VỀ CHỢ TỐT
              </p>
              <ul>
                <li>
                  <a href="https://trogiup.chotot.com/nguoi-ban/gioi-thieu-chotot-com/">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="https://trogiup.chotot.com/nguoi-ban/hoat-dong/">
                    Quy chế hoạt động sàn
                  </a>
                </li>
                <li>
                  <a href="https://trogiup.chotot.com/nguoi-ban/chinh-sach-bao-mat-cua-cho-tot/">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="https://trogiup.chotot.com/nguoi-ban/co-che-giai-quyet-tranh-chap-cua-cho-tot/">
                    Giải quyết tranh chấp
                  </a>
                </li>
                <li>
                  <a href="https://careers.chotot.com/">Tuyển dụng</a>
                </li>
                <li>
                  <a href="https://press.chotot.com/">Truyền thông</a>
                </li>
                <li>
                  <a href="https://www.chotot.com/kinh-nghiem/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col pt-0 pl-[4px] h-[260px] p-[12px]">
              <p className="leading-6 font-bold text-[0.75rem] pb-[12px]">
                LIÊN KẾT
              </p>
              <ul className="m-0 list-none flex flex-row justify-between p-0  ">
                <li className="text-[0.875rem] m-0 leading-[1.25] p-0 mb-[12px] mr-[16px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src="https://static.chotot.com/storage/default/facebook.svg"
                    alt=""
                  />
                </li>
                <li className="text-[0.875rem] m-0 leading-[1.25] p-0 mb-[12px] mr-[16px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src="https://static.chotot.com/storage/default/youtube.svg"
                    alt=""
                  />
                </li>
                <li className="text-[0.875rem] m-0 leading-[1.25] p-0 mb-[12px] mr-[16px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src="https://static.chotot.com/storage/default/linkedin.svg"
                    alt=""
                  />
                </li>
              </ul>
              <p className="leading-6 font-bold text-[0.75rem] pb-[12px]">
                CHỨNG NHẬN
              </p>
              <img
                className="w-[130] h-[40px]"
                src="https://static.chotot.com/storage/default/certificate.webp"
                alt=""
              />
            </div>
          </section>
        </div>
        <div className="w-full border-b-2 border-[#e7e7e7]"></div>
        <section className="block pt-4 pb-4">
          <div className="flex justify-center">
            <address className="text-[0.75rem] leading-6 text-center w-full max-w-[1024px]">
              CÔNG TY TNHH CHỢ TỐT - Người đại diện theo pháp luật: Nguyễn Trọng
              Tấn; GPDKKD: 0312120782 do sở KH & ĐT TP.HCM cấp ngày 11/01/2013;
              GPMXH: 17/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
              15/01/2019 - Chịu trách nhiệm nội dung: Trần Minh Ngọc. Chính sách
              sử dụng Địa chỉ: Tầng 18, Toà nhà UOA, Số 6 đường Tân Trào, Phường
              Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Việt Nam; Email:
              trogiup@chotot.vn - Tổng đài CSKH: 19003003 (1.000đ/phút)
            </address>
          </div>
        </section>
      </div>
      {/* reponsive mobile */}
      <div className="leading-[1.5] 800px:hidden bg-[#FFFFFF] border-t border-gray-200 text-center text-xs w-full p-3 mb-20">
        <div className="w-full">
          <section className="block">
            <div className="relative flex flex-col items-start px-[12px] w-[100%]">
              <div className="w-full flex justify-between items-center">
                <div className="text-center">
                  <img
                    className="w-[96px] object-cover"
                    src="https://static.chotot.com/storage/default/logo-ct-primary.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-end">
                  <span>
                    <span className="flex w-full justify-end gap-[8px] text-[#ffba4c]">
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="aw__i123tfnv"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="aw__i123tfnv"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="aw__i123tfnv"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="aw__i123tfnv"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="aw__i123tfnv"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <p>109.000 bình chọn</p>
                </div>
              </div>
              <div className="mt-[12px] w-full">
                <div className="text-left font-bold leading-[1.125rem] text-[#222222] text-[0.875rem]">
                  TẢI ỨNG DỤNG CHỢ TỐT
                </div>
                <div className="mt-[12px]">
                  <ul className="flex list-none justify-between flex-row p-0">
                    <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                      <img
                        className="w-[100px] h-[36px] object-contain"
                        src="https://static.chotot.com/storage/default/ios.svg"
                        alt=""
                      />
                    </li>
                    <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                      <img
                        className="w-[100px] h-[36px] object-contain"
                        src="https://static.chotot.com/storage/default/huawei_app_install.webp"
                        alt=""
                      />
                    </li>{" "}
                    <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                      <img
                        className="w-[100px] h-[36px] object-contain"
                        src="https://static.chotot.com/storage/default/android.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="mx-[32px] h-[1px] bg-[#C0C0C0]"></div>
              </div>
            </div>
            <section className="px-[12px] my-[16px] text-[0.75rem] text-center leading-[1.5]">
              <ul className="list-none flex-wrap flex justify-between p-0 flex-row text-[#8C8C8C]">
                <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                 VỀ CHỢ TỐT
                </li>
                <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                QUY CHẾ SÀN
                </li>
                <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                 CHÍNH SÁCH BẢO MẬT
                </li>
                <li className="inline-block basis-[48%] text-left m-0 py-[5px]">
                 GIẢI QUYẾT TRANH CHẤP
                </li>
              </ul>
            </section>
            <section className="px-[12px] my-[16px] text-[0.75rem] text-center leading-[1.5] flex justify-center">
              <img
                src="https://static.chotot.com/storage/default/certificate.webp"
                alt=""
              />
            </section>
          </section>
        </div>
        <section className="block px-[12px] my-[16px]">
          <address style={{
                overflowWrap: "break-word",
                color:" #8C8C8C",
             
                fontSize: "0.75rem",
                fontWeight:" ",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "1.5",
             
                letterSpacing: "normal",
                textAlign: "center",
          }}>
           CÔNG TY TNHH CHỢ TỐT - Người đại diện theo pháp luật:
            Nguyễn&nbsp;Trọng&nbsp;Tấn;
            GPDKKD:&nbsp;0312120782&nbsp;do&nbsp;sở&nbsp;KH&nbsp;&amp;&nbsp;ĐT&nbsp;TP.HCM&nbsp;cấp&nbsp;ngày&nbsp;11/01/2013;
            <br />
            GPMXH: 17/GP-BTTTT do Bộ Thông tin và Truyền thông
            cấp&nbsp;ngày&nbsp;15/01/2019 -
            Chịu&nbsp;trách&nbsp;nhiệm&nbsp;nội&nbsp;dung:&nbsp;Trần&nbsp;Minh&nbsp;Ngọc.&nbsp;
            <br/>
            Địa chỉ: Tầng 18, Toà nhà UOA, Số 6 đường Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Việt Nam; Email:&nbsp;trogiup@chotot.vn&nbsp;-&nbsp;Tổng&nbsp;đài&nbsp;CSKH:&nbsp;19003003&nbsp;(1.000đ/phút)
          </address>
        </section>
      </div>
    </>
  );
};

export default Footer;
