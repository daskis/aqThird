import React from 'react';
import {Button, Space, Typography} from "antd";
import Cookie from "js-cookie";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    const selectAuth = (type) => {
        switch (type) {
            case "first":
                Cookie.set("auth", "first")
                navigate("/")
                window.location.reload();
                break;
            case "second":
                Cookie.set("auth", "second")
                navigate("/")
                window.location.reload();
                break;
            case "third":
                Cookie.set("auth", "third")
                navigate("/")
                window.location.reload();
                break;
            default:
                break;
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
                    <>
                        <Button onClick={() => selectAuth("first")} type="primary">Войти на главный миньон (прораб)</Button>
                        <Button onClick={() => selectAuth("second")} type="primary">Войти на миньон поменьше (чел из лабы)</Button>
                        <Button onClick={() => selectAuth("third")} type="primary">Войти на самый маленький миньон (раб)</Button>
                    </>
            }
        </div>
    );
};

export default Auth;