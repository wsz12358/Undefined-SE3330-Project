import * as echart from "echarts";

const xAxisData1 = ['Mon \n', 'Tue \n', 'Wed \n', 'Thu \n', 'Fri \n', 'Sat \n', 'Sun \n'];

let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '3%',
        bottom: '2%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: [],
    },
    series: [
        {
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            data: [0, 0, 0, 0, 0, 0, 0]
        },
    ]
}

export default function BarChart(chart, eventList, beginDate, finishDate) {
    if (beginDate === null) return;

    let indexDate = beginDate;
    option.xAxis.data = xAxisData1.reduce((prev, curr) => {
        curr += ((indexDate.getMonth() + 1).toString() + '/' +
            indexDate.getDate().toString());
        prev.push(curr);
        indexDate = new Date(indexDate.getTime() + (24 * 60 * 60 * 1000));

        return prev;
    }, []);

    option.series[0].data = [0, 0, 0, 0, 0, 0, 0];

    eventList = eventList.filter((item) => {
        const dayArr = item.begintime.split('/');
        const day = new Date(dayArr[0], Number(dayArr[1]-1), dayArr[2]);
        if (day >= beginDate && day <= finishDate) {
            option.series[0].data[day.getDay() ? day.getDay() - 1 : 6] += item.duration;
            return true;
        } else return false;
    });

    console.log(option.series[0].data);

    console.log(eventList);

    chart.setOption(option);
}