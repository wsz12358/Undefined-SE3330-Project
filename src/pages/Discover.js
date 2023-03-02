import React from 'react'
import {Avatar, Space, Tag, TextArea} from 'antd-mobile';
class Discover extends React.Component {
    render() {
        return (
        <Space direction={"vertical"}>
            <Space  direction='horizontal'>
                <Avatar src=''/>
                <Tag color={"primary"}>
                    学习
                </Tag>
            </Space>
            <Space>
                <TextArea style={{border: 1}} placeholder='请输入内容' value={'摆烂了, \n别摆烂好吗'} autoSize={{ minRows: 3, maxRows: 10 }}/>
            </Space>
        </Space>
        );
        //TODO: your code here
    }
}

export default Discover