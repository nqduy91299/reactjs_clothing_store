import { Col, Drawer, Row, Space } from 'antd';
import React from 'react';
import CartItem from './CartItem';

const CartDrawer = ({ visible, onClose }) => {
    const testImg = process.env.PUBLIC_URL +
        "/images/affe90fa2f41fcf2f97a06621e784679.png"
    return (
        <Drawer
            title="Cart"
            placement="right"
            closable={false}
            onClose={() => onClose()}
            visible={visible}
        >
            {/* <Space direction="vertical" size={10}>
                <CartItem image={testImg} />
                <CartItem image={testImg} />
            </Space> */}
            <Row>

                <CartItem image={testImg} />
            </Row>
        </Drawer>
    );
}

export default CartDrawer;
