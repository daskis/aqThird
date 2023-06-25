import React, {useState} from 'react';
import {Button, ConfigProvider, Select, Space, TreeSelect, Typography} from "antd";
import {Column, Line} from "@ant-design/plots";

const {Text, Title} = Typography
const {Option} = Select
const Changes = () => {
    const styles = {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    }
    const stylesBar = {
        width: "70vw",
        height: 500,
        padding: "40px 0",

    }
    const data = [
        {
            date: '1991-12-1',
            value: 40,
        },
        {
            date: '1991-12-2',
            value: 53,
        },
        {
            date: '1991-12-3',
            value: 54,
        },
        {
            date: '1991-12-4',
            value: 32,
        },
        {
            date: '1991-12-5',
            value: 45,
        },
        {
            date: '1991-12-6',
            value: 44,
        },
        {
            date: '1991-12-7',
            value: 53,
        },
        {
            date: '1991-12-8',
            value: 13,
        },
        {
            date: '1991-12-9',
            value: 23,
        },
    ];
    const [firstValues, setFirstValues] = useState()
    const [secondValues, setSecondValues] = useState()
    const [isActive, setisActive] = useState(false)
    const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const secondArr = ['Урожайность', 'Болезни', 'Рост', 'Вредители']
    const config = {
        data,
        xField: 'date',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };


    const setHandler = () => {
        if (firstValues, secondValues) {
            setisActive(true)
        }
    }

    return (
        <div style={styles}>
            <Title level={3}>Выберите сектор и прогноз</Title>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#00b96b"
                    }
                }}
            >
                <Space>

                    <Select
                        value={firstValues}
                        onSelect={setFirstValues}
                        style={{width: 200}}>
                        {firstArr.map(item => (
                            <Option key={item} value={item}>{item}</Option>
                        ))}
                    </Select>
                    <Select
                        value={secondValues}
                        onSelect={setSecondValues}
                        style={{width: 200}}>
                        {secondArr.map(item => (
                            <Option key={item} value={item}>{item}</Option>
                        ))}
                    </Select>


                    <Button onClick={setHandler} type="primary">Показать результаты</Button>
                </Space>
            </ConfigProvider>


            {isActive &&
                <Line style={{width: "70vw"}} {...config} />
            }
        </div>
    );
};

export default Changes;