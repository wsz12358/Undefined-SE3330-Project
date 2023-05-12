import {useEffect} from "react";

const Stopwatch = (props) => {
    const {flag, time, setDurTime} = props;
    useEffect(() => {
        let interval;
        if (flag) {
            interval = setInterval(() => {
                setDurTime();
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [flag]);

    return (
        <div>
            {Math.floor(time / 60)}:{time - Math.floor(time / 60) * 60}
        </div>
    )
}

export default Stopwatch;