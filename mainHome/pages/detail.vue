<template>
	<view class="detailModule">
		<view class="banner" @click="goDetail(banner)">
			<video-item :data="data"></video-item>
		</view>
		<view class="uni-list videoList">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="goDetail(value)">
					<view class="uni-media-list">
						<lazyLoad class="uni-media-list-logo" :src="value.cover"  height="160rpx" borderRadius="" mode="scaleToFill"></lazyLoad>
						<!-- <image class="uni-media-list-logo" :src="value.cover"></image> -->
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{ value.title }}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.author_name }}</text>
								<text>{{ value.published_at }}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- #ifdef APP-PLUS -->
				<view class="ad-view" v-if="(index > 0 && (index+1) % 10 == 0)">
					<ad :adpid="adpid" @error="aderror"></ad>
				</view>
				<!-- #endif -->
			</block>
		</view>
		<uni-load-more :status="status" :icon-size="16" :content-text="contentText" />
	</view>
</template>
<script>
	import lazyLoad from '@/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue';//图片懒加载
	import {getVideoInfo,getvideourl,getVideoList} from '@/utils/request.js'
	import videoItem from './video.vue'
	// import {jsonp} from 'vue-jsonp'
	import {dateUtils,changeHourMinutestr} from '@/utils/untis.js';
	export default {
		components: {
		    videoItem,
			lazyLoad
		},
		data() {
			return {
				Video_ID: '',
				data:'',
				listData: [],
				last_id: '',
				reload: false,
				status: 'more',
				pageIndex:1,
				pageSize:10,
				adpid: '',
				channelId:'ad11e330-76ae-4c19-818c-6b7a133a5365',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		mounted() {
			this.getVideoInfo();
		},
		onLoad(e) {
			this.Video_ID = e.id || '';
			this.adpid = this.$adpid;
			this.getVideoList();
		},
		onReachBottom() {
			this.status = 'more';
			this.getVideoList();
		},
		methods:{
			getVideoInfo() {
				getVideoInfo(this.Video_ID,(response) => {
					console.log(response);
					if(response.code==1){
						this.data = response.data;
						console.log(response.data);
						this.getvideourl(response.data.Video_ID);
					}
				})
			},
			getvideourl(Video_ID){},
			getVideoList() {
				if (this.last_id) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
					this.minId = this.last_id;
					this.pageIndex = this.pageIndex + 1;
				}
				
				getVideoList(this.pageIndex,this.pageSize,this.channelId,(response) => {
					if(response.code==1){
						let videoData = response.data;
						let list = this.setTime(response.data);
						this.listData = this.reload ? list : this.listData.concat(list);
						this.last_id = list[list.length - 1].id;
						this.reload = false;
					}
				})
			},
			goDetail: function(e) {
				// 				if (!/前|刚刚/.test(e.published_at)) {
				// 					e.published_at = dateUtils.format(e.published_at);
				// 				}
				
				let detail = {
					author_name: e.NickName,
					cover: e.CoverImgs.replace('baomihua','pomoho'),
					id: e.Video_ID,
					post_id: e.PlayId,
					published_at: changeHourMinutestr(e.Duration),
					title: e.Title
				};
				uni.navigateTo({
					url: '../list2detail-detail/list2detail-detail?detailDate=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach(e => {
					
					newItems.push({
						author_name: e.NickName,
						cover: e.CoverImgs.replace('baomihua','pomoho'),
						id: e.Video_ID,
						post_id: e.PlayId,
						published_at: changeHourMinutestr(e.Duration),
						title: e.Title
					});
				});
				return newItems;
			},
			aderror(e) {
				console.log("aderror: " + JSON.stringify(e.detail));
			}
		}
	}
</script>
<style scoped lang="less">
	.detailModule{
		background-color: #fff;
		.banner {
			position: relative;
			
		}
		.videoList{
			margin-top:30rpx;
			padding:0 30rpx;
		}
		
		.uni-media-list{
			display: flex;
			justify-content: flex-start;
		}
		.uni-media-list-logo {
			width: 290rpx !important;
			min-width: 290rpx !important;
			height: 192rpx !important;
			margin-right:25rpx;
		}
		
		.uni-media-list-body {
			height: auto;
			justify-content: space-around;
		}
		
		.uni-media-list-text-top {
			font-size: 28rpx;
			overflow: hidden;
			color:#333;
			text-overflow: ellipsis;
			display: -webkit-box;  //使用自适应布局
			-webkit-line-clamp: 2;  //设置超出行数，要设置超出几行显示省略号就把这里改成几
			-webkit-box-orient: vertical;
		}
		
		.uni-media-list-text-bottom {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top:30rpx;
			color:#999999;
			font-size:24rpx;
		}
		.uni-list-cell{
			margin-top:30rpx;
		}
	}

</style>
