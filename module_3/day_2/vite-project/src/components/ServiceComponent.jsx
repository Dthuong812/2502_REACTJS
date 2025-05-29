import React from "react";
import { Link } from "react-router-dom"; 

const ServiceComponent = () => {
  return (
    <section className="bg-[#f8f8f8] py-12 px-4">
      <div className="grid grid-cols-1 gap-6 mx-15 max-w-8xl md:grid-cols-3 ">
        <div className="flex flex-col h-full gap-6">
          <div className="flex flex-col justify-center h-full p-6 text-center text-white bg-black">
            <h3 className="mb-4 text-2xl font-semibold">DỊCH VỤ</h3>
            <div className="grid grid-cols-2 gap-2 text-sm font-light">
              <span>TIỆC TẠI GIA</span>
              <span>TIỆC CƯỚI HỎI</span>
              <span>TIỆC BUFFET</span>
              <span>TIỆC SỰ KIỆN</span>
              <span className="col-span-2">TIỆC TEA BREAK</span>
            </div>
          </div>

          <div className="bg-[#d3af8b] text-white text-center p-6 h-full flex flex-col justify-center">
            <h3 className="mb-2 text-2xl font-semibold">LIÊN HỆ</h3>
            <p>
              <span className="font-semibold">Address:</span> abc@cmcglobal.vn
            </p>
            <p>
              <span className="font-semibold">Hotline:</span> 0919319071
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden h-150 group">
          <img
            src="https://images.unsplash.com/photo-1595908128774-93d51801fa39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Set Menu"
            className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/15 bg-opacity-40">
            <h3 className="text-3xl font-bold">SET MENU</h3>
            <Link
              to="/setmenu"
              className="underline text-sm mt-2 hover:text-[#d3af8b]"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden group h-150">
          <img
            src="https://images.unsplash.com/photo-1595908128774-93d51801fa39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Menu Tự Chọn"
            className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/5 bg-opacity-40">
            <h3 className="text-3xl font-bold">MENU TỰ CHỌN</h3>
            <Link
              to="/"
              className="underline text-sm mt-2 hover:text-[#d3af8b]"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
