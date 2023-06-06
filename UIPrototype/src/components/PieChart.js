const tags = {
    '学习': 0,
    '工作': 1,
    '运动': 2,
    '社交': 3,
    '休闲': 4,
    '其他': 5,
}

let option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '2%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 0, name: '学习'},
                {value: 0, name: '工作'},
                {value: 0, name: '运动'},
                {value: 0, name: '社交'},
                {value: 0, name: '休闲'},
                {value: 0, name: '其他'},
            ]
        }
    ]
}

export default function PieChart (chart, eventList, beginDate, finishDate) {
    if (beginDate === null) return;

    option.series[0].data.map((item) => {
        item.value = 0;
    });

    eventList = eventList.filter((item) => {
        const dayArr = item.begintime.split('/');
        const day = new Date(dayArr[0], Number(dayArr[1] - 1), dayArr[2]);
        return day >= beginDate && day <= finishDate;
    });

    if (!eventList.length) {
        option.series[0].data[tags['其他']].value += 1;
        chart.setOption(option);
        return;
    }

    eventList.map((item) => {
        if (item.tags === '') {
            option.series[0].data[tags['其他']].value += item.duration;
            return;
        }

        const tagarr = item.tags.split('/');
        tagarr.map((tag) => {
            option.series[0].data[tags[tag]].value += item.duration;
        });
    });

    chart.setOption(option);
}