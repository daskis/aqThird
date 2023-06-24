import React from 'react';
import {Card, Typography} from "antd";
const {Title, Text} = Typography
const Messages = () => {
    const styles = {
        width: "30vw",
        height: 300,
        margin: 20
    }
    return (
        <div>
            <Card title={<Title level={4}></Title>} bordered={true} style={styles}>
                <Text>Участок №2</Text>

            </Card>
        </div>
    );
};

export default Messages;