"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { server } from "../../../server";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const imgBanner = "../../../../public/uploads/";

  const dispatch = useDispatch();
  const [bannerImage, setBannerImage] = useState(null);

  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  // button add img banner
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bannerImage", bannerImage);

    await axios
      .post(
        `${server}/banner/create-banner`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Tao banner thanh cong!");
        setBannerImage(null);
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  // button delete banner
  const handleDeleteBanner = async (data) => {
    await axios
      .delete(`${server}/banner/delete-banner/${data._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("Xoa banner thanh cong!");
        setBannerImage(null);
        window.location.reload(true);
      });
  };

  const onInputChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  // get all img banner
  const getImage = async () => {
    const result = await axios.get(`${server}/banner/get-all-banner`);

    setAllImage(result.data.banners);
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Thêm sản phẩm</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="pb-2">
            Hình ảnh <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={onInputChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              {/* <AiOutlinePlusCircle size={30} className="mt-3" color="#555" /> */}
            </label>
            {/* {images &&
              images.map((i) => (
                <img
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))} */}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Thêm banner"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            {allImage == null
              ? ""
              : allImage.map((data) => {
                  return (
                    <div className="flex ">
                      <div>
                        <img
                          src={`../../../../uploads/${data.bannerImage}`}
                          height={100}
                          width={100}
                        />
                      </div>
                      <div onClick={() => handleDeleteBanner(data)}>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                        >
                          <path
                            style={{
                              fill: "#FF5E5E",
                              stroke: "#730000",
                              strokeWidth: "4",
                            }}
                            d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </form>
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
    </div>
  );
};

export default page;
