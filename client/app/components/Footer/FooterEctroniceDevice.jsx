"use client";

import React, { useState } from "react";



const FooterEctroniceDevice = () => {
const[ShowMore, setShowMore] = useState('h-[200px]')

  return (
    <>
    <div className="leading-[1.5] relative bg-[#fff] p-[12px]">
      <div>
        <div className={`${ShowMore} text-ellipsis text-justify overflow-hidden text-[12px] relative    `}>
          <div className="relative text-[12px] leading-[1.666] text-justify ">
            <h2 className="text-center text-[18px] m-0 ">
             <strong> ĐỒ ĐIỆN TỬ CHÍNH HÃNG, GIÁ RẺ UY TÍN 04/24 TRÊN CHỢ TỐT</strong>
            </h2>
            <br />
            <p>
              Đồ điện tử xuất hiện hàng ngày xung quanh cuộc sống của chúng ta.
              Nhờ sự tiện dụng và những đóng góp cho đời sống con người, chúng
              được xem là những vật dụng không thể thiếu để hỗ trợ cho các nhu
              cầu thiết thực như liên lạc, làm việc, học tập, giải trí,...
            </p>
            <h3>
              <strong>
                Các loại sản phẩm đồ điện tử phổ biến nhất hiện nay
              </strong>
            </h3>
            <p>
              Một số món đồ điện tử dễ bắt gặp nhất trong cuộc sống hàng ngày có
              thể kể đến dưới đây:
            </p>
            <h4>
              <strong>Điện thoại</strong>
            </h4>
            <p>
              Trong thời đại công nghệ 4.0, điện thoại không còn là một thiết bị
              xa lạ đối với bất kỳ ai. Không chỉ có công dụng cơ bản là nhắn
              tin, nghe gọi, kết nối những người không ở cùng vị trí với nhau,
              điện thoại thông minh ngày nay đã được trang bị thêm nhiều tính
              năng phù hợp hơn với nhu cầu của người dùng. Tiêu biểu nhất có thể
              kể đến như: lướt web, chụp ảnh, tải và nghe nhạc, chơi game, lưu
              trữ dữ liệu, v.v
            </p>
            <p>
              Thậm chí, có những ứng dụng trên điện thoại còn được tạo ra với
              mục đích kiểm soát dòng điện, remote của các thiết bị điện tử khác
              trong gia đình. Do đó, không hề sai khi nói chỉ cần một chiếc điện
              thoại bỏ túi với kích thước nhỏ, cuộc sống của bạn đã trở nên tiện
              lợi và dễ dàng hơn rất nhiều.
            </p>
            <h4>
              <strong>Laptop</strong>
            </h4>
            <p>
              Laptop còn được gọi là máy tính xách tay, là loại thiết bị điện tử
              có thể dễ dàng được người dùng mang tới bất kỳ đâu, sử dụng ở bất
              kỳ địa điểm nào. Cũng giống như điện thoại, laptop cũng là một
              trong những thiết bị điện tử vô cùng quen thuộc trong đời sống con
              người, nhất là đối với những bạn học sinh, sinh viên hay người đã
              đi làm.
            </p>
            <p>
              Laptop được đánh giá là công cụ hàng đầu để học tập, làm việc hay
              giải trí. Thông qua laptop, chúng ta có thể vào mạng Internet, hỗ
              trợ công việc, bài học, nghe nhạc, chơi game, tra cứu thông tin
              cần thiết và lưu trữ dữ liệu.
            </p>
            <h4>
              <strong>Máy tính bảng</strong>
            </h4>
            <p>
              Máy tính bảng có thiết kế tương tự như một chiếc điện thoại thông
              minh cỡ lớn. Tuy nhiên, chúng có thế mạnh lớn hơn smartphone trong
              việc sử dụng các phần mềm, ứng dụng. Thậm chí, có một số dòng máy
              tính bảng còn có kích thước màn hình tương đương với máy tính xách
              tay. Thế nhưng thay vì có cấu tạo gồm bàn phím, con chuột hay
              touchpad, người dùng sẽ điều khiển và sử dụng máy tính bảng thông
              qua màn hình cảm ứng giống như smartphone vậy.
            </p>
            <h4>
              <strong>Máy tính để bàn</strong>
            </h4>
            <p>
              Có thể nói máy tính để bàn chính là tiền đề để con người tạo ra
              máy tính xách tay. Tuy có công dụng gần như giống nhau, thế nhưng
              nhược điểm của máy tính để bàn là chúng được thiết kế để đặt tại
              vị trí cố định. Ngược lại, máy tính để bàn lại có cấu hình cao
              hơn, xử lý mượt mà các tác vụ hơn so với laptop. Chúng thường được
              sử dụng để chạy những phần mềm, ứng dụng có dung lượng lớn và độ
              yêu cầu cao.
            </p>
            <h4>
              <strong>Tivi</strong>
            </h4>
            <p>
              Tivi là một trong những thiết bị điện tử đời đầu mà hầu như gia
              đình nào cũng đã và đang sở hữu. Với tivi, bạn sẽ cập nhật được
              những thông tin mới nhất về tình hình trong nước cũng như quốc tế
              thông qua các chương trình như Thời sự. Ngoài ra, tivi cũng có một
              số kênh giải trí, âm nhạc, giáo dục phù hợp với nhiều đối tượng
              khác nhau. Vì vậy, tivi chính là thiết bị điện tử được lựa chọn
              hàng đầu trong mỗi gia đình hiện nay.
            </p>
            <h4>
              <strong>Tai nghe</strong>
            </h4>
            <p>
              Tai nghe là thiết bị có công dụng phát âm thanh từ điện thoại, máy
              tính hay những món đồ điện tử khác mà chúng có thể kết nối. Tai
              nghe được thiết kế nhỏ gọn, phù hợp với phần tai người dùng. Khi
              sử dụng tai nghe, bạn sẽ được cảm nhận không gian âm thanh riêng
              biệt. Chúng được dùng trong trường hợp bạn muốn gọi điện, nghe
              nhạc, xem phim hay chơi game mà không muốn âm thanh từ ứng dụng
              làm ảnh hưởng tới những người bên cạnh.
            </p>
            <p>
              Hiện nay, trên thị trường có rất nhiều loại tai nghe khác nhau,
              phù hợp với từng mục đích cá nhân. Chẳng hạn như tai nghe có dây,
              tai nghe không dây, headphone.
            </p>
            <h4>
              <strong>Dàn loa, âm thanh</strong>
            </h4>
            <p>
              Tuy có công dụng phát âm thanh giống như tai nghe, thế nhưng đối
              tượng và cách thức hoạt động của loa và dàn âm thanh lại hoàn toàn
              ngược lại. Loa, dàn âm thanh thường phát ra âm thanh có âm lượng
              lớn, vang, giúp nhiều người có thể cùng nghe thấy. Do đó, chúng
              thường được sử dụng cho những dịp có nhiều người, ở trong không
              gian rộng, ví dụ như khi hát karaoke, mở nhạc trong đám cưới, tiệc
              tùng, v.v
            </p>
            <h4>
              <strong>Máy ảnh</strong>
            </h4>
            <p>
              Máy ảnh, hay còn được gọi là máy chụp hình, là thiết bị điện tử có
              công dụng giúp người sử dụng thu ảnh tĩnh, lưu lại khoảnh khắc
              trước ống kính. Một số dòng máy ảnh hiện nay còn cung cấp những
              tính năng như quay video, ghi âm, kết nối bluetooth,...
            </p>
            <p>
              Mặc dù trên điện thoại, máy tính bảng hay các thiết bị điện tử
              cũng có chức năng chụp hình, thế nhưng máy ảnh vẫn là món đồ được
              những người đam mê nhiếp lựa chọn mua và sử dụng. Một trong những
              ưu điểm chính giúp chúng trở nên nổi bật hơn chính là về chất
              lượng hình ảnh mà thiết bị này cung cấp.
            </p>

            <h4>
              <strong>Phụ kiện, linh kiện điện tử</strong>
            </h4>

            <p>
              Ngoài những sản phẩm phổ biến được liệt kê ở phía trên, đồ điện tử
              còn bao gồm những thiết bị và phụ kiện, linh kiện khác. Đó là
              những thành phần điện tử cơ bản, có cấu tạo rời rạc. Tuy nhiên,
              sau khi được ghép hay nối lại với nhau, chúng sẽ trở thành những
              thiết bị hoàn chỉnh, được sử dụng trong đời sống hàng ngày.
            </p>

            <h3>
              <strong>Một số thương hiệu đồ điện tử lớn trên thị trường</strong>
            </h3>
            <h4>
              <strong>Apple</strong>
            </h4>
            <p>
              Apple là tập đoàn công nghệ đa quốc gia tới từ Mỹ, hiện có trụ sở
              chính đặt tại bang California. Apple hiện đã và đang nằm trong
              nhóm những hãng đồ điện tử được biết tới và lựa chọn sử dụng nhiều
              nhất nhờ đặc trưng là thiết kế sang trọng, bắt mắt và sản phẩm có
              chất lượng cao.
            </p>
            <p>
              Những thiết bị điện tử nổi bật nhất của hãng táo cắn dở có thể kể
              đến như: iPhone, Macbook, iPad, Apple Watch, Airpods,...
            </p>
            <h4>
              <strong>Samsung</strong>
            </h4>
            <p>
              Công ty điện tử đa quốc gia Samsung vốn không còn là thương hiệu
              quá xa lạ đối với mọi người, nhất là khi công ty này có đến 4 nhà
              máy được đặt tại Việt Nam. Theo những thống kê về doanh thu kể từ
              năm 2009 tới nay, đây được xem là công ty về công nghệ lớn nhất
              thế giới. Chúng ta có thể dễ dàng bắt gặp logo của thương hiệu
              Samsung trên các thiết bị điện tử quanh nhà như tivi, tủ lạnh, máy
              giặt, điện thoại, máy tính,... Riêng với mảng điện thoại, Samsung
              để lại dấu ấn với các sản phẩm như: Galaxy S Series, Galaxy Note,
              Z Flip, Z Fold,...
            </p>
            <h4>
              <strong>Sony</strong>
            </h4>
            <p>
              Sony là một công ty công nghiệp, tập đoàn đa quốc gia tới từ Nhật
              Bản, đứng ở vị trí thứ 5 trong bảng xếp hạng top tập đoàn điện tử
              lớn nhất trên thế giới. Với đặc điểm nổi bật là chất lượng sản
              phẩm tỉ lệ thuận với lịch sử xây dựng thương hiệu, Sony là một
              trong những lựa chọn hàng đầu của người dân Việt Nam khi mua các
              thiết bị điện tử: tivi, tai nghe, loa đài, máy ảnh, điện thoại.
            </p>
            <h4>
              <strong>LG</strong>
            </h4>
            <p>
              Giống như Samsung, LG là một tập đoàn công nghiệp tới từ đất nước
              nổi tiếng với củ nhân sâm - Hàn Quốc. Tập đoàn này chuyên sản xuất
              các sản phẩm điện tử như smartphone, tivi, điều hoà, thiết bị phát
              âm thanh,...
            </p>
            <h4>
              <strong>Xiaomi</strong>
            </h4>
            <p>
              Xiaomi là tập đoàn công nghệ tới từ đất nước tỷ dân, có trụ sở đặt
              tại Bắc Kinh, Trung Quốc. Thương hiệu này còn có tên gọi khác là
              Apple của Trung Quốc" bởi vì tuy chỉ mới được thành lập và ra mắt
              công chúng vào năm 2011 thế nhưng chỉ sau 5 năm, Xiaomi đã lọt top
              5 tập đoàn công nghệ thế giới.
            </p>
            <p>
              Những ưu điểm hàng đầu của đồ điện tử Xiaomi chính là giá thành
              sản phẩm và độ lớn của dung lượng pin. Song song với đó, điện
              thoại của nhãn hiệu này cũng được đánh giá là sang trọng, tinh tế
              và hiện đại hơn so với các sản phẩm có giá thành tương đương.
            </p>
            <h4>
              <strong>Dell</strong>
            </h4>
            <p>
              Có trụ sở nằm tại cùng một đất nước với Apple, công ty đa quốc gia
              Dell chuyên được biết tới nhờ hoạt động phát triển và thương mại
              hóa công nghệ máy tính. Mặc dù có sản xuất các dòng thiết bị điện
              tử khác như điện thoại thông minh, thế nhưng laptop tới từ nhãn
              hiệu này lại là sản phẩm phổ biến hơn cả. Máy tính xách tay hãng
              Dell thường gây ấn tượng nhờ cấu hình ổn định, độ bền cao và chất
              lượng nổi bật.
            </p>
            <h4>
              <strong>Nên mua đồ điện tử ở đâu?</strong>
            </h4>
            <p>
              Có 2 cách phổ biến nhất để người dùng có thể mua đồ điện tử: mua
              tại các cửa hàng offline hoặc mua online tại các sàn thương mại
              điện tử, cửa hàng phân phối.
            </p>
            <h4>
              <strong>Mua tại các cửa hàng offline</strong>
            </h4>
            <p>
              Mua đồ điện tử offline, hay mua trực tiếp, là hình thức cho phép
              khách hàng được tới cửa hàng để lựa chọn sản phẩm. Mặc dù cách mua
              sắm này sẽ giúp bạn có thể xem xét sản phẩm kĩ hơn, dễ nhận tư vấn
              về quy định bảo hành hơn, thế nhưng nó lại tồn tại một số nhược
              điểm nhất định.
            </p>
            <p>
              Đầu tiên chắc chắn phải kể đến về giá cả sản phẩm. Khi mua sắm
              trực tiếp, bạn sẽ khó có thể so sánh và lựa chọn được cửa hàng bán
              thiết bị với giá cả phù hợp nhất. Bên cạnh đó, bạn cũng không thể
              áp dụng các phiếu giảm giá trực tuyến. Mua hàng offline cũng yêu
              cầu khách hàng phải dành nhiều thời gian hơn để có thể di chuyển
              tới từng cửa hàng.
            </p>
            <h4>
              <strong>
                Mua online tại các sàn thương mại điện tử, cửa hàng phân phối
              </strong>
            </h4>
            <p>
              Ngược lại, shopping online là hình thức được tạo ra nhằm giải
              quyết những nhược điểm còn tồn đọng của mua sắm trực tiếp. Mua sắm
              ngoại tuyến trên các sàn thương mại điện tử hay website cửa hàng
              phân phối thường cung cấp cho khách hàng giá cả sản phẩm phải
              chăng hơn, đi kèm những phiếu giảm giá đối với từng mặt hàng nhất
              định.
            </p>
            <p>
              Hơn nữa, khi mua hàng online, người dùng cũng dễ dàng so sánh giá
              thiết bị điện tử giữa từng người bán hay từng trang bán hàng khác
              nhau. Bạn cũng không cần phải dành quá nhiều thời gian để đi tới
              cửa hàng, lựa chọn và xem xét trực tiếp từng sản phẩm. Do đó, hình
              thức mua sắm này hoàn toàn phù hợp với những đối tượng bận rộn,
              đặc biệt là những người đã đi làm.
            </p>
            <h4>
              <strong>
                Mua bán đồ điện tử chính hãng, giá tốt tại Chợ Tốt
              </strong>
            </h4>
            <p>
              Có thể nói thiết bị điện tử hiện nay đã là một thành phần tất yếu
              trong cuộc sống của mỗi người. Chúng xuất hiện trong mọi hoạt
              động, mọi địa điểm, hỗ trợ con người rất nhiều trong công việc và
              học tập. Nhờ những lợi ích thiết yếu đó, nhu cầu mua sắm đồ điện
              tử giá rẻ, chính hãng, có độ bền cao cũng đang ngày càng gia tăng.
              Nếu không có thời gian để tới trực tiếp nơi bán đồ điện tử hay đơn
              giản là yêu thích việc mua sắm online, Chợ Tốt sẽ là một sàn
              thương mại điện tử đáng để bạn tham khảo và lựa chọn sử dụng.
            </p>
            <p>
              Tại Chợ Tốt, khách hàng có thể xem được giá bán trực tiếp và so
              sánh giữa từng người bán với nhau. Khi mua đồ điện tử tại Chợ Tốt,
              người dùng sẽ được cung cấp đầy đủ thông tin về người bán cũng như
              tình trạng thiết bị. Vì vậy, bạn sẽ có thể xem xét tình trạng của
              từng món đồ điện tử cũ, mới khác nhau rồi mới đưa ra quyết định
              thích hợp với nhu cầu cá nhân.
            </p>
            <p>
              Còn chần chừ gì nữa, hãy truy cập Chợ Tốt ngay hôm nay để sở hữu
              những món đồ điện tử giá hời nhất!
            </p>
          </div>
        </div>
        {ShowMore === "h-[200px]"?(
            <>
              <div
              className="hidden 800px:block"
          style={{
            color: "rgb(119, 119, 119)",
            height: "25px",
            width: "100%",
            position: "absolute",
            bottom: "30%",
            background:
              "linear-gradient(to top, rgb(243, 243, 243), rgba(255, 255, 255, 0.15))",
            margin: "0px",
          }}
        ></div>
        <p className="text-[12px] text-[#38699F] mb-[10px] p-0 text-center mt-[10px] cursor-pointer" onClick={()=>setShowMore('')}>Mở rộng</p></>
        ):(
            <p className="text-[12px] text-[#38699F] mb-[10px] p-0 text-center mt-[10px] cursor-pointer" onClick={()=>setShowMore('h-[200px]')}>Thu gọn</p>
        )}
      
      </div>
      {/* Phan tu khoa pho bien */}
      <div className="text-left text-[12px] font-[400]">
        <p className="text-[#9B9B9B] m-0 font-bold ">Các từ khóa phổ biến</p>
        <ul className="flex flex-wrap pl-0 mt-[12px] ">
            <li className="text-[#777777] list-inside list-disc 800px:basis-[25%] 400px:basis-[50%] 400px:pr-[10px]">
                <span>Samsung Galaxy S22 Series</span>
            </li>
            <li className="text-[#777777] list-inside list-disc 800px:basis-[25%] 400px:basis-[50%] 400px:pr-[10px]">
                <span>Samsung Galaxy S7 Series</span>
            </li>
       
        </ul>
      </div>
    </div>
  
    
    </>
    
  );
};

export default FooterEctroniceDevice;
