	const DOMAIN_PREFIX = 'https://push-common.pomoho.com:8081'
	const DOMAIN_VIDEOURL = 'http://play.pomoho.com'
// #ifdef H5
	const WX_API_BASE =  DOMAIN_PREFIX
	const WX_API_BASE_VIDEOUR =  DOMAIN_VIDEOURL
	const TERMINAL = 2
// #endif

// #ifdef APP-PLUS || APP-NVUE
	const TERMINAL = 3
// #endif

 // #ifdef MP-WEIXIN
	const WX_API_BASE =  DOMAIN_PREFIX
	const WX_API_BASE_VIDEOUR =  DOMAIN_VIDEOURL
	const TERMINAL = 2
// #endif
var URL = {
	appkey: '39FB7E4E4A3C4ED7835CB6527DB89FE9', // appkey
	cId: 19, // 渠道标记
	ai: '7917765ad5c8416999c4d31c1f56aa41', // 应用id
	getVideoList:WX_API_BASE + '/api/cds/getVideoPageList',//消息列表查询   
	getChannelList:WX_API_BASE + '/api/cds/getShowChannelList',//视频分类   
	getVideoInfo:WX_API_BASE + '/api/video/getVideoInfo',//视频详情   
	getContentList:WX_API_BASE + '/api/cms/getContentList',//视频播放页热榜
	getvideourl:WX_API_BASE_VIDEOUR + '/getvideourl.aspx',//视频链接
	
	// https://weixinapi.baomihua.com/getvideourl.aspx?flvid=50682617&devicetype=wap&dataType=json&date=1670231870598
}
export default URL;