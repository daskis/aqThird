import React from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SideInfoMenu = () => {
    const isActive = useSelector(state => state.infos.isActive)
    return (
        <div className={classNames({
            ["disabled"]: !isActive,
            ["infosMenu"]: isActive,
        })}>
            <Link to={"/info/1"} com>Клик</Link>
        </div>
    );
};

export default SideInfoMenu;