import React from "react";
import '../styles/trackingOrder.css'
import { Col, Input, Row, Steps } from "antd";
import {
    CarOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    FileDoneOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OrderPurchase from "./OrderPurchase";

const TrackingOrder = () => {
    const { Search } = Input;
    const { Step } = Steps;


    return (
        <>
            <Navbar />

            <div className="body-container">
                <Row gutter={[0, 32]} justify="center">
                    <Col xs={24} sm={24} md={20} lg={18} xl={18} >
                        <div className="search-order-area">
                            <Search placeholder="input search text" style={{ width: '100%' }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={20} lg={18} xl={18} >
                        <div>
                            <h1>
                                Tracking Your Order
                            </h1>
                        </div>
                        <Steps current={3} status="error">
                            <Step title="Login" icon={<FileDoneOutlined />} />
                            <Step title="Verification" icon={<CheckCircleOutlined />} />
                            <Step title="Pay" icon={<CarOutlined />} />
                            <Step
                                title="Done"
                                icon={<SmileOutlined />}
                            />
                            <Step title="Cancel" icon={<CloseCircleOutlined />} />
                        </Steps>
                        <div className="detail-container">
                            <h3>Detail information</h3>
                            <p>Full name:</p>
                            <p>Phone:</p>
                            <p>Email:</p>
                            <p>Address:</p>
                        </div>

                        <div>
                            <OrderPurchase />
                        </div>
                    </Col>

                </Row>


            </div>
            <Footer />
        </>

    );
};

export default TrackingOrder;
