import React from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";
import {Typography} from "antd";

const AppInfos = () => {
    const isActive = useSelector(state => state.infos.isActive)
    const styles = {
        padding: "30px 10px "
    }

    return (
        <div
            style={styles}
            className={classNames({
            ["disabled"] : !isActive,
            ["enabled"] : isActive,
        })}>
            <Typography.Text>Вода</Typography.Text>
        </div>
    );
};

export default AppInfos;