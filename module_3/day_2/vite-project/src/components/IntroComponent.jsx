import React, { useState } from "react";
import { Modal } from "antd";

const IntroComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col items-center w-full py-16 bg-[#f3f3f3]">
      <div className="grid items-center gap-10 px-15 max-w-8xl md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Tiệc tại gia chất nhà hàng
          </h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
            fugit accusantium commodi esse modi pariatur praesentium, voluptas
            dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis
            sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            quae fugit accusantium commodi esse modi pariatur
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
            fugit accusantium commodi esse modi pariatur praesentium, voluptas
            dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis
            sint.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tiệc tại gia"
            className="object-cover w-full h-100"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOpenModal}
          >
            <div className="p-3 transition bg-white rounded-full shadow-lg hover:scale-110">
              <svg
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <Modal
        title
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
      >
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            width="914"
            height="514"
            src="https://www.youtube.com/embed/jumecLUY-z0?list=RDjumecLUY-z0"
            title='Một Lời Đồn -  Album "bình thường"'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default IntroComponent;
