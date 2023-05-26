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
	import {numFormat,imgToBase64} from '@/utils/untis.js';
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
				checked:false,
				contentText: {
					contentDefault: '关注',
					contentFav: '已关注'
				},
				inputValue:'',
				likeNum:12000,
				likeColor:false,
				likeShow:false,
				likeImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABB5JREFUeF7tmk2IHEUUx39v8Ct4yCWCCEICG4VNQEQj+IkoKC47M7sriseA4AcxBkH8iCFGZBVdBNlEMRE/Dl5EQjLVSyRgiESiB5NL4tEIEjzF016M6zpPpnZ23STdUzU9Nd0zPVPXfv3e//36VdXr6hYGfMiA588QwLACBpzAcAoMeAEMF8GOp4A+wvVcyyiwCWEUZRMlFlAuIFxAOSKGk2krTcs8BoxQYiPKCMLfK77hBAv8JN8yn9Z/agBaZQxlApgE1jkEnAPmgM/FcMYlVitMoTwOTCFc57BfQDhKnQMS2RhtjbYBaIU9YBO/ra1IS8Z/AXupMytz/HH5/VpmHOFV4L4UvkGIgBmp8YPv/d4AbKmvYR/KVl/niXbC7yjTYvi0YaNlNlBidyDf/6DsEsP7Pjq9AGjVzu0DwL0+Ttuw+Qo4D7zexj2+pt+I4UmXsROAVqgAn3nMc1esPK47IbQEoGPcyFV2Po3koT5QzMbC+3SSr9YAqsyibA8kJE83VTGYOAGJAOz+KxzJU3XA2CfFxO8syQAqnADuDygib1fPirEL+SUjFoCO8zAlvstbceD4p8Vwpx+AKtMoOwMLyN+d8JTU+Hq1kPgKqPCL7e2LNz4SwwstAegkm/mXs8XL3WZ0RsylLfwVFdDs9d8sKACY52r5nsXl/AYPgHKDRPw5uABgoxh+HWQAW8RwagigSWDQ1oBF5lnTehEc525K/FjQXeBnMdzl0wg1jqtuKhwEYb/UeM4HwH7gmcIBUMqXH5zGt8IT3EH9/5WyECCESGr2dMv9Ntiw0ArFqoKYp9/IM/k8YIL11DkOrC9ABRwSw1RcHq2PxMpsRfiizwGco8SjcpjGx5krhs+p8D5gW99CEKakxqEk/U4AzfXgGPBQH0J4S4z9kpU4vABYCGWOIzzYRxB2i+Ftl15vAH0FQdglNaZdybfcBZJu7oNK2CmGd32STwWgpytBeU0i3vNNPjWAHoXwihhm2km+IwA9BuFlMXzQbvIdA+gJCMpLEvFhmuSDAMgVgrBDasymTT4YgJwgbBdDo0vtaLTVB7giZbZFKtsk4mOXHp/rYQHsocRpjnW5Y3xeDJ/4JOdjExSAnQpPcA0XOdolCLGfuH0STbIJDsBCWPp5ci4ohIBlvxpGVwA0K2EtFzkcBILyokTs7eRJZ1oBy8G0zDqEg8ADqcV3uM+74natAlYgLP1p1oBwj0tMzPXUHZ5vrK4DsNOhys2ohbDFVxgpXmy8fa8yzARAs1Ha0JwOtzuFKm9IxDtOuwAGmQGwECa5hUUOImxuod3rJCdA7tZFpgCa02GUOjMIYzFJOM/wQiW+7CdzACuL49Jv97cCa4HfUE5JxJehE3T5yw2AS1hW14cAsiLdq3GGFdCrTyYrXQNfAf8BAiQVULKAgloAAAAASUVORK5CYII=',
				
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
			left:0;
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
