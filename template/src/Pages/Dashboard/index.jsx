import React, {useState} from 'react';
import {Segmented, Typography} from "antd";
import {Bar, Pie} from '@ant-design/plots';
import BarChar from "../../Components/BarChar/BarChar.jsx";
import PieChar from "../../Components/PieChar/PieChar.jsx";
import Title from "antd/es/typography/Title.js";
import ColumnChar from "../../Components/ColumnChar/ColumnChar.jsx";
import LineChar from "../../Components/LineChar/LineChar.jsx";
import YieldChar from "../../Components/YieldChar/YieldChar.jsx";


const Dashboard = () => {
    const [value, setValue] = useState("Общая статистика")

    const styles = {
        width: 800,
        height: 600
    }

    return (
        <div style={{display: "flex", alignItems: "flex-start", flexDirection: "column", gap: "20px", padding: 20}}>
            <Segmented options={['Общая статистика', 'История температуры', "Прогноз урожайности"]} value={value}
                       onChange={setValue}/>

            {value === "Общая статистика"
            &&
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    <div>
                        <Title style={{textAlign: "center"}} level={4}>Общая информация по секторам</Title>
                        <PieChar />
                    </div>
                    <div>
                        <Title style={{textAlign: "center"}} level={4}>Информация по для каждого сектора</Title>
                        <ColumnChar/>
                    </div>
                </div>
            }
            {value === "История температуры" &&
                <div style={{width: "70vw"}}>
                    <LineChar />

                </div>
            }
            {
                value === "Прогноз урожайности"
                &&
                <div style={{width: "70vw"}}>
                    <YieldChar />

                </div>
            }
        </div>
    );
};

export default Dashboard;