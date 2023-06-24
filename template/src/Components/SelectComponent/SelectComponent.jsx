import React from 'react';
import {Select} from "antd";

const SelectComponent = () => {
    const options = [];
    for (let i = 1; i <= 20; i++) {
        options.push({
            value: i.toString(),
            label: i.toString(),
        });
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <Select
            mode="tags"
            style={{
                width: '200px',
            }}
            placeholder="Выберите сектор"
            onChange={handleChange}
            options={options}
        />
    );
};

export default SelectComponent;