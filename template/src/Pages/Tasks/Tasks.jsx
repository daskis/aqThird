import React, {useEffect} from 'react';
import {Card, Space, Typography} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const {Title, Text} = Typography
import {red, green} from "@ant-design/colors"
import {useDispatch, useSelector} from "react-redux";
import {fetchGetData} from "../../features/tasksSlice.js";
import Cookie from "js-cookie";

const Tasks = () => {
    const styles = {
        width: "70vw",
        height: 200,
        margin: 20,

    }


    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch();


    useEffect(() => {
        const id = Cookie.get("auth")
        dispatch(fetchGetData(id));
    }, [dispatch])

    return (
        <div>
            <Card title={
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Title style={{margin: 0}} level={4}>Имя задачи</Title>
                    <Space size={14}>
                        <CloseOutlined style={{fontSize: 24, color: red[7], cursor: "pointer"}}/>
                        <CheckOutlined style={{fontSize: 24, color: green[7], cursor: "pointer"}}/>
                    </Space>
                </div>
            } bordered={true} style={styles}>
                {tasks &&
                    <div style={{display: "flex", flexDirection: "column", fontSize: 30, gap: 14}}>
                        <Text></Text>
                        <Text>Доп. инфо</Text>
                    </div>
                }
            </Card>
        </div>
    );
};

export default Tasks;