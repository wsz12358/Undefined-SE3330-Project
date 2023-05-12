import {Dialog} from "antd-mobile";
import SaveEvent from "./SaveEvent";
import store from "../../redux/Store";
import {setCategory} from "../../redux/FilterActions";

export default function SaveQuitDialog (type, idx) {
    const callback = () => {
        if (type)
            this.props.history.push('/stats/details', {id: idx});
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
                // set duration time in local storage to 0
                // store.dispatch(setCurDuration(0));
                SaveEvent(this.state, callback);
                // Current event of various users should not be stored in local storage.
                // A table: tags, begintime, userid and messages as well.
            }
        }
    })
}