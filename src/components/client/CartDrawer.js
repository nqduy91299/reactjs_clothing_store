import { Button, Drawer, Row } from 'antd';
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
            width={600}
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button danger>Clear All</Button>
                    <Button type='primary' disabled>Save Change</Button>
                    <Button type='primary'>Purchase</Button>
                </div>
            }
        >
            <Row gutter={[0, 12]}>
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
                <CartItem image={testImg} />
            </Row>
        </Drawer>
    );
}

export default CartDrawer;
