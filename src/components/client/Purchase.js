import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { Col, Row } from 'antd';
import FormPurchase from './FormPurchase';
import OrderPurchase from './OrderPurchase';
import SuccessModal from '../commons/SuccessModal';

const Purchase = () => {
    return (
        <>
            <Navbar />
            <div className="body-container">
                <Row gutter={[24, 16]} justify="center">
                    <Col xs={24} sm={24} md={12} lg={12} xl={10} >
                        <h1 className="text-uppercase">Payment and delivery</h1>
                        <FormPurchase align="center" />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                        <h1 className="text-uppercase" align="center">Your order</h1>
                        <OrderPurchase />
                    </Col>
                </Row>
            </div>
            <Footer />
            <SuccessModal />
        </>
    );
}

export default Purchase;
