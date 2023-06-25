import React, {useEffect, useState} from 'react';
import {ConfigProvider, Menu} from "antd";
import {AppstoreAddOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import Cookie from "js-cookie"
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../features/usersSlice.js";
const AppSidebar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    const [role, setRole] = useState()


    useEffect(() => {
        if (Cookie.get("auth")) {
            const id = Cookie.get("auth")
            dispatch(fetchUser(id))
        }
    }, [dispatch])

    useEffect(() => {
        if (user) {
            setRole(user.role)
        }
    }, [user])
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

                {role === "admin" &&
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
                            {
                                label: "Сотрудники",
                                key: "/employees",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Ожидаемые изменения",
                                key: "/changes",
                                icon: <AppstoreAddOutlined/>
                            },
                        ]}>

                    </Menu>
                }
                {role === "manager" &&
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
                                label: "Информация о анализах",
                                key: "/analyzes",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Сотрудники",
                                key: "/employees",
                                icon: <AppstoreAddOutlined/>
                            },
                            {
                                label: "Ожидаемые изменения",
                                key: "/changes",
                                icon: <AppstoreAddOutlined/>
                            },
                        ]}>

                    </Menu>
                }
                {role === "laboratory" &&
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
                            {
                                label: "Создать новый анализ",
                                key: "/new",
                                icon: <AppstoreAddOutlined/>
                            },

                        ]}>

                    </Menu>
                }
                {role === "worker" &&
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