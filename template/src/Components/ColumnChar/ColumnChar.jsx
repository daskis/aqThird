import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ColumnChar = () => {
    const data = [
        {
            country: 'Здоровые',
            year: '1750',
            value: 502,
        },
        {
            country: 'Здоровые',
            year: '1800',
            value: 635,
        },
        {
            country: 'Здоровые',
            year: '1850',
            value: 809,
        },
        {
            country: 'Здоровые',
            year: '1900',
            value: 947,
        },
        {
            country: 'Здоровые',
            year: '1950',
            value: 1402,
        },
        {
            country: 'Здоровые',
            year: '1999',
            value: 3634,
        },
        {
            country: 'Здоровые',
            year: '2050',
            value: 5268,
        },
        {
            country: 'Уточнене',
            year: '1750',
            value: 106,
        },
        {
            country: 'Уточнене',
            year: '1800',
            value: 107,
        },
        {
            country: 'Уточнене',
            year: '1850',
            value: 111,
        },
        {
            country: 'Уточнене',
            year: '1900',
            value: 133,
        },
        {
            country: 'Уточнене',
            year: '1950',
            value: 221,
        },
        {
            country: 'Уточнене',
            year: '1999',
            value: 767,
        },
        {
            country: 'Уточнене',
            year: '2050',
            value: 1766,
        },
        {
            country: 'Заболевшие',
            year: '1750',
            value: 163,
        },
        {
            country: 'Заболевшие',
            year: '1800',
            value: 203,
        },
        {
            country: 'Заболевшие',
            year: '1850',
            value: 276,
        },
        {
            country: 'Заболевшие',
            year: '1900',
            value: 408,
        },
        {
            country: 'Заболевшие',
            year: '1950',
            value: 547,
        },
        {
            country: 'Заболевшие',
            year: '1999',
            value: 729,
        },
        {
            country: 'Заболевшие',
            year: '2050',
            value: 628,
        },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        isPercent: true,
        isStack: true,
        label: {
            position: 'middle',
            content: (item) => {
                return item.value.toFixed(2);
            },
            style: {
                fill: '#fff',
            },
        },
    };
    return <Column color={['#0ac704', '#e0ca00', '#b50707']} {...config} />;
};
export default ColumnChar;

