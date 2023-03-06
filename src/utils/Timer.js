import React, {useEffect, useState} from "react";
import moment from "moment";

const Timer = () => {
    const [timer, setTimer] = useState('')
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setRefresh(r => r + 1);
            setTimer(
                moment(new Date().getTime()).format('HH:mm:ss'))
        }, 200)
    }, [refresh])

    return (<div>
        {timer}
    </div>)
}

export default Timer