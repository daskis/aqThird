import {YMaps, Map, Polygon, Placemark} from '@pbe/react-yandex-maps';
import React, {Fragment, useEffect, useRef, useState} from "react";
import {Segmented} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfos, setActive, setCommonInfo, setIsActive} from "../../features/infosSlice.js";
import SideInfoMenu from "../SideInfoMenu/SideInfoMenu.jsx";
import {fetchSectors} from "../../features/sectorsSlice.js";

const BubleMap = () => {
    const [fillColor, setFillColor] = useState("#008000")
    const dispatch = useDispatch()
    const value = useSelector(state => state.infos.activeTab)
    const isActive = useSelector(state => state.infos.isActive)
    const data = useSelector(state => state.infos.data)


    const dataSectors = useSelector(state => state.sectors.data)

    useEffect(() => {
        dispatch(fetchSectors())
        if (dataSectors) {
            console.log(dataSectors)
        }
    }, [dispatch])


    const shadesOfGreen = [
        '#00FF00',
        '#00E200',
        '#00C500',
        '#00A800',
        '#008B00',
        '#006E00',
        '#005100',
        '#003400',
        '#001700',
        '#000000',
        '#1C1C1C',
        '#393939'
    ];

    const shadesOfBlue = [
        '#0000FF',
        '#0000EE',
        '#0000DD',
        '#0000CC',
        '#0000BB',
        '#0000AA',
        '#000099',
        '#000088',
        '#000077',
        '#000066',
        '#000055',
        '#000044'
    ];


    function findCenter(coordinates) {
        let sumX = 0;
        let sumY = 0;

        for (let i = 0; i < coordinates.length; i++) {
            sumX += coordinates[i][0]; // Суммируем координаты X
            sumY += coordinates[i][1]; // Суммируем координаты Y
        }

        const centerX = sumX / coordinates.length; // Среднее арифметическое координат X
        const centerY = sumY / coordinates.length; // Среднее арифметическое координат Y

        return [centerX, centerY]; // Возвращаем центр фигуры в виде массива координат [X, Y]
    }

    const shadesOfWhite = [
        '#F8F8F8',
        '#E7E7E7',
        '#D6D6D6',
        '#C5C5C5',
        '#B4B4B4',
        '#A3A3A3',
        '#929292',
        '#818181',
        '#707070',
        '#5F5F5F',
        '#4E4E4E',
        '#3D3D3D'
    ];
    const shadesOfRed = [
        "#FFCCCC",
        "#FFB2B2",
        "#FF9999",
        "#FF7F7F",
        "#FF6666",
        "#FF4C4C",
        "#FF3333",
        "#FF1919",
        "#FF0000",
        "#E60000",
        "#CC0000",
        "#B30000"
    ];


    const handleButtonClick = (item) => {
        dispatch(fetchInfos(item.grape))
        dispatch(setCommonInfo(item))
    }

    const handleDoubleClick = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        switch (value) {
            case "Вода":
                setFillColor("#20B2AA")
                break
            case "Почва":
                setFillColor("#008000")
                break
            case "Воздух":
                setFillColor("#7FFFD4")
                break
        }
    }, [dispatch, value])
    if (dataSectors) {
        switch (value) {
            case "Вода":
                return (
                    <div className="infosMenuWrapper">
                        <Segmented options={['Почва', 'Вода', 'Воздух', 'Болезни']} value={value}
                                   onChange={(e) => dispatch(setActive(e))}/>
                        <YMaps
                            query={{
                                apikey: "ac2b031c-025e-41d0-b2db-cc8dc8fdccc3"
                            }}>
                            <Map
                                onDoubleClick={handleDoubleClick}
                                width={"78vw"}
                                height={500}
                                defaultState={{
                                    center: [45.330548, 37.204131],
                                    zoom: 15
                                }}>
                                {dataSectors.map((item, i) => {
                                    return (
                                        <Fragment key={item.id}>
                                            <Polygon
                                                onClick={(e) => {
                                                    if (!isActive) {
                                                        handleButtonClick(item)
                                                        dispatch(setIsActive())
                                                    }
                                                }}
                                                geometry={[item.coordinates]}
                                                options={{
                                                    fillColor: shadesOfBlue[i],
                                                    strokeColor: "#000",
                                                    opacity: 0.3,
                                                    strokeWidth: 2,
                                                    strokeStyle: "shortdash",
                                                    iconContent: `${i + 1}`, // Цифра внутри полигона
                                                    iconColor: 'red', // Цвет значка
                                                }}
                                            />
                                        </Fragment>
                                    )
                                })}

                            </Map>
                        </YMaps>
                        <SideInfoMenu/>
                    </div>

                )
                break
            case "Почва":
                return (
                    <div className="infosMenuWrapper">
                        <Segmented options={['Почва', 'Вода', 'Воздух', 'Болезни']} value={value}
                                   onChange={(e) => dispatch(setActive(e))}/>
                        <YMaps
                            query={{
                                apikey: "ac2b031c-025e-41d0-b2db-cc8dc8fdccc3"
                            }}>
                            <Map
                                onDoubleClick={handleDoubleClick}
                                width={"78vw"}
                                height={500}
                                defaultState={{
                                    center: [45.330548, 37.204131],
                                    zoom: 15
                                }}>
                                {dataSectors.map((item, i) => {
                                    return (
                                        <Polygon
                                            key={item.id}
                                            onClick={(e) => {
                                                if (!isActive) {
                                                    handleButtonClick(item)
                                                    dispatch(setIsActive())
                                                }
                                            }}
                                            geometry={[item.coordinates]}
                                            options={{
                                                fillColor: shadesOfGreen[i],
                                                strokeColor: "#000",
                                                opacity: 0.3,
                                                strokeWidth: 2,
                                                strokeStyle: "shortdash",

                                            }}
                                        />
                                    )
                                })}

                            </Map>
                        </YMaps>
                        <SideInfoMenu/>
                    </div>

                )
                break
            case "Воздух":
                return (
                    <div className="infosMenuWrapper">
                        <Segmented options={['Почва', 'Вода', 'Воздух', 'Болезни']} value={value}
                                   onChange={(e) => dispatch(setActive(e))}/>
                        <YMaps
                            query={{
                                apikey: "ac2b031c-025e-41d0-b2db-cc8dc8fdccc3"
                            }}>
                            <Map
                                onDoubleClick={handleDoubleClick}
                                width={"78vw"}
                                height={500}
                                defaultState={{
                                    center: [45.330548, 37.204131],
                                    zoom: 15
                                }}>
                                {dataSectors.map((item, i) => {
                                    return (
                                        <Polygon
                                            key={item.id}
                                            onClick={(e) => {
                                                if (!isActive) {
                                                    handleButtonClick(item)
                                                    dispatch(setIsActive())
                                                }
                                            }}
                                            geometry={[item.coordinates]}
                                            options={{
                                                fillColor: shadesOfWhite[i],
                                                strokeColor: "#000",
                                                opacity: 0.4,
                                                strokeWidth: 2,
                                                strokeStyle: "shortdash",

                                            }}
                                        />
                                    )
                                })}

                            </Map>
                        </YMaps>
                        <SideInfoMenu/>
                    </div>

                )
                break
            case "Болезни":
                return (
                    <div className="infosMenuWrapper">
                        <Segmented options={['Почва', 'Вода', 'Воздух', 'Болезни']} value={value}
                                   onChange={(e) => dispatch(setActive(e))}/>
                        <YMaps
                            query={{
                                apikey: "ac2b031c-025e-41d0-b2db-cc8dc8fdccc3"
                            }}>
                            <Map
                                onDoubleClick={handleDoubleClick}
                                width={"78vw"}
                                height={500}
                                defaultState={{
                                    center: [45.330548, 37.204131],
                                    zoom: 15
                                }}>
                                {dataSectors.map((item, i) => {
                                    return (
                                        <Polygon
                                            key={item.id}
                                            onClick={(e) => {
                                                if (!isActive) {
                                                    handleButtonClick(item)
                                                    dispatch(setIsActive())
                                                }
                                            }}
                                            geometry={[item.coordinates]}
                                            options={{
                                                fillColor: shadesOfRed[i],
                                                strokeColor: "#000",
                                                opacity: 0.5,
                                                strokeWidth: 2,
                                                strokeStyle: "shortdash",

                                            }}
                                        />
                                    )
                                })}

                            </Map>
                        </YMaps>
                        <SideInfoMenu/>
                    </div>

                )
                break
        }

    }
};
export default BubleMap;