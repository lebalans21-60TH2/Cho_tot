"use client";
import Header from "../components/Header/Header";
import CarouselBanner from "../components/Home/CarouselBanner/CarouselBanner";
import SubBanner from "../components/Home/SubBanner/SubBanner";
import NewFeed from "../components/Home/NewFeed/NewFeed";
import ProductHome from "../components/Products/ProductHome";
import MenuReponsive from "../components/Layout/MenuReponsive";
import FloatButton from "../components/Layout/FloatButton";
import HomeContainer from "../components/Footer/HomeContainer";
import Footer from "../components/Footer/Footer";

import React, { useEffect } from "react";

import {store}   from "../../redux/store";
import {loadUser} from '../../redux/actions/user';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomePage = () => {

  useEffect(() => {
    store.dispatch(loadUser());

  }, []);


  return (
    <div className="800px:absolute w-full overflow-x-hidden flex flex-col">
      <Header />
      <div className="800px:w-full 800px:flex 800px:flex-col 800px:bg-[#f4f4f4]">
        <div className="800px:flex 800px:justify-center 800px:h-[287px] 800px:mt-[12vh] ">
          <div className="w-full 800px:max-w-[1024px] 800px:bg-[#FFFFFF] ">
            <CarouselBanner />
          </div>
        </div>

        <SubBanner />
        <NewFeed />
        <ProductHome />
      </div>
      <MenuReponsive />

      <FloatButton />
      <HomeContainer />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </div>
  );
};

export default HomePage;
