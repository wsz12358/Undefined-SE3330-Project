import {Dialog} from "antd-mobile";
import {getCurEvent} from "../../service/loginService";

export default function ContinueDialog(data) {
    Dialog.show({
        style: {
            textAlign: 'center'
        },
        content: '有进行中的事件，是否继续？',
        closeOnAction: true,
        actions: [[
            {key: 'cancel', text: '取消'},
            {key: 'confirm', text: '确认'},
        ]],
        onAction: (e) => {
            if (e.key === 'confirm') {
                this.setState({
                    durTime: data.duration,
                    select: [...data.tag.split('/')],
                    beginTime: data.begintime,
                }, () => {
                    getCurEvent({user: data.user.userId.toString()},
                        (d) => {
                            console.log(d);
                            this.setState({
                                messages: [...d],
                            }, () => {
                                this.setState({isLoaded: true, needRefresh: true});
                            });
                        });
                });
            } else if (e.key === 'cancel') {
                this.setState({isLoaded: true});
            }
        }
    });
}

const getMsgs = (e) => {

}