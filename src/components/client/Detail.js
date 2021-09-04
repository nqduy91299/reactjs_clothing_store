import '../styles/detail.css'
import vndCurrencyFormat from '../../services/vndCurrencyFormat';
import { Button, Col, Collapse, Image, InputNumber, Radio, Row } from 'antd';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Detail = () => {
    const { Panel } = Collapse;

    const testImg = process.env.PUBLIC_URL +
        "/images/affe90fa2f41fcf2f97a06621e784679.png"
    const testImg2 = process.env.PUBLIC_URL +
        "/images/79e3e693046ee1b24285a30d09b0aedc.png"
    const testImg3 = process.env.PUBLIC_URL +
        "/images/287ee56acca2faffbac12c671f90d3ae.png"
    const testImg4 = process.env.PUBLIC_URL +
        "/images/huongdanchonsize.jpg"

    return (
        <>
            <Navbar />
            <div className="body-container">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={14} xl={14} className="image-detail-container">
                        <Image src={testImg} />
                        <Image src={testImg2} />
                        <Image src={testImg3} />
                        <Image src={testImg} />
                        <Image src={testImg3} />
                        <Image src={testImg2} />
                        <Image src={testImg} />
                        <Image src={testImg2} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10} xl={10} className="info-product">
                        <h2 className="detail-item-name text-uppercase">Shirt than 1.2 USS</h2>
                        <div className="detail-item-price">{vndCurrencyFormat(200000)}</div>
                        <div className="detail-size-container">
                            <div className="detail-label text-uppercase">Sizes:</div>
                            <Radio.Group size="large" defaultValue="a" buttonStyle="solid" className="detail-size-select">
                                <Radio.Button value="a">S</Radio.Button>
                                <Radio.Button value="d">M</Radio.Button>
                                <Radio.Button value="b">L</Radio.Button>
                                <Radio.Button value="c">XL</Radio.Button>
                            </Radio.Group>
                        </div>
                        <div className="detail-quantity-container">
                            <div className="detail-label text-uppercase">Quantities:</div>
                            <InputNumber size="large" className="detail-input-quantity" min={1} max={99} defaultValue={1} />
                            <Button type="primary" className="text-uppercase" size="large" style={{ marginLeft: '15px' }}>Add to card</Button>
                        </div>
                        <div className="detail-description-container">
                            <div className="detail-label text-uppercase">Usual question</div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia iste ratione ipsam fugit temporibus minus assumenda delectus ea corporis voluptatum ipsa ex eligendi ducimus vitae, incidunt rerum amet! Est, facilis?</span>
                            </div>
                        </div>
                        <div className="detail-faq-container">
                            <div className="detail-label text-uppercase">Usual question</div>
                            <Collapse accordion className="collapse-custom">
                                <Panel header="How to select size?" key="1">
                                    <Image width={200} src={testImg4} />
                                </Panel>
                                <Panel header="Refund license" key="2">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsam doloribus quod sunt corporis, qui quo repellat expedita natus, accusamus libero blanditiis adipisci iste corrupti itaque omnis molestias doloremque eius?</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
}

export default Detail;
