<template>
	<view class="loginPopBox">
		<view class="example-body">
				<h1 class="h1">用户协议与隐私政策提示</h1>
				<text class="text" v-if="noagreeShow">感谢您使用并使用爆米花视频</text>
				<text class="text" v-if="noagreeShow">我们将依据《爆米花视频APP用户协议》及《爆米花视频APP隐私协议》来帮助您了解我们在收集、使用、存储和共享您个人信息的情况以及您享有的相关权利。</text>
				<text class="text" v-if="noagreeShow">在您使用爆米花视频观看服务时，我们将收集您的设备信息、操作日志及浏览记录等信息。</text>
				<text class="text" v-if="noagreeShow">在您使用使用爆米花视频及设置头像、分享、评论、收藏等服务时，我们需要获取您设备的相机权限、相册权限、位置权限等信息。</text>
				
				<text class="text" v-if="noagreeShow==false">您需要同意用户协议与隐私政策才能使用爆米花 视频APP。 </text>
				<text class="text" v-if="noagreeShow==false">如您不同意，很遗憾我们无法为您提供服务。</text>
				<text class="text">您可以通过阅读完整的
				<uni-link href="javascript:;" text="《爆米花视频APP用户协议》" showUnderLine="false" color="#2476C2" font-size="12">《爆米花视频APP用户协议》</uni-link>
				和
				<uni-link href="javascript:;" text="《爆米花视频APP隐私协议》" showUnderLine="false" color="#2476C2" font-size="12">《爆米花视频APP隐私协议》</uni-link>
				来了解详细信息。</text>
				<button class="noAgree" @click="noAgree">不同意</button>
				<button class="agree" @click="agree">同意并继续</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noagreeShow:true,
			}
		},
		methods: {
			noAgree(){
				if(!this.noagreeShow){
					this.$emit("closePop",false);
				}else{
					this.noagreeShow = false;
				}
				
			},
			agree(){
				this.$emit("checkboxChange",true);
				this.$emit("closePop",true);
			}
		}
	}
</script>

<style scoped lang="less">
	.loginPopBox{
		padding:36rpx 38rpx;
		margin:0 60rpx;
		background:#fff;
		border-radius: 24rpx;
		.example-body{
			display:flex;
		    flex-direction: column;
			.h1{
				color:#222222;
				font-size:30rpx;
				text-align:center;
				margin-bottom:20rpx;
			}
			.text{
				color:#222222;
				font-size:24rpx;
				margin-bottom:20rpx;
				
			}
			.noAgree{
				background:transparent;
				color:#999999;
				font-size:30rpx;
				border-radius: 50rpx;
				width:400rpx;
				height:74rpx;
			}
			.agree{
				background:#FF4B45;
				color:#fff;
				font-size:30rpx;
				border-radius: 50rpx;
				width:400rpx;
				height:74rpx;
				margin-top:10rpx;
			}
		}
		uni-button:after{
			border: 0px solid rgba(0,0,0,.2);
		}
		
	}
</style>
