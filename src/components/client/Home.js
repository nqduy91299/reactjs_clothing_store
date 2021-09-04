import React from 'react';
import CardItem from "./CardItem";
import MenuCategory from "./MenuCategory";
import Toolbar from "./Toolbar";
import { Col, Row } from "antd";
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const a = [
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
        <CardItem />,
    ];
    return (
        <>
            <Navbar />

            <MenuCategory />

            <div className="body-container" style={{ paddingTop: '0' }}>
                <Toolbar />
                <Row gutter={[16, 16]} align="middle">
                    {a.map((element, index) => (
                        <Col key={index} xs={12} sm={12} md={8} lg={6} xl={6}>
                            {element}
                        </Col>
                    ))}
                </Row>
            </div>

            <Footer />
        </>
    );
}

export default Home;
