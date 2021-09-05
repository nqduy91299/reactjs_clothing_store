import { Button, Result } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

const SuccessModal = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    // var isModalVisible = true


    // const handleOk = () => {
    //     setIsModalVisible(false);
    //     // isModalVisible = false
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
        // isModalVisible = false
    };

    return (
        <Modal centered title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
            <Result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Button type="primary" key="console">
                        Go Console
                    </Button>,
                    <Button key="buy">Buy Again</Button>,
                ]}
            />,
        </Modal>
    );
}

export default SuccessModal;
