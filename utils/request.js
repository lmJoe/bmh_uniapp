	import {request} from '@/utils/ajax.js';
	import URL from '@/utils/api.js';
	import {getRandomNum} from '@/utils/untis.js'
	import Md5 from 'js-md5'
	function getChannelList(callback){
		let data = {
		  appKey: URL.appkey,
		}
		let header = {
			ContentType:'application/x-www-form-urlencoded'
		}
		request(URL.getChannelList, data, header, 'POST').then(res => {
			callback(res)
		}).catch(res => {
			uni.showToast({title: res,	icon: "none"})
		})
	}
	/**
	 * 首页视频数据
	 * @param {页码} pageIndex 
	 * @param {当前页个数} pageSize 
	 * @param {频道id} channelId 
	 * @param {返回数据} callback 
	 */
	function getVideoList(pageIndex,pageSize,channelId,callback){
		uni.showLoading({
			title:'加载中...'
		})
		let ts = parseInt(new Date().getTime() / 1000)
		let rd = getRandomNum(5, 50)
		var data = {
		  appKey: URL.appkey,
		  pageSize: pageSize,
		  pageIndex: pageIndex,
		  channelId: channelId,
		  ts,
		  rd,
		  tk: Md5(`${ts}_${rd}_${URL.appkey}_${pageSize}`).toUpperCase()
		}
		let header = {
			ContentType:'application/x-www-form-urlencoded'
		}
		request(URL.getVideoList, data, header, 'POST').then(res => {
			uni.hideLoading()
			callback(res)
		}).catch(res => {
			uni.hideLoading()
			uni.showToast({title: res,	icon: "none"})
		})
	}
	/**
	 * 视频详情信息
	 * @param {视频id} videoId 
	 * @param {返回数据} callback 
	 */
	function getVideoInfo(videoId,callback){
		uni.showLoading({
			title:'加载中...'
		})
		let ts = parseInt(new Date().getTime())
		var data = {
		  videoId: videoId,
		  date: ts,
		}
		let header = {
			ContentType:'application/x-www-form-urlencoded'
		}
		request(URL.getVideoInfo, data, header, 'GET').then(res => {
			uni.hideLoading()
			callback(res)
		}).catch(res => {
			uni.hideLoading()
			uni.showToast({title: res,	icon: "none"})
		})
	}
	/**
	 * 播放页视频信息
	 * @param {视频id} videoId 
	 * @param {返回数据} callback 
	 */
	function getvideourl(videoId,callback){
		uni.showLoading({
			title:'加载中...'
		})
		let ts = parseInt(new Date().getTime())
		var data = {
			flvid:videoId,
		    devicetype: 'wap',
			date: ts,
			dataType:'json'
		}
		let header = {
			ContentType:'application/json'
		}
		request(URL.getvideourl, data, header, 'GET').then(res => {
			uni.hideLoading()
			callback(res)
		}).catch(res => {
			uni.hideLoading()
			uni.showToast({title: res,	icon: "none"})
		})
	}
	/**
	 * 频道页视频列表
	 * @param {播放页视频列表} videoId 
	 * @param {接口返回数据} callback 
	 */
	function getContentList(videoId,callback){
		uni.showLoading({
			title:'加载中...'
		})
		let ts = parseInt(new Date().getTime() / 1000)
		let rd = getRandomNum(5, 50)
		var data = {
		  appKey: URL.appkey,
		  channelId: channelId,
		  ts,
		  rd,
		  tk: Md5(`${ts}_${rd}_${URL.appkey}_${pageSize}`).toUpperCase()
		}
		let header = {
			ContentType:'application/json'
		}
		request(URL.getContentList, data, header, 'GET').then(res => {
			uni.hideLoading()
			callback(res)
		}).catch(res => {
			uni.hideLoading()
			uni.showToast({title: res,	icon: "none"})
		})
	}
	export {
		getVideoList,
		getChannelList,
		getVideoInfo,
		getvideourl,
		getContentList
	}
