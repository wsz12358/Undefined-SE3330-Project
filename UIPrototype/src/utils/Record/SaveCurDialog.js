import {Dialog} from "antd-mobile";

export default function SaveCurDialog () {
    Dialog.show({
        style: {
            textAlign: 'center'
        },
        content: '还在记录中，退出将会保存，继续吗？',
        closeOnAction: true,
        actions: [[
            {key: 'cancel', text: '取消'},
            {key: 'confirm', text: '确认', bold: true, danger: true},
        ]],
        onAction: (e) => {
            if (e.key === 'confirm') {
                // save to tempevent table, which includes:
                // begintime, duration, tags and userid.
                this.setState({isStart: this.state.isStart + 1}, this.saveCur);
                // this.props.history.goBack();
            }
        }
    })
}