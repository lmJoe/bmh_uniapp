<template>
	<view class="loginPage">
		<view class="loginlogo">
			<image class="logo" :src="logImg"></image>
			<text class="name">爆米花视频</text>
		</view>
		<view class="loginBtn">
			<button class="button" @click="login">登录领取红包</button>
			<view class="loginDeal" :animation="animationData">
				<checkbox-group @change="checkboxChange()">
					<label class="argeeIntro">
						<checkbox :checked="readNo" color="#3DBC7A" style="transform:scale(0.7)" />
						我已阅读并同意
					</label>
				</checkbox-group>
				<view class="iKnow">
					<text class="deal"  @click="introPop(1)">《用户协议》</text>与
					<text class="practy"  @click="introPop(2)">《隐私政策》</text>
				</view>
			</view>
		</view>
		<view class="title-split">
		    <view></view>
		    <text>其他登录方式</text>
		    <view></view>
		</view>
		<view class="loginWay">
			<image class="phone" :src="wayIcon"></image>
			<text>手机登录</text>
		</view>
		<image class="close" :src="closeImg" @click="closeBack"></image>
		<uni-transition ref="ani" class="argeePopBg" custom-class="transition" mode-class="fade" :show="argeeShow">
			<popup-Item class="introPop" @checkboxChange='checkboxChange' @closePop='closePop'></popup-Item>
		</uni-transition>
	</view>
</template>

<script>
	import { pathToBase64, base64ToPath } from '@/node_modules/image-tools/index.js';//图片懒加载
	import popupItem from '@/components/popup.vue'
	import {mapState,mapMutations} from  'vuex';
	export default {
		components: {
		    popupItem,
		},
		computed:{
			...mapState('m_login',[])//指定访问路径，并将state中的值映射出来
		},
		data() {
			return {
				logImg:'https://test-static01.pomoho.com/liming/images/common/logo.png',
				wayIcon:'https://test-static01.pomoho.com/liming/images/common/icon3.png',
				weixin:'https://test-static01.pomoho.com/liming/images/common/icon4.png',
				closeImg:'https://test-static01.pomoho.com/liming/images/common/icon5.png',
				readNo:false,
				argeeShow:false,
				animationData: ''
			}
		},
		onUnload(){
			this.animationData = ''
		},
		onLoad() {
			this.animation = uni.createAnimation()
		},
		mounted() {
			pathToBase64(this.logImg)
			.then(base64 => {
				this.logImg = base64;
			})
			.catch(error => {
				console.error(error)
			})
			pathToBase64(this.wayIcon)
			.then(base64 => {
				this.wayIcon = base64;
			})
			.catch(error => {
				console.error(error)
			})
			pathToBase64(this.weixin)
			.then(base64 => {
				this.weixin = base64;
			})
			.catch(error => {
				console.error(error)
			})
			pathToBase64(this.close)
			.then(base64 => {
				this.close = base64;
			})
			.catch(error => {
				console.error(error)
			})
		},
		methods: {
			//通过mapMutations的方法将m_login模块中的方法映射到当前页面中
			...mapMutations('m_login',['setUserMsg']),
			closeBack(){
				uni.navigateBack();
			},
			introPop(num){
				this.argeeShow = true;
			},
			closePop(boolean){
				if(!boolean){
					this.argeeShow = false;
					this.readNo = false;
				}else{
					this.readNo = true;
					this.argeeShow = false;
				}
				
			},
			login(){
				if(!this.readNo){
					this.animation.translate(5, 0).step({duration:30})
								  .translate(-5, 0).step({duration:30})
								  .translate(0, 0).step({duration:30})
					this.animationData = this.animation.export()
				}else{
					//进行微信登录
					//登录成功后种下token
					const params = {
						userName:'liming',
						passWorld:'123456789',
						userToken:'Bears 88888888',
					}
					this.setUserMsg(params);
					//并关闭当前页
					let pages = getCurrentPages() // 获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
				    let prevPage = pages[pages.length - 2] //上一页页面实例
				    uni.navigateBack({
						delta:1,
						success:() => {
							prevPage.$vm.commonFun(true) // 给上一页绑定方法otherFun,传参地址id
						}
				    })
					
				}
			},
			checkboxChange(boolean){
				if(boolean?boolean:''){
					this.readNo = true;;
				}else{
					this.readNo = !this.readNo;
				}
				
			},

			
		}
	}
</script>

<style scoped lang="less">
	.loginPage{
		.loginlogo{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding-top:190rpx;
			.logo{
				width:191rpx;
				height:191rpx;
			}
			.name{
				color:#333333;
				font-size: 40rpx;
				margin-top:12rpx;
			}
		}
		.loginBtn{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin-top:163rpx;
			.button{
				width:500rpx;
				height:90rpx;
				line-height:90rpx;
				color:#fff;
				border-radius: 100rpx;
				background-color:rgba(61,188,122,1);
				background-image:url('https://test-static01.pomoho.com/liming/images/common/icon4.png');
				background-repeat: no-repeat;
				/*超大背景图片的做法 背景定位*/
				background-position: 110rpx center;
				background-size:9%;
				font-size:32rpx;
				padding-left:100rpx;
			}
			/deep/ uni-button::after{
				border:none;
			}
			.loginDeal{
				margin-top:61rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				/deep/ .uni-checkbox-input{
					border-radius: 50%;
				}
				.argeeIntro{
			
					font-size:22rpx;
					color:#999999;
					.iKnow{
						
						.practy,.deal{
							color:#333333;
							font-size:22rpx;
						}
					}
				}
			}
		}
		.loginWay{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.phone{
				width:94rpx;
				height:94rpx;
			}
			text{
				margin-top:31rpx;
				font-size:28rpx;
				color:#333;
			}
		}
		.title-split {
		    margin: 213rpx 0 63rpx 0;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    text {
		        color: #999999;
		        font-weight: 500;
		        font-size: 28rpx;
		        padding: 0 18rpx;
		    }
		    view {
		        width: 210rpx;
		        height: 0.5rpx;
		        &:first-of-type {
		            background: #DCDCDC;
		        }
		        &:last-of-type {
		            background: #DCDCDC;
		        }
		    }
		}
		.close{
			width:26rpx;
			height:26rpx;
			position:fixed;
			top:87rpx;
			left:34rpx;
		}
		.argeePopBg{
			width:100%;
			height:100%;
			background:rgba(0,0,0,.5);
			position:fixed;
			top:0;
			left:0;
			z-index:100;
			display: flex;
		    justify-content: center;
		    align-items: center;
		}
	}
	
</style>
