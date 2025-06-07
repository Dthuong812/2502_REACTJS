import React, { useState } from "react";
import { Modal, Input, DatePicker, Checkbox, Button, Row, Col, message } from "antd";

const OpenBookingButtonComponent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    guestCount: "",
    phoneNumber: "",
    eventDate: null,
    address: "",
    eventType: "",
    isConsultationChecked: false,
  });

  const [errors, setErrors] = useState({}); 

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); 
  };

  const handleSubmit = () => {
    const { fullName, guestCount, phoneNumber, eventDate, address, eventType } = formData;
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên!";
    }
    if (!guestCount || isNaN(guestCount) || guestCount <= 0) {
      newErrors.guestCount = "Vui lòng nhập số lượng khách hợp lệ!";
    }
    if (!phoneNumber.trim() || !/^\d{10,11}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại hợp lệ (10-11 chữ số)!";
    }
    if (!eventDate) {
      newErrors.eventDate = "Vui lòng chọn ngày tổ chức sự kiện!";
    }
    if (!address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ!";
    }
    if (!eventType.trim()) {
      newErrors.eventType = "Vui lòng nhập loại sự kiện!";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    message.success("Thông tin đã được gửi thành công!");
    console.log("Dữ liệu gửi đi:", formData);
    onClose(); 
  };

  return (
    <Modal title open={isOpen} onCancel={onClose} footer={null} width={900}>
      <div className="py-10 px-9">
        <h1 className="mb-4 text-3xl font-bold text-center">Liên hệ đặt tiệc</h1>
        <p className="max-w-2xl mx-auto mb-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente debitis, recusandae
          dignissimos quasi eum voluptatum illo, quae fugit nihil corrupti delectus ut earum ipsam
          culpa nisi quo dolore. Alias.
        </p>

        <Row gutter={16}>
          <Col span={12}>
            <label className="!mt-5">Họ và tên</label>
            <Input
              placeholder="Nhập họ và tên"
              className="!mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200  !pl-0"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </Col>
          <Col span={12}>
            <label className="!mt-5">Số lượng khách</label>
            <Input
              type="number"
              placeholder="0"
              className="!mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200 !pl-0"
              value={formData.guestCount}
              onChange={(e) => handleInputChange("guestCount", e.target.value)}
            />
            {errors.guestCount && <p className="text-sm text-red-500">{errors.guestCount}</p>}
          </Col>

          <Col span={12}>
            <label className="!mt-5">Số điện thoại</label>
            <Input
              placeholder="Số điện thoại"
              className="!mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200 !pl-0"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
          </Col>
          <Col span={12}>
            <label className="!mt-5">Ngày tổ chức sự kiện</label>
            <DatePicker
              format="DD/MM/YYYY"
              className="date w-full !mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200 !pl-0"
              value={formData.eventDate}
              onChange={(date) => handleInputChange("eventDate", date)}
            />
            {errors.eventDate && <p className="text-sm text-red-500">{errors.eventDate}</p>}
          </Col>

          <Col span={12}>
            <label className="!mt-5">Địa chỉ</label>
            <Input
              placeholder="Nhập địa chỉ"
              className="!mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200 !pl-0"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
          </Col>
          <Col span={12}>
            <label className="!mt-5">Loại sự kiện</label>
            <Input
              placeholder="Nhập loại sự kiện"
              className="!mb-1 !mt-2 !border-b-2 !rounded-none !border-gray-200 !pl-0"
              value={formData.eventType}
              onChange={(e) => handleInputChange("eventType", e.target.value)}
            />
            {errors.eventType && <p className="text-sm text-red-500">{errors.eventType}</p>}
          </Col>
        </Row>

        <Checkbox
          className="mb-4"
          checked={formData.isConsultationChecked}
          onChange={(e) => handleInputChange("isConsultationChecked", e.target.checked)}
        >
          Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)
        </Checkbox>

        <div className="mt-6 text-center">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="!bg-orange-600 !hover:bg-orange-700"
            onClick={handleSubmit}
          >
            GỬI THÔNG TIN
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default OpenBookingButtonComponent;
