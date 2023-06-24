import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChar = () => {
    const styles = {
        width: 800,
        height: 500
    }
    const data = [
        {
            type: 'Заболевшие растения',
            value: 27,
        },
        {
            type: 'Растения с проблемами',
            value: 13,
        },
        {
            type: 'Здоровые растения',
            value: 30,
        },
        {
            type: 'Готовые к сбору',
            value: 10,
        },

    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie style={styles} color={["#DC143C", "#CD5C5C", "#2E8B57", "#4682B4"]} {...config} />;
};
export default PieChar;