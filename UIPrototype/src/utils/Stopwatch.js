import {useEffect, useState} from "react";

const Stopwatch = (props) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        if (props.flag) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!props.flag) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props.flag]);

    return (
        <div>
            {time}
        </div>
    )
}

export default Stopwatch;