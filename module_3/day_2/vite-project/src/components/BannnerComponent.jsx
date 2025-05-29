import React from "react";
import { Carousel } from "antd";

const listImage = [
  "https://images.unsplash.com/photo-1585332957581-e178eef5e340?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578167732217-76eb7b9f10f1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1595908128774-93d51801fa39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const BannnerComponent = () => {
  return (
    <div className="relative w-full max-h-[500px] overflow-hidden mt-17">
      <Carousel autoplay>
        {listImage.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt={`banner-${index}`}
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white pointer-events-none bg-opacity-40">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          ƯU ĐÃI LÊN TỚI 30%
        </h2>
        <p className="mb-2 text-xl font-semibold md:text-3xl">
          KHI ĐẶT SET MENU SUM VẦY
        </p>
        <p className="mb-4">
          Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021
        </p>
        <button className="px-4 py-2 font-semibold text-white bg-orange-600 rounded pointer-events-auto hover:bg-orange-700">
          XEM CHI TIẾT ƯU ĐÃI
        </button>
      </div>
    </div>
  );
};

export default BannnerComponent;
