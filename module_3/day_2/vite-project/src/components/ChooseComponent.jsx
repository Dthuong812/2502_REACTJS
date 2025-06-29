import React from "react";
const features = [
  {
    title: "SỰ LỰA CHỌN ẨM THỰC SỐ 1",
    description:
      "Thuộc Golden Gate Group – 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc",
    image: "https://images.unsplash.com/photo-1585332957581-e178eef5e340?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "THỰC PHẨM AN TOÀN",
    description:
      "Đào đảm an toàn vệ sinh thực phẩm từ nguồn cung cấp đến khâu chế biến",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "THỰC ĐƠN ĐA DẠNG",
    description:
      "Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn",
    image: "https://images.unsplash.com/photo-1578167732217-76eb7b9f10f1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "PHỤC VỤ CHUYÊN NGHIỆP",
    description:
      "Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi",
    image: "https://images.unsplash.com/photo-1595908128774-93d51801fa39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const ChooseComponent = () => {
  return (
    <section className="pt-12 text-center bg-white">
      <h2 className="mb-10 text-3xl font-bold">VÌ SAO LỰA CHỌN CHÚNG TÔI?</h2>
      <div className="grid grid-cols-1 gap-10 mx-auto px-15 max-w-8xl md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full rounded-lg shadow h-65"
            />
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseComponent;
