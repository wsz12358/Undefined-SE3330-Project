import {Dialog} from "antd-mobile";

export default function BlockQuitDialog () {
    Dialog.show({
        style: {
            textAlign: 'center'
        },
        content: '仍有消息在上传中，请稍后再试！',
        closeOnAction: true,
        actions: [[
            {key: 'confirm', text: '确认'},
        ]],
    });
}