import './App.css'
import {Button, Space} from "antd";
import AppHeader from "./components/AppHeader.jsx";
import AppSidebar from "./components/AppSidebar.jsx";
import AppContent from "./components/AppContent.jsx";
import AppFooter from "./components/AppFooter.jsx";
import classNames from "classnames";
import Cookie from "js-cookie";
import {useEffect} from "react";


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
        </div>
    )
}

export default App
