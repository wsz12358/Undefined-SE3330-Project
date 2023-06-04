import store from "../../redux/Store";

export default function FilterEvents (data) {
    const filterTags = store.getState().filter.filterTagStatus;
    const filterTimeStatus = store.getState().filter.filterTimeStatus;
    let data1, data2;

    if (filterTags.length) {
        data1 = data.filter((item) => {
             const tags = item.tags;
             return filterTags.every(e => tags.includes(e));
        })
    } else data1 = [...data];

    if (filterTimeStatus) {
        const filterTimeFrom = store.getState().filter.filterTimeFrom;
        const filterTimeTo = store.getState().filter.filterTimeTo;

        const ftf = filterTimeFrom === null ? null :
            new Date(filterTimeFrom.getFullYear(), filterTimeFrom.getMonth(), filterTimeFrom.getDate());
        const ftt = filterTimeTo === null ? null :
            new Date(filterTimeTo.getFullYear(), filterTimeTo.getMonth(), filterTimeTo.getDate());

        data2 = data1.filter((item) => {
            const beginTime = item.begintime.split('/');
            const bgt = new Date(beginTime[0], Number(beginTime[1]-1), beginTime[2]);

            return ((ftf === null) ? true : (bgt >= ftf)) &&
                ((ftt === null) ? true : (bgt <= ftt));
        })
    } else data2 = [...data1];

    return data2;
}