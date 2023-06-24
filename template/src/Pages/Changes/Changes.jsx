import React, {useState} from 'react';
import {Select, Typography} from "antd";
import {Column} from "@ant-design/plots";
const {Text, Title} = Typography
const {Option} = Select
const Changes = () => {
    const styles = {
        padding: 20,
        display: "flex",
        flexDirection: "column"
    }
    const stylesBar = {
        width: "70vw",
        height: 500,
        padding: "40px 0"
    }
    const predict = ["Урожайность", "Болезни"]
    const [value, setValue] = useState()

    const data = [
        {
            type: '2023-06-01',
            sales: 38,
        },
        {
            type: 'хуй 12023-06-01',
            sales: 52,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'bottom',
            style: {
                fill: '#FFFFFF',
                opacity: 0.8,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };


    return (
        <div style={styles}>
            <Title level={3}>Выберите тип прогноза</Title>
            <Select
                onChange={setValue}
                style={{ width: 200 }}
                value={value}
            >
                {predict.map(item => (
                    <Option key={item} value={item}>{item}</Option>
                ))}
            </Select>
            {value &&
                <Column style={stylesBar} {...config} />
            }
        </div>
    );
};

export default Changes;