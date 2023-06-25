import './App.css'
import {Button, Space} from "antd";
import AppHeader from "./components/AppHeader.jsx";
import AppSidebar from "./components/AppSidebar.jsx";
import AppContent from "./components/AppContent.jsx";
import AppFooter from "./components/AppFooter.jsx";
import classNames from "classnames";
import Cookie from "js-cookie";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./features/usersSlice.js";
import {ToastContainer} from "react-toastify";


function App() {


    return (
        <div className="App">
            <AppHeader/>
            <Space className={classNames({
                ["AppContentWrapper"] : Cookie.get("auth"),
                ["AppContentWrapperWithoutAuth"] : !Cookie.get("auth")
            })}>
                <AppSidebar></AppSidebar>
                <AppContent></AppContent>
            </Space>
            <AppFooter/>
            <ToastContainer style={{position: "absolute", bottom: 0, right: 0, left: "auto", top: "auto"}} />

        </div>
    )
}

export default App
