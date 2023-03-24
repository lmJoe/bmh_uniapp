<template>
	<view class="smallVideo">
		<video id='videoContext' class="video" :src="src" :poster="CoverImgs" autoplay="false" duration="" controls="true"
			 enable-danmu="false" :loop="true" muted="true" initial-time="" direction="-90"
			show-mute-btn="false" @play="onstart" @pause="onpause" @ended="onfinish" @error="onfail" @waiting="waiting"
			@timeupdate="timeupdate" @fullscreenchange="fullscreenchange">
		</video>
		<view class="uni-padding-wrap msgInfo">
			<view class="msg1">
				<image :src="HeadImg" class="headImg"></image>
				<p class="nickName">{{UserName}}</p>
				<uni-fav :checked="checked" class="favBtn" :star="false" 
						 fg-color="#ffffff" bg-color="#F55D58" bg-color-checked="#F55D58"
						:content-text="contentText" @click="favClick"  :circle="true" />
			</view>
			<p class="videoTitle">{{title}}</p>
			<view class="msg3">
				<input class="uni-input" @input="onKeyInput" placeholder="输入同步到view中" />
				<view class="card-actions-item" @click="actionsClick('分享')">
					<uni-icons type="chat" color="#ffffff" size="25" />
					<text class="card-actions-item-text">35w</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('分享')">
					<uni-icons type="heart-filled" :color="likeColor?'#f55d58':'#fff'" size="25" />
					<text class="card-actions-item-text">{{likeNum}}</text>
				</view>
				
			</view>
		</view>
		<uni-transition ref="ani" class="likeBox" custom-class="transition" mode-class="fade" :show="likeShow">
			<image :src="likeImg" mode=""></image>
		</uni-transition>
		<uni-icons customPrefix="customicons" type="fanhui" color="#5e6d82" size="22" />
	</view>
</template>

<script>
	import {numFormat} from '@/utils/untis.js';
	import { pathToBase64, base64ToPath } from '@/node_modules/image-tools/index.js';//图片懒加载
	export default {
		data() {
			return {
				src:'https://test-static01.pomoho.com/videoSc/1.mp4',
				fil: true,
				title:'每月给你3万住在大山里5年没有手机没有网',
				HeadImg:'https://test-static01.pomoho.com/videoSc/1.webp',
				UserName:'萌新小可爱',
				attentYes:'https://test-static01.pomoho.com/videoSc/icon1.png',
				attentNo:'https://test-static01.pomoho.com/videoSc/icon2.png',
				CoverImgs:'',
				checked:false,
				contentText: {
					contentDefault: '关注',
					contentFav: '已关注'
				},
				inputValue:'',
				likeNum:12000,
				likeColor:false,
				likeShow:false,
				likeImg:'../../../static/common/like.png',
				
			}
		},
		created() {
			// #ifndef MP-ALIPAY || MP-TOUTIAO
				this.myVideo = uni.createVideoContext('videoContext');
				this.likeNum = numFormat(this.likeNum);
			// #endif
			// #ifdef APP-PLUS || MP-BAIDU
					  
			// #endif
			// #ifndef APP-PLUS || MP-BAIDU
					  
			// #endif
			pathToBase64(this.likeImg)
			.then(base64 => {
				this.likeImg = base64;
			})
			.catch(error => {
				console.error(error)
			})
		},
		onReady: function(res) {
			
		},
		methods: {
			likeClick(){
				
			},

			timeupdate(e) {
				// console.log("timeupdate:" + JSON.stringify(e));
			},
			onstart(){
				
			},
			play() {
				this.myVideo.play();
				this.myVideo.requestFullScreen()
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
			fullscreenchange(e){
				if (!e.detail.fullScreen) {
					this.myVideo.pause();
				} 
			},
			favClick(index) {
				this.checked = !this.checked;
				this.$forceUpdate()
			},
			onKeyInput(event) {
				this.inputValue = event.detail.value
			},
			actionsClick(text) {
				let letter = this.likeNum.replace(/[^a-zA-Z]/g,'');
				let mult = letter=="w"?10000:1000;
				this.likeColor = !this.likeColor;
				this.likeNum = numFormat(Number(this.likeNum.replace(/[a-zA-Z]+/g,""))*mult+1);
				
				if(this.likeColor){
					this.likeShow = true;
					this.modeClass = 'fade';
					setTimeout(()=> {
						this.likeShow = false;
					}, 500);
				}
				
			}
		}
	}
</script>

<style scoped lang="less">
	.smallVideo{
		.likeBox{
			position:absolute;
			top:0;
			left:0;
			bottom:0;
			right:0;
			margin:auto;
			width:150rpx;
			height:150rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		display: flex;
		/* 主轴方向为垂直方向,起点在上方 */
		flex-direction: column;	
		width: 100%;
		height: 100vh;
		position:relative;
		.msgInfo{
			position:absolute;
			bottom:34rpx;
			left:22rpx;
			.msg1{
				height:55rpx;
				margin-top:32rpx;
				display:flex;
				// justify-content:space-between;
				justify-content: flex-start;
				align-items: center;
				.headImg{
					width:75rpx !important;
					height:75rpx;
					background-size:100%;
					border-radius: 50%;
					margin-right:15rpx;
				}
				.nickName{
					font-size:30rpx;
					color:#FFFFFF;
					margin-right:29rpx;
				}
				.favBtn {
					color:#fff;
					backaground:#F55D58;
					font-size:20rpx;
				}
			}
			.videoTitle{
				margin:18rpx 0 27rpx 0;
				font-size:28rpx;
				color:#fff;
			}
			.msg3{
				display:flex;
				justify-content:flex-start;
				align-items: center;
				.card-actions {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					height: 45px;
					border-top: 1px #eee solid;
				}
			
				.card-actions-item {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left:24rpx;
				}
			
				.card-actions-item-text {
					font-size: 12px;
					color: #fff;
					margin-left: 5px;
				}
			}
		}
		.video {
			width: 100%;
			height: 100%;
			background-color: #808080;
		}
		
	}
</style>
