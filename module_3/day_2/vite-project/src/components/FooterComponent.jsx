import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="pt-8 pb-4 text-white bg-black pt-25">
      <div className="grid grid-cols-1 gap-6 px-4 mx-15 max-w-8xl md:grid-cols-4">
        <div>
          <h3 className="mb-2 font-semibold">Về chúng tôi</h3>
          <p>Số điện thoại: 095.366.4722</p>
          <p>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Phương thức thanh toán</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" 
                alt="MasterCard"
                className="object-contain w-10 h-6"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Truyền thông xã hội</h3>
          <p>📘 Facebook</p>
          <p>📺 Youtube</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Hỗ trợ khách hàng</h3>
          <p>Liên hệ Hotline: 036.555.1123</p>
          <p>Email: happy.@gmail.com</p>
          <p>Địa chỉ: Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-4 pt-4 mt-6 text-sm text-gray-300 border-t border-gray-600 mx-15 max-w-8xl md:flex-row">
        <p>
          Công ty TNHH Minh Trí <br />
          số CND/DN/ cấp ngày 2/1/2020
        </p>
        <div className="flex flex-col gap-1 mt-1 item-s-center md:mt-0">
          <img
            src="https://image.congan.com.vn/thumbnail/CATP-365-2021-7-20/hinh-anh-gui-kem.png" 
            alt="Thông báo bộ công thương"
            className="h-8"
          />
          <p>© Thông báo</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent