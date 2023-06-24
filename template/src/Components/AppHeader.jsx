import React from 'react';
import {Badge, Button, Image, Space, Typography} from "antd";
import {MailOutlined, BellFilled} from "@ant-design/icons"
import logo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom";
import Cookie from "js-cookie";
const AppHeader = () => {
    const navigate = useNavigate()
    return (
        <div className={"AppHeader"}>
            <Image width={40} src={logo}></Image>
            <Space>
                <Badge count={20} dot>
                    <MailOutlined style={{fontSize: 20}} />
                </Badge>
                <Badge count={20} dot>
                    <BellFilled style={{fontSize: 20}} />
                </Badge>
                {
                    Cookie.get("auth")
                    ?
                        <Button onClick={() => {
                            Cookie.remove("auth")
                            navigate("/auth")
                            setTimeout(() => {
                                window.location.reload();
                            }, 200)
                        }}>Выйти</Button>
                        :
                        <Button onClick={() => {
                            navigate("/auth")
                        }}>Вход</Button>
                }
            </Space>
        </div>
    );
};

export default AppHeader;