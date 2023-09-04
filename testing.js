

function calculateDaysBetweenDates(begin, end){
    let days = 0;
    let beginDate = new Date(begin);
    let endDate = new Date(end);
    let difference = endDate - beginDate;
    days = difference / (1000 * 3600 * 24);
    return days;
}

let result = calculateDaysBetweenDates("1995-12-17", "1995-12-21")
console.log(result)

