import React from 'react';
import {ConfigProvider, Menu} from "antd";
import {AppstoreAddOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import Cookie from "js-cookie"
const AppSidebar = () => {
    const navigate = useNavigate()
    return (
        <div className={classNames( {
            ["disabled"] : !Cookie.get("auth"),
            ["AppSidebar"] : Cookie.get("auth")
        })}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#00b96b"
                    }
                }}
            >

                {Cookie.get("auth") === "first" &&
                    <Menu
                        onClick={(item => {
                            navigate(item.key)
                        })}
                        items={[
                            {
                                label: "Статистика",
                                key: "/",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Информация о участках",
                                key: "/info",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Исполнители",
                                key: "/executors",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Сотрудники",
                                key: "/employees",
                                icon: <AppstoreAddOutlined/>
                            },
                        ]}>

                    </Menu>
                }
                {Cookie.get("auth") === "second" &&
                    <Menu
                        onClick={(item => {
                            navigate(item.key)
                        })}
                        items={[
                            {
                                label: "Статистика",
                                key: "/",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Информация о участках",
                                key: "/info",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Информация о анализах",
                                key: "/analyzes",
                                icon: <AppstoreAddOutlined/>
                            },

                        ]}>

                    </Menu>
                }
                {Cookie.get("auth") === "third" &&
                    <Menu
                        onClick={(item => {
                            navigate(item.key)
                        })}
                        items={[
                            {
                                label: "Информация о участках",
                                key: "/info",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Сообщения",
                                key: "/messages",
                                icon: <AppstoreAddOutlined/>
                            }

                        ]}>

                    </Menu>
                }
            </ConfigProvider>
        </div>
    );
};

export default AppSidebar;