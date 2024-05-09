"use client";
import React, { useState } from "react";

const HomeContainer = () => {
  const [viewMore, setViewMore] = useState("hidden");
  const [viewMoreOnMobile, setViewMoreOnMobille] = useState("h-[197px]");
  return (
    <>
      <div className="hidden 800px:flex 800px:justify-center 800px:pt-5 800px:bg-[#F4F4F4]">
        <div className="w-full max-w-[1024px] leading-6">
          <div className="text-[12px]">
            <h1 className="pb-[10px]">
              <span className="text-[18px] font-bold">
                Chợ Tốt - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người
                Việt
              </span>
            </h1>
            <p className="mt-0 mr-0 mb-[5px] ml-0">
              Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012,
              với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối
              người mua với người bán lại với nhau bằng những giao dịch cực kỳ
              đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất
              ngờ.
            </p>
            <p className="mt-0 mr-0 mb-[5px] ml-0">
              Đến nay, Chợ Tốt tự hào là Website rao vặt được ưa chuộng hàng đầu
              Việt Nam. Hàng ngàn món hời từ{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/"
                rel="noopener"
              >
                Bất động sản, Nhà cửa
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com"
                rel="noopener"
              >
                Xe cộ
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-do-dien-tu"
                rel="noopener"
              >
                Đồ điện tử
              </a>
              , Thú cưng, Vật dụng cá nhân... đến{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.vieclamtot.com/viec-lam"
                rel="noopener"
              >
                tìm việc làm
              </a>
              , thông tin tuyển dụng, các dịch vụ - du lịch được đăng tin, rao
              bán trên Chợ Tốt.
            </p>
            <p className="mt-0 mr-0 mb-[5px] ml-0">
              Với Chợ Tốt, bạn có thể dễ dàng mua bán, trao đổi bất cứ một loại
              mặt hàng nào, dù đó là đồ cũ hay đồ mới với nhiều lĩnh vực:
            </p>
            <p>
              <strong>Bất động sản:</strong> Cho thuê, Mua bán{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/mua-ban-nha-dat"
                rel="noopener"
              >
                nhà đất
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/mua-ban-can-ho-chung-cu"
                rel="noopener"
              >
                căn hộ chung cư
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/sang-nhuong-van-phong-mat-bang-kinh-doanh"
                rel="noopener"
              >
                văn phòng mặt bằng kinh doanh
              </a>
              , phòng trọ đa dạng về diện tích, vị trí
            </p>
            <p>
              <strong>Phương tiện đi lại:</strong>&nbsp;
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com/mua-ban-oto"
                rel="noopener"
              >
                Mua bán ô tô
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com/mua-ban-xe-may"
                rel="noopener"
              >
                xe máy
              </a>{" "}
              có độ bền cao, giá cả hợp lý, giấy tờ đầy đủ.
            </p>
            <div className={`${viewMore}`}>
              <p>
                <strong>Đồ dùng cá nhân: </strong>
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/mua-ban-quan-ao"
                  rel="noopener"
                >
                  Quần áo
                </a>
                ,{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/mua-ban-giay-dep"
                  rel="noopener"
                >
                  giày dép
                </a>
                ,{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/mua-ban-tui-xach"
                  rel="noopener"
                >
                  túi xách
                </a>
                ,{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/mua-ban-dong-ho"
                  rel="noopener"
                >
                  đồng hồ
                </a>
                ... đa phong cách, hợp thời trang.
              </p>
              <p>
                <strong>Tuyển dụng, việc làm:</strong>&nbsp;Hàng triệu công việc
                hấp dẫn, phù hợp tại{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.vieclamtot.com"
                  rel="noopener"
                >
                  Việc Làm Tốt
                </a>{" "}
                - Kênh tuyển dụng hiệu quả, uy tín được phát triển bởi Chợ Tốt.
              </p>
              <p>
                &#xFEFF;
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/dich-vu"
                  rel="noopener"
                >
                  <strong>Dịch vụ</strong>
                </a>
                <strong>
                  ,{" "}
                  <a
                    className="text-[#4a4afc]"
                    href="https://www.chotot.com/du-lich"
                    rel="noopener"
                  >
                    du lịch
                  </a>
                </strong>
                : Khách sạn, vé máy bay, vé tàu, vé xe, tour du lịch và các
                voucher du lịch... uy tín, chất lượng.
              </p>
              <p>
                &#xFEFF;
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/mua-ban-do-an-thuc-pham"
                  rel="noopener"
                  target="_blank"
                >
                  <strong>Đồ ăn, thực phẩm</strong>
                </a>
                : Các món ăn được chế biến thơm ngon, hấp dẫn, thực phẩm tươi
                sống, an toàn &amp; giá cả hợp lý.
              </p>
              <p>
                Và còn rất nhiều mặt hàng khác nữa đã và đang được rao bán tại
                Chợ Tốt.
              </p>
              <p>
                Mỗi người trong chúng ta đều có những sản phẩm đã qua sử dụng và
                không cần dùng tới nữa. Vậy còn chần chừ gì nữa mà không để nó
                trở nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần
                chụp hình lại, mô tả cụ thể về sản phẩm và sử dụng ứng dụng Đăng
                tin miễn phí của Chợ Tốt là đã có thể đến gần hơn với người cần
                nó.
              </p>
              <p>
                Không những thế, website chotot.com còn cung cấp cho bạn thông
                tin về giá cả các mặt hàng để bạn có thể tham khảo. Đồng thời,
                thông qua{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/kinh-nghiem/"
                  rel="noopener"
                >
                  Blog kinh nghiệm
                </a>
                , Chợ Tốt sẽ tư vấn, chia sẻ cho bạn những thông tin bổ ích, bí
                quyết, mẹo vặt giúp bạn có những giao dịch mua bán an toàn, đảm
                bảo. Chợ Tốt cũng sẵn sàng hỗ trợ bạn trong mọi trường hợp cần
                thiết.
              </p>
              <p>
                Chúc các bạn có những trải nghiệm mua bán tuyệt vời trên Chợ
                Tốt.
              </p>
            </div>
            {viewMore === "hidden" ? (
              <div className="flex justify-center items-center content-center cursor-pointer">
                <p
                  className="text-[#3865fbfe]"
                  onClick={() => setViewMore("block")}
                >
                  Mở rộng{" "}
                </p>
              </div>
            ) : (
              <div className="flex justify-center items-center content-center cursor-pointer">
                <p
                  className="text-[#3865fbfe]"
                  onClick={() => setViewMore("hidden")}
                >
                  Thu gọn{" "}
                </p>
              </div>
            )}
          </div>
          <div className="w-full max-w-[1024px] leading-6">
            <p className="font-bold m-0">Các từ khóa phổ biến</p>
            <ul className="flex flex-wrap pl-0 mt-3 p-2 text-[#777777]">
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Samsung Note 10
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Tivi cũ giá rẻ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Thuê Phòng Trọ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Chợ đồ cũ Sài Gòn
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Máy quay cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Loa Cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Điện Thoại Cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Điện thoại Samsung
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Thuê Căn Hộ Chung Cư
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Mua Bán Nhà Đất
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Máy tính để bàn giá rẻ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Micro cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Máy tính để bàn cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Laptop Apple Macbook
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Điện Thoại iPhone
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Mua Bán Đất
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Điện thoại Samsung Cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Ống kính (lens) cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Tai Nghe Cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Máy Tính Bảng Cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Dàn karaoke cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Thuê Nhà Nguyên Căn
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Chợ đồ cũ Hà Nội
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Máy ảnh cũ
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Amply
              </li>
              <li className="list-inside basis-[25%] text-xs pb-[7px] list-disc">
                Laptop Cũ
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Reponsive */}
      <div className="800px:hidden p-[12px] 375px:bottom-[-517vh] 400px:bottom-[240vh] 430px:bottom-[253vh] 390px:bottom-[270vh] z-50 bg-[#F4F4F4]">
        <div className="relative leading-[1.33] ">
          <div
            className={`${viewMoreOnMobile} text-justify overflow-hidden text-ellipsis text-[12px] leading-[1.5] text-[#9B9B9B]`}
          >
            <h1 className="pb-[10px]">
              <span className="text-[18px] font-bold text-black">
                Chợ Tốt - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người
                Việt
              </span>
            </h1>
            <p className="mt-0 mr-0 mb-[5px] ml-0 ">
              Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012,
              với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối
              người mua với người bán lại với nhau bằng những giao dịch cực kỳ
              đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất
              ngờ.
            </p>
            <p className="mt-0 mr-0 mb-[5px] ml-0">
              Đến nay, Chợ Tốt tự hào là Website rao vặt được ưa chuộng hàng đầu
              Việt Nam. Hàng ngàn món hời từ{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/"
                rel="noopener"
              >
                Bất động sản, Nhà cửa
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com"
                rel="noopener"
              >
                Xe cộ
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-do-dien-tu"
                rel="noopener"
              >
                Đồ điện tử
              </a>
              , Thú cưng, Vật dụng cá nhân... đến{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.vieclamtot.com/viec-lam"
                rel="noopener"
              >
                tìm việc làm
              </a>
              , thông tin tuyển dụng, các dịch vụ - du lịch được đăng tin, rao
              bán trên Chợ Tốt.
            </p>
            <p className="mt-0 mr-0 mb-[5px] ml-0">
              Với Chợ Tốt, bạn có thể dễ dàng mua bán, trao đổi bất cứ một loại
              mặt hàng nào, dù đó là đồ cũ hay đồ mới với nhiều lĩnh vực:
            </p>
            <p>
              <strong>Bất động sản:</strong> Cho thuê, Mua bán{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/mua-ban-nha-dat"
                rel="noopener"
              >
                nhà đất
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/mua-ban-can-ho-chung-cu"
                rel="noopener"
              >
                căn hộ chung cư
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.nhatot.com/sang-nhuong-van-phong-mat-bang-kinh-doanh"
                rel="noopener"
              >
                văn phòng mặt bằng kinh doanh
              </a>
              , phòng trọ đa dạng về diện tích, vị trí
            </p>
            <p>
              <strong>Phương tiện đi lại:</strong>&nbsp;
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com/mua-ban-oto"
                rel="noopener"
              >
                Mua bán ô tô
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://xe.chotot.com/mua-ban-xe-may"
                rel="noopener"
              >
                xe máy
              </a>{" "}
              có độ bền cao, giá cả hợp lý, giấy tờ đầy đủ.
            </p>

            <p>
              <strong>Đồ dùng cá nhân: </strong>
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-quan-ao"
                rel="noopener"
              >
                Quần áo
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-giay-dep"
                rel="noopener"
              >
                giày dép
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-tui-xach"
                rel="noopener"
              >
                túi xách
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-dong-ho"
                rel="noopener"
              >
                đồng hồ
              </a>
              ... đa phong cách, hợp thời trang.
            </p>
            <p>
              <strong>Tuyển dụng, việc làm:</strong>&nbsp;Hàng triệu công việc
              hấp dẫn, phù hợp tại{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.vieclamtot.com"
                rel="noopener"
              >
                Việc Làm Tốt
              </a>{" "}
              - Kênh tuyển dụng hiệu quả, uy tín được phát triển bởi Chợ Tốt.
            </p>
            <p>
              &#xFEFF;
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/dich-vu"
                rel="noopener"
              >
                <strong>Dịch vụ</strong>
              </a>
              <strong>
                ,{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/du-lich"
                  rel="noopener"
                >
                  du lịch
                </a>
              </strong>
              : Khách sạn, vé máy bay, vé tàu, vé xe, tour du lịch và các
              voucher du lịch... uy tín, chất lượng.
            </p>
            <p>
              &#xFEFF;
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-do-an-thuc-pham"
                rel="noopener"
                target="_blank"
              >
                <strong>Đồ ăn, thực phẩm</strong>
              </a>
              : Các món ăn được chế biến thơm ngon, hấp dẫn, thực phẩm tươi
              sống, an toàn &amp; giá cả hợp lý.
            </p>
            <p>
              Và còn rất nhiều mặt hàng khác nữa đã và đang được rao bán tại Chợ
              Tốt.
            </p>
            <p>
              Mỗi người trong chúng ta đều có những sản phẩm đã qua sử dụng và
              không cần dùng tới nữa. Vậy còn chần chừ gì nữa mà không để nó trở
              nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần chụp
              hình lại, mô tả cụ thể về sản phẩm và sử dụng ứng dụng Đăng tin
              miễn phí của Chợ Tốt là đã có thể đến gần hơn với người cần nó.
            </p>
            <p>
              Không những thế, website chotot.com còn cung cấp cho bạn thông tin
              về giá cả các mặt hàng để bạn có thể tham khảo. Đồng thời, thông
              qua{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/kinh-nghiem/"
                rel="noopener"
              >
                Blog kinh nghiệm
              </a>
              , Chợ Tốt sẽ tư vấn, chia sẻ cho bạn những thông tin bổ ích, bí
              quyết, mẹo vặt giúp bạn có những giao dịch mua bán an toàn, đảm
              bảo. Chợ Tốt cũng sẵn sàng hỗ trợ bạn trong mọi trường hợp cần
              thiết.
            </p>
            <p>
              Chúc các bạn có những trải nghiệm mua bán tuyệt vời trên Chợ Tốt.
            </p>
            <p>
              <strong>Đồ dùng cá nhân: </strong>
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-quan-ao"
                rel="noopener"
              >
                Quần áo
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-giay-dep"
                rel="noopener"
              >
                giày dép
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-tui-xach"
                rel="noopener"
              >
                túi xách
              </a>
              ,{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-dong-ho"
                rel="noopener"
              >
                đồng hồ
              </a>
              ... đa phong cách, hợp thời trang.
            </p>
            <p>
              <strong>Tuyển dụng, việc làm:</strong>&nbsp;Hàng triệu công việc
              hấp dẫn, phù hợp tại{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.vieclamtot.com"
                rel="noopener"
              >
                Việc Làm Tốt
              </a>{" "}
              - Kênh tuyển dụng hiệu quả, uy tín được phát triển bởi Chợ Tốt.
            </p>
            <p>
              &#xFEFF;
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/dich-vu"
                rel="noopener"
              >
                <strong>Dịch vụ</strong>
              </a>
              <strong>
                ,{" "}
                <a
                  className="text-[#4a4afc]"
                  href="https://www.chotot.com/du-lich"
                  rel="noopener"
                >
                  du lịch
                </a>
              </strong>
              : Khách sạn, vé máy bay, vé tàu, vé xe, tour du lịch và các
              voucher du lịch... uy tín, chất lượng.
            </p>
            <p>
              &#xFEFF;
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/mua-ban-do-an-thuc-pham"
                rel="noopener"
                target="_blank"
              >
                <strong>Đồ ăn, thực phẩm</strong>
              </a>
              : Các món ăn được chế biến thơm ngon, hấp dẫn, thực phẩm tươi
              sống, an toàn &amp; giá cả hợp lý.
            </p>
            <p>
              Và còn rất nhiều mặt hàng khác nữa đã và đang được rao bán tại Chợ
              Tốt.
            </p>
            <p>
              Mỗi người trong chúng ta đều có những sản phẩm đã qua sử dụng và
              không cần dùng tới nữa. Vậy còn chần chừ gì nữa mà không để nó trở
              nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần chụp
              hình lại, mô tả cụ thể về sản phẩm và sử dụng ứng dụng Đăng tin
              miễn phí của Chợ Tốt là đã có thể đến gần hơn với người cần nó.
            </p>
            <p>
              Không những thế, website chotot.com còn cung cấp cho bạn thông tin
              về giá cả các mặt hàng để bạn có thể tham khảo. Đồng thời, thông
              qua{" "}
              <a
                className="text-[#4a4afc]"
                href="https://www.chotot.com/kinh-nghiem/"
                rel="noopener"
              >
                Blog kinh nghiệm
              </a>
              , Chợ Tốt sẽ tư vấn, chia sẻ cho bạn những thông tin bổ ích, bí
              quyết, mẹo vặt giúp bạn có những giao dịch mua bán an toàn, đảm
              bảo. Chợ Tốt cũng sẵn sàng hỗ trợ bạn trong mọi trường hợp cần
              thiết.
            </p>
            <p>
              Chúc các bạn có những trải nghiệm mua bán tuyệt vời trên Chợ Tốt.
            </p>
          </div>
          <div className="flex justify-center items-center content-center cursor-pointer">
            {viewMoreOnMobile === "h-[197px]" ? (
              <span
                className="text-[#3865fbfe] text-[12px]"
                onClick={() => setViewMoreOnMobille(" ")}
              >
                Mở rộng
              </span>
            ) : (
              <span
                className="text-[#3865fbfe] text-[12px]"
                onClick={() => setViewMoreOnMobille("h-[197px]")}
              >
                Thu gọn
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="text-[#9B9B9B] font-bold m-0">Các từ khóa phổ biến</p>
          <ul className="flex flex-wrap pl-0 mt-3 text-[#777777]">
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Samsung Note 10
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Tivi cũ giá rẻ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Thuê Phòng Trọ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Chợ đồ cũ Sài Gòn
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Máy quay cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Loa Cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Điện Thoại Cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Điện thoại Samsung
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Thuê Căn Hộ Chung Cư
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Mua Bán Nhà Đất
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Máy tính để bàn giá rẻ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Micro cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Máy tính để bàn cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Laptop Apple Macbook
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Điện Thoại iPhone
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Mua Bán Đất
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Điện thoại Samsung Cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Ống kính (lens) cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Tai Nghe Cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Máy Tính Bảng Cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Dàn karaoke cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Thuê Nhà Nguyên Căn
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Chợ đồ cũ Hà Nội
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Máy ảnh cũ
              </li>
              <li className="list-inside basis-[50%] text-xs pb-[7px] list-disc">
                Amply
              </li>
              <li className="list-inside basis-50%] text-xs pb-[7px] list-disc">
                Laptop Cũ
              </li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
