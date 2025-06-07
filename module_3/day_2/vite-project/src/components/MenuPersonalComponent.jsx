import React, { useEffect, useState } from "react";
import MenuImageGrid from "./MenuImageGrid";
import CustomMenuComponent from "./CustomMenuComponent";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { message } from "antd";
import EditMenuComponent from "./EditMenuComponent";
import ShowItemMenuComponent from "./ShowItemMenuComponent";

const MenuPersonalComponent = () => {
  const [savedMenus, setSavedMenus] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editMenuName, setEditMenuName] = useState("");
  const [editMenuData, setEditMenuData] = useState({});
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({ name: "", data: {} });

  const loadMenus = () => {
    const savedMenusRaw = localStorage.getItem("customMenus");
    setSavedMenus(savedMenusRaw ? JSON.parse(savedMenusRaw) : {});
  };

  useEffect(() => {
    loadMenus();
  }, []);

  const handleEditMenu = (menuName) => {
    setEditMenuName(menuName);
    setEditMenuData(savedMenus[menuName]);
    setIsEditModalOpen(true);
  };

  const handleUpdateMenu = () => {
    if (!editMenuName.trim()) {
      message.error("Vui lòng nhập tên menu!");
      return;
    }

    setSavedMenus((prev) => {
      const updatedMenus = { ...prev };

      const originalName = Object.keys(prev).find((key) => prev[key] === editMenuData);

      if (editMenuName !== originalName) {
        delete updatedMenus[originalName];
      }

      updatedMenus[editMenuName] = editMenuData;
      localStorage.setItem("customMenus", JSON.stringify(updatedMenus));
      message.success(`Đã cập nhật menu "${editMenuName}"!`);
      setIsEditModalOpen(false);
      return updatedMenus;
    });
  };

  const handleDeleteMenu = (menuName) => {
    const confirmed = window.confirm(`Bạn có chắc muốn xóa menu "${menuName}" không?`);
    if (confirmed) {
      setSavedMenus((prev) => {
        const updatedMenus = { ...prev };
        delete updatedMenus[menuName];
        localStorage.setItem("customMenus", JSON.stringify(updatedMenus));
        return updatedMenus;
      });
      message.success(`Đã xóa menu "${menuName}"!`);
    }
  };

  const handleShowMenu = (menuName) => {
    setSelectedMenu({ name: menuName, data: savedMenus[menuName] });
    setIsShowModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-6 mb-4">
        <h2 className="text-xl font-semibold">Menu của tôi</h2>
        <CustomMenuComponent onMenuCreated={loadMenus} />
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {Object.entries(savedMenus).length === 0 && (
          <p>Chưa có menu cá nhân nào được lưu.</p>
        )}
        {Object.entries(savedMenus).map(([menuName, menuData]) => (
          <div key={menuName}>
            <div
              className="flex justify-center cursor-pointer"
              title={menuName}
              onClick={() => handleShowMenu(menuName)}
            >
              <MenuImageGrid items={menuData.items} />
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <h3 className="mb-2 font-semibold truncate">{menuName}</h3>
              <div className="relative group">
                <span className="cursor-pointer">
                  <EllipsisOutlined />
                </span>
                <div className="absolute right-0 flex-col hidden p-2 bg-white rounded-md shadow-lg top-6 group-hover:flex">
                  <button
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={() => handleEditMenu(menuName)}
                  >
                    <EditOutlined /> Sửa
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-1 text-sm text-red-700 rounded-md hover:bg-red-100"
                    onClick={() => handleDeleteMenu(menuName)}
                  >
                    <DeleteOutlined /> Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EditMenuComponent
        isOpen={isEditModalOpen}
        menuName={editMenuName}
        menuData={editMenuData}
        onClose={() => setIsEditModalOpen(false)}
        onUpdate={handleUpdateMenu}
        setMenuName={setEditMenuName}
        setMenuData={setEditMenuData}
      />

      <ShowItemMenuComponent
        isOpen={isShowModalOpen}
        selectedMenu={selectedMenu}
        onClose={() => setIsShowModalOpen(false)}
      />
    </>
  );
};

export default MenuPersonalComponent;
