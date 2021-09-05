import { Button, Col, InputNumber } from 'antd';
import React from 'react';
import '../styles/cartItem.css'
import { Select } from 'antd';
const CartItem = ({ image }) => {

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="cart-item">
            <img src={image} alt="item" />
            <div className="item-sub-part">
                <div className="item-name">
                    You don’t need to use the wordsssssssssssssssssssssssssssssss
                </div>
                <div className="input-cart-item-area">
                    <span>Size: </span>
                    <Select className="input-cart-item" defaultValue="XL" onChange={handleChange}>
                        <Option value="XL">XL</Option>
                        <Option value="L">L</Option>
                        <Option value="M">M</Option>
                        <Option value="S">S</Option>
                        <Option value="XS">XS</Option>
                    </Select>
                    <span style={{ paddingLeft: '20px' }}>Quantity: </span>
                    <InputNumber className="input-cart-item" min={1} max={99} defaultValue={3} />
                    <Button danger type="text" style={{ marginLeft: '20px', background: 'none' }}>
                        Delete
                    </Button>
                </div>
            </div>
        </Col>

    );
}

export default CartItem;
