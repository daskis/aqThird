import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/index.jsx";
import Executors from "../Pages/Executors/index.jsx";
import Inventory from "../Pages/Inventory/index.jsx";
import Orders from "../Pages/Orders/index.jsx";
import Infos from "../Pages/Infos/index.jsx";
import Employees from "../Pages/Employees/index.jsx";
import Auth from "../Pages/Auth/Auth.jsx";
import RoutingInfo from "../Pages/RoutingInfo/RoutingInfo.jsx";
const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/inventory" element={<Inventory/>}></Route>
                <Route path="/info" element={<Infos/>}></Route>
                <Route path="/info/:id" element={<RoutingInfo/>}></Route>
                <Route path="/orders" element={<Orders/>}></Route>
                <Route path="/executors" element={<Executors/>}></Route>
                <Route path="/employees" element={<Employees/>}></Route>
                <Route path="/auth" element={<Auth/>}></Route>
            </Routes>
    );
};

export default AppRoutes;