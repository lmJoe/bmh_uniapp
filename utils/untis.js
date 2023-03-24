/**
 * 
 * @param {*} arr 抽取数组
 * @param {*} count 随机抽取个数
 */
export const getRandomArrayElements = (arr, count) =>{
	var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
	while (i-- > min) {
	    index = Math.floor((i + 1) * Math.random());
	    temp = shuffled[index];
	    shuffled[index] = shuffled[i];
	    shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
export const getRandomNum = (minnum, maxnum) => {//随机数
    var choice = maxnum - minnum + 1;
    return Math.floor(Math.random() * choice + minnum);
}
export const changeHourMinutestr = (str) => {
  if (str !== "0" && str !== "" && str !== null) {
    return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :
      (Math.floor(str / 60)).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + parseInt((str % 60).toString()) : parseInt((str % 60).toString()));
  } else {
    return "";
  }
}
/**
 * 超过1000使用k 超过10000使用w
 * @param {数量} num 
 */
export const numFormat = (num) => {
    if(num >= 10000) {
        // num = Math.round(num/1000)/10;
        num = Math.round(num/1000)/10 + 'w';
    } else if (num >= 1000) {
        // num = Math.round(num/100)/10;
        num = Math.round(num/100)/10 + 'k';
 
    }
        return num;
}
export const dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
export const imgToBase64 = (url, callback) => {
  // #ifdef MP-WEIXIN
  uni.getFileSystemManager().readFile({
    filePath: url, //选择图片返回的相对路径
    encoding: 'base64', //编码格式
    success: res => { //成功的回调
	
      console.log(res, '返回结果');
      let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
      callback && callback(base64)
    },
    fail: (e) => {
      console.log("图片转换失败");
    }
  })
 
  // #endif
 
  // #ifdef H5
 
  uni.request({
    url: url,
    method: 'GET',
    responseType: 'arraybuffer',
    success: res => {
      if (res.header['content-length'] > 450 * 1024) {
        return uni.showToast({
          title: '图片大小不能超过450k',
          icon: 'none'
        })
      }
      let base64 = uni.arrayBufferToBase64(res.data); //把arraybuffer转成base64
      base64 = 'data:image/jpeg;base64,' + base64;
      callback && callback(base64)
    },
    fail: (e) => {
      console.log("图片转换失败");
    }
  })
 
  // #endif
 
  // #ifdef APP-PLUS
 
  plus.io.resolveLocalFileSystemURL(url, (entry) => {
    entry.file((file) => {
      let fileReader = new plus.io.FileReader();
      if (file.size > 450 * 1024) {
        return uni.showToast({
          title: '图片大小不能超过450k',
          icon: 'none'
        })
      }
      fileReader.onloadend = (e) => {
        callback && callback(e.target.result)
      };
      fileReader.readAsDataURL(file);
    })
  })
  // #endif
}