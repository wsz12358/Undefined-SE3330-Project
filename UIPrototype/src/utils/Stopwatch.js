import {useEffect, useState} from "react";

const Stopwatch = (props) => {
    const [time, setTime] = useState(props.ini_time);
    useEffect(() => {
        let interval;
        if (props.flag) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!props.flag) {
            localStorage.setItem("cur_duration", JSON.stringify(time)); // save the duration time in the local storage
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.flag]);

    return (
        <div>
            {Math.floor(time/60)}:{time-Math.floor(time/60)*60}
        </div>
    )
}

export default Stopwatch;