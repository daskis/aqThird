import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/index.jsx";
import Infos from "../Pages/Infos/index.jsx";
import Employees from "../Pages/Employees/index.jsx";
import Auth from "../Pages/Auth/Auth.jsx";
import RoutingInfo from "../Pages/RoutingInfo/RoutingInfo.jsx";
import Analyzes from "../Pages/Analyzes/Analyzes.jsx";
const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/info" element={<Infos/>}></Route>
                <Route path="/info/:id" element={<RoutingInfo/>}></Route>
                <Route path="/employees" element={<Employees/>}></Route>
                <Route path="/auth" element={<Auth/>}></Route>
                <Route path="/analyzes" element={<Analyzes/>}></Route>
            </Routes>
    );
};

export default AppRoutes;