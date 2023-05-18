import {Dialog} from "antd-mobile";
import SaveEvent from "./SaveEvent";
import store from "../../redux/Store";
import {setCategory} from "../../redux/FilterActions";

export default function SaveQuitDialog (type) {
    const callback = (data) => {
        this.setState({isSubmitting: false});
        if (type)
            this.props.history.push('/stats/details', {id: data.eventid});
        else {
            store.dispatch(setCategory("event"))
            this.props.history.goBack();
        }
    }

    Dialog.show({
        style: {
            textAlign: 'center'
        },
        content: '保存记录并退出？',
        closeOnAction: true,
        actions: [[
            {key: 'cancel', text: '继续编辑'},
            {key: 'confirm', text: '确认', bold: true, danger: true},
        ]],
        onAction: (e) => {
            if (e.key === 'confirm') {
                this.setState({isSubmitting: true},
                    () => SaveEvent(this.state, callback.bind(this)));
                // Current event of various users should not be stored in local storage.
                // A table: tags, begintime, userid and messages as well.
            }
        }
    })
}