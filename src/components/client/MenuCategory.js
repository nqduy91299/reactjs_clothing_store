import { Menu } from "antd";
import React, { useState } from "react";
import "../styles/menuCategory.css";
import testImg from "./pexels-christian-heitz-842711.jpg";

const MenuCategory = () => {
  const categoryList = [
    { key: "all", name: "All items", category: 0 },
    { key: "denim", name: "Denims", category: 1 },
    { key: "jacket", name: "Jackets", category: 2 },
    { key: "t-shirt", name: "T-Shirts", category: 3 },
  ];

  const [selected, setSelected] = useState(categoryList[0]);

  const handleMenuSelected = (selected) => {
    const selectedMenu = categoryList.find((el) => el.key === selected.key);
    setSelected((preSelect) => {
      if (preSelect.key !== selected.key) {
        return selectedMenu;
      }
      return preSelect;
    });
  };

  return (
    <div
      className="menu-category-container"
      style={{ backgroundImage: `url(${testImg})` }}
    >
      <div className="text-uppercase sub-category">
        <span>
          {selected.name}
        </span>
      </div>
      <div className="menu-category-bar">
        <Menu
          selectedKeys={[selected.key]}
          mode="horizontal"
          className="menu-category"
        >
          {categoryList.map((element) => (
            <Menu.Item key={element.key} onClick={handleMenuSelected}>
              {element.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default MenuCategory;
