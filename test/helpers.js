function dateTimeNow(){
    var dateTime = new Date();
    var dateTimeString = dateTime.getFullYear().toString()+ dateTime.getMonth() + dateTime.getDate() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
    return dateTimeString;
}
var dateTimeString = dateTimeNow();

module.exports = {
    dateTimeString: dateTimeString,
}