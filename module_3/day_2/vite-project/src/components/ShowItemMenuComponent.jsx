import React, { useState, useEffect } from "react";
import { Modal, Rate, Tag } from "antd";

const ShowItemMenuComponent = ({ isOpen, selectedMenu, onClose }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedMenu?.data?.items?.length > 0) {
      setSelectedItem(selectedMenu.data.items[0]); 
    }
  }, [selectedMenu]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Modal
      title={`Chi tiết menu: ${selectedMenu.name}`}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={1000}
    >
      <div className="grid grid-cols-2 gap-4 max-h-[600px] overflow-hidden ">
        <div className="overflow-y-auto max-h-[600px] pr-2 ">
          {selectedMenu.data?.items?.length > 0 ? (
            selectedMenu.data.items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-2 mb-2 rounded cursor-pointer ${
                  selectedItem?.id === item.id ? "bg-blue-100" : "bg-gray-100"
                } hover:bg-blue-50`}
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-20 h-20 rounded"
                />
                <span className="font-medium">{item.name}</span>
              </div>
            ))
          ) : (
            <p>Menu này chưa có món nào.</p>
          )}
        </div>

        <div className="pl-4 overflow-y-auto max-h-[600px]">
          {selectedItem ? (
            <>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="object-cover w-full mb-4 rounded h-60"
              />
              <h2 className="mb-2 text-xl font-bold">{selectedItem.name}</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                <Tag color="blue">{selectedItem.cuisine}</Tag>
              </div>
              <Rate disabled defaultValue={selectedItem.rating} key="rate" />,
              <p className="text-gray-700"><b>Thành phần : </b>
                {selectedItem.ingredients}
              </p>
              <p className="text-gray-700"><b>Huớng dẫn : </b>
                {selectedItem.instructions}
              </p>
              
            </>
          ) : (
            <p>Chọn một món ăn để xem chi tiết.</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ShowItemMenuComponent;
