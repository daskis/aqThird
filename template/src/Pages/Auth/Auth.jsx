import React, {useEffect, useState} from 'react';
import {Button, Select, Space, Typography} from "antd";
import Cookie from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../features/usersSlice.js";
import Title from "antd/es/typography/Title.js";

const {Option} = Select
const Auth = () => {
    const navigate = useNavigate()
    const data = useSelector(state => state.users.data);
    const dispatch = useDispatch();
    const [name, setName] = useState()

    useEffect(() => {
        dispatch(fetchUsers());

    }, [dispatch]);


    const handleAuth = () => {
        if (name) {
            Cookie.set("auth", `${name}`)
            navigate("/")
            setTimeout(() => {
                window.location.reload()
            }, 100)
        }
    }
    return (
        <div className={"form"}>
            {
                Cookie.get("auth") ?
                    <Space>
                        <Typography.Title>Вы уже вошли</Typography.Title>
                    </Space>
                    :
                    <div style={{width: "300px", display: "flex", flexDirection: "column", gap: 20}}>
                        <Title>Вход</Title>
                        <Select
                            onSelect={setName}>
                            {data && data.map(item => {
                                return (
                                    <Option key={item.id}
                                            value={item.id}>{`${item.name} ${item.surname} (${item.role})`}</Option>
                                )
                            })}
                        </Select>
                        <Button size={"large"} onClick={handleAuth} type="primary">Войти</Button>
                    </div>
            }
        </div>
    );
};

export default Auth;