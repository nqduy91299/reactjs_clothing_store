import React from 'react';
import '../styles/formPurchase.css'

import { Button, Form, Input, Select } from 'antd';

const FormPurchase = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <Form
            name="basic"
            labelCol={{
                span: 21,
            }}
            wrapperCol={{
                span: 21,
            }}
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                label="Full name"
                name="fullname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone number"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}

            >
                <Input addonBefore={<span>VN (+84)</span>} />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
            >
                <Form.Item noStyle
                    name='province'
                    label="City / Province"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Select placeholder="City / Province" style={{ width: '32%', marginRight: "2%" }}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item noStyle
                    name='district'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Select disabled={Form.pro} placeholder="District" style={{ width: '32%', marginRight: "2%" }}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item noStyle
                    name='ward'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Select placeholder="Ward" style={{ width: '32%' }}>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <div className="purchase-action">
                    <Button style={{ width: '200px', height: '70px' }} >Continue shopping</Button>
                    <Button style={{ width: '200px', height: '70px' }} type="primary">Purchase</Button>
                </div>
            </Form.Item>


        </Form>
    );
}

export default FormPurchase;
