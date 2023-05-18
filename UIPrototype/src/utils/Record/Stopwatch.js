import {useEffect, useState} from "react";

const Stopwatch = (props) => {
    const {flag, time} = props;
    const [stTime, setStTime] = useState(time);
    useEffect(() => {
        let interval;
        if (flag) {
            interval = setInterval(() => {
                setStTime(stTime => stTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [flag]);

    return (
        <div>
            {Math.floor(stTime / 60)}:{stTime - Math.floor(stTime / 60) * 60}
        </div>
    )
}

export default Stopwatch;