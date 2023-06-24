import React from 'react';
import {Bar} from "@ant-design/plots";

const BarChar = () => {
    const styles = {
        width: 800,
        height: 500
    }
    const data = [
        {
            name: 'Зеленый виноград',
            value: 38,
        },
        {
            name: 'Темный виноград',
            value: 52,
        },
        {
            name: 'Красный виноград',
            value: 42,
        }

    ];
    const config = {
        data,
        xField: 'value',
        yField: 'name',
        seriesField: 'name',
        legend: {
            position: 'top-left',
        },
    };
    return (
        <Bar style={styles} color={["#6B8E23", "#8A2BE2", "#8B0000"]} {...config} />
    );
};

export default BarChar;