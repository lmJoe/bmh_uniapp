<template>
	<view>
		<video id='videoContext' class="video" :src="src" :poster="CoverImgs" autoplay="false" duration="" controls="true" :danmu-list="danmuList"
			danmu-btn="true" enable-danmu="true" :loop="true" muted="true" initial-time="" direction="-90"
			show-mute-btn="true" @play="onstart" @pause="onpause" @ended="onfinish" @error="onfail" @waiting="waiting"
			@timeupdate="timeupdate" @fullscreenchange="fullscreenchange">
		</video>
		<view class="uni-padding-wrap">
			<view class="barrageBox">
				<input type="text" v-model="barrageMsg" placeholder="在此处输入弹幕内容" class="barrage">
				<button class="barrageButton" @click="sendDanmu">发送弹幕</button>
			</view>
			<p class="videoTitle">{{data.Title}}</p>
			<view class="videoMsg">
				<view class="left">
					<image :src="data.HeadImg" class="headImg"></image>
					<p class="nickName">{{data.UserName}}</p>
				</view>
				<view class="right">
					<view class="playIcon">
						<image src="https://test-static01.pomoho.com/liming/images/detail/icon1.png" class="icon"></image>
						<p class="text">{{data.PlayNum}}</p>
					</view>
					<view class="likeIcon" @click="likeClick">
						<image src="https://test-static01.pomoho.com/liming/images/detail/icon2.png" class="icon"></image>
						<p class="text">{{data.LikeNum}}</p>
					</view>
				</view>
			</view>
			<!-- <button class="btn" @click="sendDanmu">弹幕</button> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data:Array,
		},
		data() {
			return {
				src:'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v',
				fil: true,
				barrageMsg:'',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
			}
		},
		created() {
			// #ifndef MP-ALIPAY || MP-TOUTIAO
				this.myVideo = uni.createVideoContext('videoContext')
			// #endif
			// #ifdef APP-PLUS || MP-BAIDU
					  
			// #endif
			// #ifndef APP-PLUS || MP-BAIDU
					  
			// #endif
		},
		onReady: function(res) {
	
		},
		methods: {
			likeClick(){
				
			},

			timeupdate(e) {
				// console.log("timeupdate:" + JSON.stringify(e));
			},

			play() {
				this.myVideo.play();
			},
			pause() {
				this.myVideo.pause();
			},
			seek() {
				this.myVideo.seek(20);
			},
			stop() {
				this.myVideo.stop();
			},
			fullScreen() {
				this.myVideo.requestFullScreen({
					direction: 90
				});
			},
			sendDanmu: function() {
				this.myVideo.sendDanmu({
					text: this.barrageMsg,
					color: this.getRandomColor()
				});
				this.barrageMsg = '';
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			},
		}
	}
</script>

<style scoped lang="less">
	.video {
		width: 750rpx;
		/* #ifdef H5 */
		width: 100%;
		/* #endif */
		height: 400rpx;
		background-color: #808080;
	}
	.videoTitle{
		margin-top:28rpx;
		font-size:28rpx;
		color:#222222;
		padding: 0 30rpx
	}
	.barrageBox{
		position:relative;
		height:60rpx;
		margin-top:10rpx;
		padding:0 30rpx;
		.barrage{
			border:1px solid #dedede;
			padding:10rpx 25rpx;
			background:#fff;
			border-radius: 100rpx;
		}
		.barrageButton{
			position:absolute;
			top: 5rpx;
			right: 36rpx;
			height:60rpx;
			line-height:65rpx;
			font-size:24rpx;
			border:none;
			border-top-right-radius: 100rpx;
			border-bottom-right-radius: 100rpx;
			background:#EA1C24;
			color:#fff;
			&::after{
				border:none;
			}
		}
	}
	.videoMsg{
			height:55rpx;
			margin-top:32rpx;
			display:flex;
			justify-content:space-between;
			align-items: center;
			padding:0 30rpx;
			.left{
				display:flex;
				justify-content: flex-start;
				align-items: center;
				.headImg{
					width:55rpx !important;
					height:55rpx;
					background-size:100%;
					border-radius: 50%;
					margin-right:20rpx;
				}
				.nickName{
					font-size:28rpx;
					color:#222222;
				}
			}
			.right{
				display:flex;
				justify-content: flex-start;
				align-items: center;
				.playIcon{
					display:flex;
					justify-content: flex-start;
					align-items: center;
					margin-right:29rpx;
					.icon{
						width:34rpx;
						height:34rpx;
					}
					.text{
						margin-left:5rpx;
						font-size:24rpx;
					}
				}
				.likeIcon{
					margin-right:29rpx;
					display:flex;
					justify-content: flex-start;
					align-items: center;
					.icon{
						width:34rpx;
						height:34rpx;
					}
					.text{
						margin-left:5rpx;
						font-size:24rpx;
					}
				}
			}
			
		}
	
</style>
