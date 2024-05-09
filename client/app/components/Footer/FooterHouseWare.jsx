"use client";
import React, { useState } from "react";

const FooterHouseWare = () => {
  const [showMore, setShowMore] = useState("h-[158px]");

  return (
    <>
      <div className="hidden 800px:block 800px:w-full 800px:min-h-[unset] 800px:float-left">
        <div className="w-full flex flex-col ">
          <div className="text-[#888] text-[12px] bg-[#fff] my-[15px] mx-0 p-[10px] overflow-hidden w-full ">
            <div
              className={`${showMore} text-ellipsis overflow-hidden text-[12px] leading-[16px]`}
            >
              <div className="ml-[-15px] mr-[-15px] ">
                <div className="relative min-h-[1px] pl-[15px] pr-[15px]">
                  <h2 className="text-center text-[14px] text-[#888] font-bold leading-[16px] mt-[20px] mb-[10px]">
                    <strong>
                      Chợ Tốt - Chợ mua bán trao đổi Đồ gia dụng, nội ngoại
                      thất, cây cảnh trực tuyến hàng đầu Việt Nam
                    </strong>
                  </h2>
                  <p className="text-justify m-0 mb-[5px] text-[#888] leading-[16px] text-[12px] ">
                    Sự đa dạng về mẫu mã, kiểu dáng của những món đồ{" "}
                    <strong>nội thất, ngoại thất</strong>, sự tiện dụng của{" "}
                    <strong>đồ gia dụng gia đình</strong> và vẻ đẹp của các loại{" "}
                    <strong>cây cảnh</strong> khiến chúng trở thành những món đồ
                    không thể thiếu trong ngôi nhà thân yêu của chúng ta.
                  </p>
                  <p className="text-justify m-0 mb-[5px] text-[#888] leading-[16px] text-[12px] ">
                    Với hàng trăm, thậm chí hàng ngàn sự lựa chọn tại Chợ Tốt
                    dành cho bạn thì không thể nào bạn bỏ qua những món{" "}
                    <strong>đồ nội thất giá rẻ</strong>, hay những{" "}
                    <strong>cây cảnh phong thủy</strong>, giúp chất lượng cuộc
                    sống gia đình bạn được nâng cao hơn, may mắn sẽ tới với bạn
                    nhiều hơn.
                  </p>
                </div>
                <div className="ml-[-15px] mr-[-15px] flex">
                  <div className="w-[33.333333%] relative px-[15px]">
                    <p className="text-center">
                      <img
                        className="h-auto max-w-[100%]"
                        src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2018/10/mua-ban-do-noi-that-do-ngoai-that-cay-canh.jpg"
                        alt=""
                      />
                    </p>
                    <h2 className="text-center text-[14px] text-[#888] font-bold leading-[16px] mt-[20px] mb-[10px]">
                      <span>
                        <strong>Mua bán đồ nội ngoại thất</strong>
                      </span>
                    </h2>
                    <p className="text-justify m-0 mb-[5px] leading-[16px] pl-[20px] text-[12px] ">
                      Những sản phẩm đồ nội thất thông minh, hữu ích không chỉ
                      giúp cho căn nhà của bạn trở nên gọn gàng, ngăn nắp, sang
                      trọng hơn mà còn góp phần tạo nên không gian hiện đại,
                      tiện nghi, rất cần cho các gia đình. Các sản phẩm như{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-ban-ghe/ban-an-thong-minh">
                        bàn ăn thông minh
                      </a>
                      ,{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/ke-giay-thong-minh">
                        kệ giày thông minh
                      </a>{" "}
                      hay{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/tu-giay-thong-minh">
                        tủ giày thông minh
                      </a>
                      , sẽ tạo nên vẻ đẹp hài hòa cho ngôi nhà.
                    </p>
                    <p className="text-justify m-0 mb-[5px] pl-[20px] leading-[16px] text-[12px] ">
                      Tại Chợ Tốt, những món đồ nội ngoại thất giá rẻ được khá
                      nhiều người tìm và lựa chọn cho gia đình mình, cụ thể như{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-ban-ghe/ghe-salon-go">
                        ghế salon gỗ
                      </a>
                      ,{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-giuong-chan-ga-goi-nem/giuong-go-soi">
                        giường gỗ sồi
                      </a>
                      ,{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/tu-nhua-quan-ao">
                        tủ nhựa quần áo
                      </a>
                      ,... là những món nội thất cần thiết sử dụng hàng ngày.
                      Hãy tìm những người bán đồ nội thất cũ để bạn có thể tiết
                      kiệm chi phí trong khi chất lượng khá tốt.
                    </p>
                  </div>
                  <div className="w-[33.333333%] relative px-[15px]">
                    <p className="text-center">
                      <img
                        className="h-auto max-w-[100%]"
                        src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/do-gia-dung-cho-tot.jpg"
                        alt=""
                      />
                    </p>
                    <h2 className="text-center text-[14px] text-[#888] font-bold leading-[16px] mt-[20px] mb-[10px]">
                      <span>
                        <strong>Mua bán đồ gia dụng</strong>
                      </span>
                    </h2>
                    <p className="text-justify m-0 mb-[5px] leading-[16px] text-[12px] ">
                      <strong>Những thiết bị gia dụng gia đình </strong>ngày nay
                      cung cấp nhiều chức năng thông minh và không ngừng cải
                      tiến giúp chúng ta giải quyết gần như mọi vấn đề trong
                      cuộc sống hằng ngày.
                    </p>
                    <p className="text-justify m-0 mb-[5px] leading-[16px] text-[12px] ">
                      Có rất nhiều sản phẩm với những tính năng đặc biệt, thiết
                      kế tiện lợi, tiết kiệm năng lượng, tiết kiệm không gian và
                      vô cùng tinh tế. Chúng ta có thể thấy chúng trong những
                      khu vực như phòng giặt ủi, phòng ngủ, phòng khách và đặc
                      biệt nhà bếp là nơi tập trung của những thiêt bị gia dụng.
                    </p>
                    <p className="text-justify m-0 mb-[5px] leading-[16px] text-[12px] ">
                      Tại Chợ Tốt bạn có thể dễ dàng tìm được những món đồ gia
                      dụng gia rẻ thông minh và giàu tiện ích như:{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-bep-lo-do-dien-nha-bep/noi-com-dien">
                        nồi cơm điện
                      </a>
                      , bếp ga, bếp điện, lò vi sóng, bàn ủi,{" "}
                      <a href="https://www.chotot.com/toan-quoc/mua-ban-quat">
                        quạt
                      </a>
                      , máy lọc nước,....
                    </p>
                  </div>
                  <div className="w-[33.333333%] relative px-[15px]">
                    <p className="text-center">
                      <img
                        className="h-[225px] max-w-[100%]"
                        src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/cay-canh-cho-tot.jpg"
                        alt=""
                      />
                    </p>
                    <h2 className="text-center text-[14px] text-[#888] font-bold leading-[16px] mt-[20px] mb-[10px]">
                      <span>
                        <strong>Mua bán cây cảnh</strong>
                      </span>
                    </h2>
                    <p className="text-justify m-0 mb-[5px] pr-[20px] leading-[16px] text-[12px] ">
                      Ngày nay các loại cây xanh,{" "}
                      <strong>cây cảnh trang trí</strong> đang ngày càng được ưa
                      chuộng nhờ những lợi ích tuyệt vời mà chúng mang lại.
                    </p>
                    <p className="text-justify pr-[20px] m-0 mb-[5px] leading-[16px] text-[12px] ">
                      Các loại cây cảnh giúp làm không gian sống, phòng làm việc
                      - học tập thêm tươi mát, tràn đầy sức sống. Bên cạnh đó
                      chúng còn giúp điều hòa không khí, giải tỏa căng thẳng, áp
                      lực. Hiện nay có rất nhiều loại cây cảnh đẹp được ưa
                      chuộng như: cây xương rồng, cây bàng singapore, bonsai,...
                    </p>
                    <p className="text-justify pr-[20px] m-0 mb-[5px] leading-[16px] text-[12px] ">
                      Bên cạnh đó, những loại cây cảnh phong thủy như:{" "}
                      <a href="https://www.chotot.com/tags/mua-ban-cay-canh-do-trang-tri/cay-kim-tien">
                        cây kim tiền
                      </a>
                      , cây kim ngân, cây phát tài, lưỡi hổ,... ngoài tác dụng
                      về thẩm mĩ, sức khỏe thì nó còn đem lại nhiều giá trị
                      phong thủy cho gia chủ với ý nghĩa mang lại may mắn và tài
                      lộc.
                    </p>
                  </div>
                </div>
                <div className="ml-[-15px] mr-[-15px]">
                  <div className="w-full realtive min-h-[1px] px-[34px] pt-[15px]">
                    <h2 className="pb-[10px] leading-[22px]">
                      <span className="text-[18px]">
                        <strong>
                          Hướng dẫn chọn đồ nội thất, ngoại thất, cây cảnh trên
                          Chợ Tốt
                        </strong>
                      </span>
                    </h2>
                    <p className="text-justify leading-[22px]">
                      {" "}
                      ✅ Trên Chợ Tốt, rất nhiều người thanh lý đồ nội thất, đồ
                      gia dụng cũ nên trước khi mua bạn nên kiểm tra vật liệu để
                      tránh sự nhầm lẫn về giá cả, với nội thất có rất nhiều
                      loại vật liệu khác nhau như gỗ tự nhiên, ván công nghiệp,
                      kim loại, nhựa, mỗi vật liệu sẽ có giá khác nhau, tùy vào
                      từng kiểu dáng và kích thước để bạn có thể định giá cho
                      sản phẩm của bạn định mua. Ngoài ra, nên tham khảo giá từ
                      các nguồn bên ngoài, và so sánh giá với các người bán khác
                      nhau trên Chợ Tốt để biết được giá sản phẩm của bạn định
                      mua thực sự đã tốt nhất chưa.
                    </p>
                    <p className="text-justify leading-[22px]">
                      ✅ Kiểm tra độ chắc chắn, và xem các sản phẩm đó có bị lỗi
                      gì không, trước khi đi kiểm tra bạn cũng nên học cách nhận
                      biết các chất liệu sản phẩm để chắc chắn rằng người bán
                      không đăng sai thông tin sản phẩm.
                    </p>
                    <p className="text-justify leading-[22px]">
                      ✅ Đối với các loại cây cảnh, hay những loại hình trang
                      trí khác bạn cần kiểm tra nguồn gốc, tình trạng hoạt động
                      hiện tại, với cây thì cần tìm hiểu giống cây, giá trị của
                      chúng, và dấu hiệu nhận biết bệnh ở cây để biết chắc rằng
                      những cây bạn định mua vẫn trong tình trạng khỏe mạnh.
                    </p>
                    <p className="text-justify leading-[22px]">
                      ✅ Không nên chuyển tiền trước, đặt cọc hay trả góp với
                      người mua/bán.
                    </p>
                    <p className="text-justify leading-[22px]">
                      ✅ Nên hẹn gặp ở những nơi công cộng, hoặc đi với người
                      thân để tránh trường hợp xấu sảy ra. Nếu bắt gặp các
                      trường hợp không trung thực hãy báo ngay với nhân viên Chợ
                      Tốt để chúng tôi có hướng xử lý kịp thời.
                    </p>
                    <p className="text-justify leading-[22px]">
                      Để có thể làm đẹp cho ngôi nhà mình hãy truy cập ngay vào
                      Chợ Tốt để xem các mặt hàng đồ nội thất, đồ ngoại thất,
                      cây cảnh giúp có được không gian tuyệt vời cho gia đình
                      bạn. Ngoài ra, bài viết Bí kíp mua nội thất phòng ngủ phù
                      hợp, đẹp mắt tại chuyên trang kinh nghiệm của chúng tôi sẽ
                      chia sẻ thêm cho bạn rất nhiều thông tin bổ ích trong việc
                      mua bán nội, ngoại thất hiệu quả hơn. Chúc bạn có những
                      giao dịch thành công trên Chợ Tốt!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {showMore === "h-[158px]" ? (
              <p className="block text-center text-[12px] leading-[16px] ">
                <button
                  onClick={() => setShowMore("")}
                  className="w-full cursor-pointer border-0 text-[#33659c] justify-center flex pt-2"
                >
                  Mở rộng
                </button>
              </p>
            ) : (
              <p className="block text-center text-[12px] leading-[16px] ">
                <button
                  onClick={() => setShowMore("h-[158px]")}
                  className="w-full cursor-pointer border-0 text-[#33659c] justify-center flex pt-2"
                >
                  Thu gọn
                </button>
              </p>
            )}
          </div>
          {/*cac tu khoa pho bien*/}
          <div></div>
        </div>
      </div>
      {/* phần reponsive */}
      <div className="min-h-[unset] w-full float-left relative 800px:hidden">
        <div className="w-full flex flex-col ">
          <div className="mx-0 mt-0 mb-[10px] text-[#888] text-[12px] bg-[#ffffff] p-[10px] overflow-hidden w-full float-left relative ">
            <div className={`${showMore} text-ellipsis overflow-hidden text-[12px] leading-[16px]`}>
              <div className="mx-[-15px] ">
                <div className="w-full float-left relative min-h-[1px] px-[15px]">
                  <h2 className="text-center text-[14px] text-[#888] font-bold leading-[16px] mt-20px] mb-[10px]">
                    <span className="text-[12px] text-[#888] font-bold">
                      <strong>
                        Chợ Tốt - Chợ mua bán trao đổi Đồ gia dụng, nội ngoại
                        thất, cây cảnh trực tuyến hàng đầu Việt Nam
                      </strong>
                    </span>
                  </h2>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Sự đa dạng về mẫu mã, kiểu dáng của những món đồ{" "}
                    <strong>nội thất, ngoại thất</strong>, sự tiện dụng của{" "}
                    <strong>đồ gia dụng gia đình</strong> và vẻ đẹp của các loại{" "}
                    <strong>cây cảnh</strong> khiến chúng trở thành những món đồ
                    không thể thiếu trong ngôi nhà thân yêu của chúng ta.
                  </p>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Với hàng trăm, thậm chí hàng ngàn sự lựa chọn tại Chợ Tốt
                    dành cho bạn thì không thể nào bạn bỏ qua những món{" "}
                    <strong>đồ nội thất giá rẻ</strong>, hay những{" "}
                    <strong>cây cảnh phong thủy</strong>, giúp chất lượng cuộc
                    sống gia đình bạn được nâng cao hơn, may mắn sẽ tới với bạn
                    nhiều hơn.
                  </p>
                </div>
              </div>
              <div className="mx-[-15px]">
                <div className="relative min-h-[1px] px-[15px]">
                  <p className="text-center mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    <img
                      className="h-auto max-w-full object-cover m-[auto] "
                      src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2018/10/mua-ban-do-noi-that-do-ngoai-that-cay-canh.jpg"
                      alt=""
                    />
                  </p>
                  <h2 className="text-[#888] text-[14px] text-center font-bold leading-4 mt-5 mb-2.5">
                    <span className="text-xs font-bold text-[#888]">
                      <strong>Mua bán đồ nội ngoại thất</strong>
                    </span>
                  </h2>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Những sản phẩm đồ nội thất thông minh, hữu ích không chỉ
                    giúp cho căn nhà của bạn trở nên gọn gàng, ngăn nắp, sang
                    trọng hơn mà còn góp phần tạo nên không gian hiện đại, tiện
                    nghi, rất cần cho các gia đình. Các sản phẩm như{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-ban-ghe/ban-an-thong-minh">
                      bàn ăn thông minh
                    </a>
                    ,{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/ke-giay-thong-minh">
                      kệ giày thông minh
                    </a>{" "}
                    hay{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/tu-giay-thong-minh">
                      tủ giày thông minh
                    </a>
                    , sẽ tạo nên vẻ đẹp hài hòa cho ngôi nhà.
                  </p>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Tại Chợ Tốt, những món đồ nội ngoại thất giá rẻ được khá
                    nhiều người tìm và lựa chọn cho gia đình mình, cụ thể như{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-ban-ghe/ghe-salon-go">
                      ghế salon gỗ
                    </a>
                    ,{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-giuong-chan-ga-goi-nem/giuong-go-soi">
                      giường gỗ sồi
                    </a>
                    ,{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-tu-ke-gia-dinh/tu-nhua-quan-ao">
                      tủ nhựa quần áo
                    </a>
                    ,... là những món nội thất cần thiết sử dụng hàng ngày. Hãy
                    tìm những người bán đồ nội thất cũ để bạn có thể tiết kiệm
                    chi phí trong khi chất lượng khá tốt.
                  </p>
                </div>
                <div className="relative min-h-[1px] px-[15px]">
                  <p className="text-center mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    <img
                      className="h-auto max-w-full object-cover m-[auto] "
                      src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/do-gia-dung-cho-tot.jpg"
                      alt=""
                    />
                  </p>
                  <h2 className="text-center text-[14px] text-[#888] font-bold leading-4 mt-5 mb-2.5">
                    <span className="text-xs font-bold text-[#888]">
                      <strong>Mua bán đồ gia dụng</strong>
                    </span>
                  </h2>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    <strong>Những thiết bị gia dụng gia đình </strong>ngày nay
                    cung cấp nhiều chức năng thông minh và không ngừng cải tiến
                    giúp chúng ta giải quyết gần như mọi vấn đề trong cuộc sống
                    hằng ngày.
                  </p>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Tại Chợ Tốt bạn có thể dễ dàng tìm được những món đồ gia
                    dụng gia rẻ thông minh và giàu tiện ích như:{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-bep-lo-do-dien-nha-bep/noi-com-dien">
                      nồi cơm điện
                    </a>
                    , bếp ga, bếp điện, lò vi sóng, bàn ủi,{" "}
                    <a href="https://www.chotot.com/toan-quoc/mua-ban-quat">
                      quạt
                    </a>
                    , máy lọc nước,....
                  </p>
                </div>
                <div className="relative min-h-[1px] px-[15px]">
                  <p className="text-center mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    <img
                      className="h-auto max-w-full object-cover m-[auto] "
                      src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/cay-canh-cho-tot.jpg"
                      alt=""
                    />
                  </p>
                  <h2 className="text-center text-[14px] text-[#888] font-bold leading-4 mt-5 mb-2.5">
                    <span className="text-xs font-bold text-[#888]">
                      <strong>Mua bán cây cảnh</strong>
                    </span>
                  </h2>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Ngày nay các loại cây xanh,{" "}
                    <strong>cây cảnh trang trí</strong> đang ngày càng được ưa
                    chuộng nhờ những lợi ích tuyệt vời mà chúng mang lại.
                  </p>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Các loại cây cảnh giúp làm không gian sống, phòng làm việc -
                    học tập thêm tươi mát, tràn đầy sức sống. Bên cạnh đó chúng
                    còn giúp điều hòa không khí, giải tỏa căng thẳng, áp lực.
                    Hiện nay có rất nhiều loại cây cảnh đẹp được ưa chuộng như:
                    cây xương rồng, cây bàng singapore, bonsai,...
                  </p>
                  <p className="text-justify mx-0 mt-0 mb-[5px] text-[#888] leading-[16px] text-[12px]">
                    Bên cạnh đó, những loại cây cảnh phong thủy như:{" "}
                    <a href="https://www.chotot.com/tags/mua-ban-cay-canh-do-trang-tri/cay-kim-tien">
                      cây kim tiền
                    </a>
                    , cây kim ngân, cây phát tài, lưỡi hổ,... ngoài tác dụng về
                    thẩm mĩ, sức khỏe thì nó còn đem lại nhiều giá trị phong
                    thủy cho gia chủ với ý nghĩa mang lại may mắn và tài lộc.
                  </p>
                </div>
              </div>
              <div className="mx-[-15px]">
                <div className="w-full float-left relative min-h-[1px] px-[15px]">
                  <h2 className="text-justify text-[14px] text-[#888] font-bold leading-4 mt-5 mb-2.5">
                    <span className="text-xs font-bold text-[#888]">
                      <strong>
                        Hướng dẫn chọn đồ nội thất, ngoại thất, cây cảnh trên
                        Chợ Tốt
                      </strong>
                    </span>
                  </h2>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    ✅ Trên Chợ Tốt, rất nhiều người thanh lý đồ nội thất, đồ
                    gia dụng cũ nên trước khi mua bạn nên kiểm tra vật liệu để
                    tránh sự nhầm lẫn về giá cả, với nội thất có rất nhiều loại
                    vật liệu khác nhau như gỗ tự nhiên, ván công nghiệp, kim
                    loại, nhựa, mỗi vật liệu sẽ có giá khác nhau, tùy vào từng
                    kiểu dáng và kích thước để bạn có thể định giá cho sản phẩm
                    của bạn định mua. Ngoài ra, nên tham khảo giá từ các nguồn
                    bên ngoài, và so sánh giá với các người bán khác nhau trên
                    Chợ Tốt để biết được giá sản phẩm của bạn định mua thực sự
                    đã tốt nhất chưa.
                  </p>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    ✅ Kiểm tra độ chắc chắn, và xem các sản phẩm đó có bị lỗi
                    gì không, trước khi đi kiểm tra bạn cũng nên học cách nhận
                    biết các chất liệu sản phẩm để chắc chắn rằng người bán
                    không đăng sai thông tin sản phẩm.
                  </p>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    ✅ Đối với các loại cây cảnh, hay những loại hình trang trí
                    khác bạn cần kiểm tra nguồn gốc, tình trạng hoạt động hiện
                    tại, với cây thì cần tìm hiểu giống cây, giá trị của chúng,
                    và dấu hiệu nhận biết bệnh ở cây để biết chắc rằng những cây
                    bạn định mua vẫn trong tình trạng khỏe mạnh.
                  </p>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    ✅ Không nên chuyển tiền trước, đặt cọc hay trả góp với
                    người mua/bán.
                  </p>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    ✅ Nên hẹn gặp ở những nơi công cộng, hoặc đi với người thân
                    để tránh trường hợp xấu sảy ra. Nếu bắt gặp các trường hợp
                    không trung thực hãy báo ngay với nhân viên Chợ Tốt để chúng
                    tôi có hướng xử lý kịp thời.
                  </p>
                  <p className="text-[#888] leading-4 text-xs text-justify mt-0 mb-[5px] mx-0">
                    Để có thể làm đẹp cho ngôi nhà mình hãy truy cập ngay vào
                    Chợ Tốt để xem các mặt hàng <strong>đồ nội thất</strong>,{" "}
                    <strong>đồ ngoại thất</strong>, <strong>cây cảnh</strong>{" "}
                    giúp có được không gian tuyệt vời cho gia đình bạn. Ngoài
                    ra, bài viết Bí kíp mua nội thất phòng ngủ phù hợp, đẹp mắt
                    tại chuyên trang kinh nghiệm của chúng tôi sẽ chia sẻ thêm
                    cho bạn rất nhiều thông tin bổ ích trong việc mua bán nội,
                    ngoại thất hiệu quả hơn. Chúc bạn có những giao dịch thành
                    công trên Chợ Tốt!
                  </p>
                </div>
              </div>
            </div>
            {showMore === 'h-[158px]'? (
                <p className="block text-center text-[#888] leading-4 text-xs mt-0 mb-[5px] mx-0">
                <button onClick={()=>setShowMore('')} className="cursor-pointer text-[#33659c] justify-center flex w-full border-[none] outline-0 bg-[none] text-[12px] h-[32px] rounded-[0]">Xem thêm</button>
              </p>
            ):(
              <p className="block text-center text-[#888] leading-4 text-xs mt-0 mb-[5px] mx-0">
              <button onClick={()=>setShowMore('h-[158px]')} className="cursor-pointer text-[#33659c] justify-center flex w-full border-[none] outline-0 bg-[none] text-[12px] h-[32px] rounded-[0]">Thu gọn</button>
            </p>
            )}
          
          </div>
          {/* phan goi y tu khoa */}
          <div className="w-full bg-[#f4f4f4] h-[10px]"></div>
          <div className="bg-white text-[#777] px-[5px] text-xs leading-[25px] pt-3 pb-0 px-2.5;">
            <h4 className='text-base font-bold text-[#222] leading-normal mt-0 mb-2'>
              <strong>Các từ khóa phổ biến</strong>
            </h4>
            <ul className='overflow-hidden mb-0 px-[15px] mx-auto'>
              <li style={{
                    padding: "0",
                    listStyle: "disc",
                    width: "50%",
                    position: "relative",
                    minHeight: "1px",
                    float: "left",
              }}>
               <div className="bg-white text-[#777] text-xs leading-[25px] pt-3 pb-0 px-2.5">
                <span>Ván xưa</span>
               </div>
              </li>
              <li style={{
                    padding: "0",
                    listStyle: "disc",
                    width: "50%",
                    position: "relative",
                    minHeight: "1px",
                    float: "left",
              }}>
               <div className="bg-white text-[#777] text-xs leading-[25px] pt-3 pb-0 px-2.5">
                <span>Ván xưa</span>
               </div>
              </li><li style={{
                    padding: "0",
                    listStyle: "disc",
                    width: "50%",
                    position: "relative",
                    minHeight: "1px",
                    float: "left",
              }}>
               <div className="bg-white text-[#777] text-xs leading-[25px] pt-3 pb-0 px-2.5">
                <span>Ván xưa</span>
               </div>
              </li>
              
            </ul>

          </div>
          <div className="w-full bg-[#f4f4f4] h-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default FooterHouseWare;
