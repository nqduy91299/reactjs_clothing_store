import { Col, Row } from 'antd';
import React from 'react';
import '../styles/cartItem.css'
const CartItem = ({ image }) => {


    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="cart-item">
                <Row>
                    <Col className="pre-cart-item" xs={16} sm={16} md={16} lg={16} xl={18}>
                        <img src={image} alt="image-item" />
                        <div>
                            <span>
                                You don’t need to use the words
                            </span>
                        </div>
                    </Col>
                </Row>

            </div>
        </Col>

    );
}

export default CartItem;
