"use strict";
require("../common/vendor.js");
const getRandomArrayElements = (arr, count) => {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
};
const getRandomNum = (minnum, maxnum) => {
  var choice = maxnum - minnum + 1;
  return Math.floor(Math.random() * choice + minnum);
};
const changeHourMinutestr = (str) => {
  if (str !== "0" && str !== "" && str !== null) {
    return (Math.floor(str / 60).toString().length < 2 ? "0" + Math.floor(str / 60).toString() : Math.floor(str / 60).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + parseInt((str % 60).toString()) : parseInt((str % 60).toString()));
  } else {
    return "";
  }
};
const numFormat = (num) => {
  if (num >= 1e4) {
    num = Math.round(num / 1e3) / 10 + "w";
  } else if (num >= 1e3) {
    num = Math.round(num / 100) / 10 + "k";
  }
  return num;
};
exports.changeHourMinutestr = changeHourMinutestr;
exports.getRandomArrayElements = getRandomArrayElements;
exports.getRandomNum = getRandomNum;
exports.numFormat = numFormat;
