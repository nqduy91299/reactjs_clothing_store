import React, { useState } from "react";
import "../styles/navbar.css";
import $ from "jquery";
import {
  HeartOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Col, Dropdown, Menu, Row, Space, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const isHomePage = useLocation().pathname === '/';
  const authOption = (
    <Menu>
      <Menu.Item key={"login"}>Login</Menu.Item>
      <Menu.Item key={"register"}>Register</Menu.Item>
    </Menu>
  );

  window.onscroll = () => {
    setTimeout(() => {
      if (window.pageYOffset > 30 && isHomePage) {
        if ($("header").hasClass("navbar-expand")) {
          $("header").removeClass("navbar-expand");
        }
      } else if (window.pageYOffset < 1 && isHomePage) {
        if (!$("header").hasClass("navbar-expand")) {
          $("header").addClass("navbar-expand");
        }
      }
    }, 250);
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className={isHomePage ? "navbar navbar-expand" : "navbar"}>
      <Row align="middle">
        <Col xs={0} sm={0} md={8} lg={8} xl={10} className="nav-option">
          hi
        </Col>
        <Col xs={10} sm={10} md={8} lg={8} xl={4} className="col-logo">
          <Link to="/">
            <span className="brand-logo">Simplest</span>
          </Link>
        </Col>
        <Col span={0}>
          <Button type="default" shape="circle" icon={<HomeOutlined />} />
          <Button type="default" shape="circle" icon={<InfoCircleOutlined />} />
        </Col>
        <Col
          xs={14}
          sm={14}
          md={8}
          lg={8}
          xl={10}
          align="end"
          className="nav-option"
        >
          <Space size="middle">
            <Badge className="badge-color" count={5}>
              <Tooltip placement="bottomRight" title={"Favorite"}>
                <Button
                  type="default"
                  shape="circle"
                  icon={<HeartOutlined />}
                />
              </Tooltip>
            </Badge>
            <Badge className="badge-color" count={5}>
              <Tooltip placement="bottomRight" title={"Cart"}>
                <Button
                  type="default"
                  shape="circle"
                  icon={<ShoppingCartOutlined />}
                  onClick={showDrawer}
                />
              </Tooltip>
            </Badge>

            <Dropdown overlay={authOption} placement="topLeft" arrow>
              <Button type="default" shape="circle" icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </Col>
      </Row>
      <CartDrawer visible={visible} onClose={onClose} />
    </header>
  );
};

export default Navbar;
