"use strict";require("../common/vendor.js");exports.changeHourMinutestr=t=>"0"!==t&&""!==t&&null!==t?(Math.floor(t/60).toString().length<2?"0"+Math.floor(t/60).toString():Math.floor(t/60).toString())+":"+((t%60).toString().length<2?"0"+parseInt((t%60).toString()):parseInt((t%60).toString())):"",exports.getRandomArrayElements=(t,r)=>{for(var o,n,e=t.slice(0),a=t.length,l=a-r;a-- >l;)o=e[n=Math.floor((a+1)*Math.random())],e[n]=e[a],e[a]=o;return e.slice(l)},exports.getRandomNum=(t,r)=>{var o=r-t+1;return Math.floor(Math.random()*o+t)};
