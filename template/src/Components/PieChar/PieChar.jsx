import React, {useState, useEffect, useRef} from 'react';
import {G2, Pie} from '@ant-design/plots';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setActive} from "../../features/infosSlice.js";

const PieChar = () => {
    const G = G2.getEngine('canvas');
    const navigate = useNavigate()
    const chartRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current.chart;

            const handleItemClick = (ev) => {

                const type = ev.data.data;
                navigateTo(type.type)
                // Дополнительная логика при клике на сектор
            };

            chartInstance.on('element:click', handleItemClick);
        }
    }, []);
    const styles = {
        width: 600,
    }
    const data = [
        {
            type: 'Заболевшие',
            value: 12,
        },
        {
            type: 'С проблемами',
            value: 13,
        },
        {
            type: 'Здоровые',
            value: 50,
        },

    ];
    const navigateTo = (type) => {
            switch (type) {
                case "Заболевшие":
                    navigate("/info");
                    dispatch(setActive("Болезни"))
                    break
                case "С проблемами":
                    navigate("/info");
                    dispatch(setActive("Болезни"))
                    break
                case "Здоровые":
                    navigate("/info");
                    dispatch(setActive("Почва"))
                    break
            }
    }
    const handleItemClick = (ev) => {
        console.log('Clicked sector:', ev.data);
        // Дополнительная логика при клике на сектор
    };
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} chartRef={chartRef} onSliceClick={handleItemClick} angleField="value" colorField="type" style={styles} color={['#b50707', '#e0ca00', '#0ac704']}  />;
};
export default PieChar;