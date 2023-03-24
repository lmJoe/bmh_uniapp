const request = (url, data, option, method = 'GET') => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token');
		let header = {
			"Content-Type":option.ContentType,
		}
		if (token) {
			header['Authorization'] = token
		}
		uni.request({
			url: url,
			data: data,
			method: method,
			header: header,
			success: res => {
				if (res.data.code == 200) {
					resolve(res.data)
					reject(res)
				}else if (res.data.code == '') {//有的接口返回code空-发票字典，也解析
					resolve(res.data)
					reject(res)
				}else if (res.statusCode==200) {//阿里银行名称查询-解析
					resolve(res.data)
					reject(res)
				} 
				else {
					uni.showToast({title: res.data.message,icon: "none"})
					// reject(res)
				}
			},
			fail: res => {
				reject(res)
			}
		})
	});
}

export  {
	request
};
