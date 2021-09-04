import React from "react";
import "../styles/toolbarItem.css";
import { Select } from "antd";
const { Option } = Select;

const Toolbar = () => {
    const optionsSort = [
        { value: 0, option: "Newest" },
        { value: 1, option: "Most popular" },
        { value: 2, option: "Price Ascending" },
        { value: 3, option: "Price Descending" },
    ];
    return (
        <div className="toolbar">
            <span className="total-item">Total: 100 items</span>
            <div>
                <span style={{ paddingRight: "5px" }}>Sort by: </span>
                <Select defaultValue={optionsSort[0].value} className="select-sort">
                    {optionsSort.map((option) => (
                        <Option key={option.value} value={option.value}>
                            {option.option}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default Toolbar;
