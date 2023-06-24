import {YMaps, Map, Polygon} from '@pbe/react-yandex-maps';
import React, {useEffect, useRef, useState} from "react";
import {Segmented} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setActive, setIsActive} from "../../features/infosSlice.js";
import classNames from "classnames";
import SideInfoMenu from "../SideInfoMenu/SideInfoMenu.jsx";

const BubleMap = () => {
    const [fillColor, setFillColor] = useState("#008000")
    const dispatch = useDispatch()
    const value = useSelector(state => state.infos.activeTab)
    const isActive = useSelector(state => state.infos.isActive)
    const polygons = [

        {
            "id": 1,
            "geometry": [
                [45.332309, 37.195143],
                [45.332864, 37.197568],
                [45.331123, 37.197398],
                [45.331341, 37.195016]
            ]
        },
        {
            "id": 2,
            "geometry": [
                [45.331233, 37.194995],
                [45.330980, 37.197457],
                [45.330545, 37.197436],
                [45.330179, 37.201188],
                [45.326577, 37.200812],
                [45.326636, 37.199311],
                [45.324825, 37.199086],
                [45.325329, 37.194344]
            ]
        },
        {
            "id": 3,
            "geometry": [
                [45.332897, 37.197777],
                [45.333898, 37.200990],
                [45.333825, 37.201595],
                [45.332166, 37.201442],
                [45.332516, 37.197718]
            ]
        },
        {
            "id": 4,
            "geometry": [
                [45.332384, 37.197743],
                [45.332043, 37.201422],
                [45.330348, 37.201235],
                [45.330667, 37.197577]
            ]
        },
        {
            "id": 5,
            "geometry": [
                [45.333872, 37.201821],
                [45.333634, 37.204296],
                [45.330104, 37.203914],
                [45.330334, 37.201496]
            ]
        },
        {
            "id": 6,
            "geometry": [
                [45.333637, 37.204431],
                [45.333374, 37.206813],
                [45.329849, 37.206405],
                [45.330091, 37.204017]
            ]
        },
        {
            "id": 7,
            "geometry": [
                [45.333320, 37.206945],
                [45.333001, 37.209425],
                [45.329633, 37.209075],
                [45.329814, 37.206605]
            ]
        },
        {
            "id": 8,
            "geometry": [
                [45.329604, 37.207802],
                [45.329434, 37.209873],
                [45.323883, 37.209252],
                [45.324078, 37.207146]
            ]
        },
        {
            "id": 9,
            "geometry": [
                [45.332940, 37.209632],
                [45.332587, 37.211979],
                [45.329373, 37.211703],
                [45.329629, 37.209217]
            ]
        },
        {
            "id": 10,
            "geometry": [
                [45.329385, 37.210046],
                [45.329215, 37.212030],
                [45.323688, 37.211461],
                [45.323895, 37.209424]
            ]
        },
        {
            "id": 11,
            "geometry": [
                [45.332610, 37.212185],
                [45.332282, 37.214222],
                [45.329158, 37.213951],
                [45.329361, 37.211827]
            ]
        },
        {
            "id": 12,
            "geometry": [
                [45.329225, 37.212209],
                [45.329072, 37.213951],
                [45.323477, 37.213552],
                [45.323694, 37.211571]
            ]
        }
    ]
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
    return (
        <div className="infosMenuWrapper">
            <Segmented options={['Почва', 'Вода', 'Воздух']} value={value} onChange={(e) => dispatch(setActive(e))}/>
            <YMaps

                query={{
                    apikey: "ac2b031c-025e-41d0-b2db-cc8dc8fdccc3"
                }}>
                <Map
                    onDoubleClick={handleDoubleClick}
                    width={"80vw"}
                    height={500}
                    defaultState={{
                        center: [45.323116, 37.223443],
                        zoom: 14
                    }}>
                    {polygons.map(item => {
                        return (
                            <Polygon
                                key={item.id}
                                onClick={(e) => {
                                    if (!isActive) {
                                        dispatch(setIsActive())
                                    }
                                }}
                                geometry={[item.geometry]}
                                options={{
                                    fillColor: fillColor,
                                    strokeColor: "#000",
                                    opacity: 0.3,
                                    strokeWidth: 5,
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
};
export default BubleMap;