import { Button, Radio } from "antd";
import React from "react";
import "../styles/cardItem.css";
import vndCurrencyFormat from '../../services/vndCurrencyFormat';
import { Link } from "react-router-dom";

const CardItem = () => {
  const testImg = process.env.PUBLIC_URL +
    "/images/affe90fa2f41fcf2f97a06621e784679.png"
  return (
    <div className="card-container">
      <div className="img-item-card-container">
        <Link to="hihi/detail">
          <img
            className="img-item-card"
            src={testImg}
            alt="img-item"
          />
        </Link>
      </div>
      <hr />
      <div className="info-card">
        <h3 className="item-name text-uppercase" >Shirt than 1.2 USS</h3>
        <div className="item-price">
          <span className="price">{vndCurrencyFormat(200000)}</span>
          <span className="pre-price">{vndCurrencyFormat(200000)}</span>
        </div>
        <div className="item-size">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">S</Radio.Button>
            <Radio.Button value="d">M</Radio.Button>
            <Radio.Button value="b">L</Radio.Button>
            <Radio.Button value="c">XL</Radio.Button>
          </Radio.Group>
          <Button className="btn-add">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
