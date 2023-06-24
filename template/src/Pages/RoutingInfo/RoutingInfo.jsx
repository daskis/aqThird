import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const RoutingInfo = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default RoutingInfo;