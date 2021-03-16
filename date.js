//jshint esversion: 6

module.exports.getDate = function() {
    let date = new Date();

    let options = {weekday: "long", month: "long", day: "numeric"};

    let day = date.toLocaleDateString("en-US", options);

    return day;
};


module.exports.getDay = function() {
    let date = new Date();

    let options = {day: "numeric"};

    let day = date.toLocaleDateString("en-US", options);

    return day;
};
