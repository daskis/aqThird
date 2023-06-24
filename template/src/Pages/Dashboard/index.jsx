import React, {useState} from 'react';
import {Segmented, Typography} from "antd";
import {Bar, Pie} from '@ant-design/plots';
import BarChar from "../../Components/BarChar/BarChar.jsx";
import PieChar from "../../Components/PieChar/PieChar.jsx";


const Dashboard = () => {
    const [value, setValue] = useState("Общая статистика")

    const styles = {
        width: 800,
        height: 600
    }

    return (
        <div>
            <Segmented options={['Общая статистика', 'Статистика урожайности']} value={value}
                       onChange={setValue}/>

            {value === "Общая статистика"
            ?
                <PieChar />
            :
                <BarChar />
            }
        </div>
    );
};

export default Dashboard;