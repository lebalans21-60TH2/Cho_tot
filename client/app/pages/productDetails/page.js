import Navbar from "../../components/Header/Navbar/Navbar";
import InforProductMain from "../../components/Products/InforProduct/InforProductMain";
import Footer from "../../components/Footer/Footer";
import Suggestions from "../../components/Products/SuggestionsProduct/Suggestions";
import SimilarProduct from "../../components/Products/SimilarProduct/SimilarProduct";


export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <div className="hidden 800px:w-full 800px:flex 800px:flex-col 800px:bg-[#f4f4f4]">
        <div className="800px:w-full 800px:h-full 800px:z-900 800px:relative z-[999]">
          <Navbar />
        </div>
      </div>
      <div className="800px:pt-[80px]">
        <InforProductMain />
      </div>
      {/* Tao div rieng cho viec reponsive infor san pham, sau khi lam xong se xoas */}
      <div className="">
        <Suggestions />
      </div>

      <SimilarProduct />
      <Footer />
    </div>
  );
}
