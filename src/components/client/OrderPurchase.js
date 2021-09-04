import { Statistic, Table } from 'antd';
import React from 'react';
import '../styles/orderPurchase.css'
const OrderPurchase = () => {
    const transformMoney = (price) => <Statistic groupSeparator="." value={price} suffix="VND" />

    const columnPrice = [{
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: transformMoney
    }]
    const columnData = [
        {
            title: 'Items',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'Temp price',
            dataIndex: 'priceTmp',
            key: 'priceTmp',
            render: transformMoney
        },
    ];

    const data = [
        {
            key: '1',
            item: 'John Brown s sad asd as das dasd sad asd  asd asd asd sa sda d asd as das sd',
            priceTmp: '700000',
        },
        {
            key: '2',
            item: 'Jim Green',
            priceTmp: '700000',
        },
        {
            key: '3',
            item: 'Joe Black',
            priceTmp: '700000',
        },
    ];
    return (
        <div className="order-purchase-container">
            <Table columns={columnData} dataSource={data} pagination={{ position: ['none', 'none'] }} />
            <Table
                className="table-price"
                showHeader={false}
                columns={
                    columnPrice
                }
                dataSource={[
                    {
                        key: '1',
                        title: 'Delivery Price',
                        price: '700000',
                    },
                    {
                        key: '2',
                        title: 'Total Price',
                        price: '700000',
                    }
                ]}
                pagination={{ position: ['none', 'none'] }}
            />
        </div>
    );
}

export default OrderPurchase;
