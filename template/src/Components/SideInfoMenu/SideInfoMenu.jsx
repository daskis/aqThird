import React from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CloseOutlined} from "@ant-design/icons";
import {setIsActive} from "../../features/infosSlice.js";
const SideInfoMenu = () => {
    const isActive = useSelector(state => state.infos.isActive)
    const dispatch = useDispatch()

    return (
        <div className={classNames({
            ["disabled"]: !isActive,
            ["infosMenu"]: isActive,
        })}>
            <div>
                <CloseOutlined
                    onClick={() => {
                      dispatch(setIsActive())
                    }}
                    style={{fontSize: 24}} className="closeIcon" />
                <Link to={"/info/1"} com>Клик</Link>
            </div>
        </div>
    );
};

export default SideInfoMenu;