<template>
	<view class="media-item view" hover-class="media-item-hover" v-if="options.Title" @click="click">
		<!-- TODO 在支付宝小程序下 需要用 style 覆盖标签的默认样式 -->
		<view class="view videoModule">
			<text class="media-title videoTitle">{{options.Title}}</text>
			<view class="image-section flex-row">
				<lazyLoad :src="options.CoverImgs" class="flex poster image-list1" height="380rpx" borderRadius="8px" mode="scaleToFill"></lazyLoad>
				<image  class="playerIcon" src="../../../static/home/playicon.png"></image>
			</view>
			<text class="info-text costTime">{{options.Duration}}</text>
		</view>
		<view class="media-foot flex-row">
			
			<view class="media-info flex-row">
				<lazyLoad class="headImg" :src="options.HeadImg"  height="55rpx" borderRadius="50%" mode="scaleToFill"></lazyLoad>
				<text class="info-text">{{options.NickName}}</text>
				<text class="info-text">276条评论</text>
				
			</view>
		</view>
		<view class="media-item-line" style="position: absolute;"></view>
	</view>
</template>

<script>
	import lazyLoad from '@/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue';//图片懒加载
	
	export default {
		components: {
		    lazyLoad
		},
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			click() {
				this.$emit('click');
			},
			close(e) {
				this.$emit('close');
			}
		}
	}
</script>

<style scoped>
	.view {
		flex-direction: column;
	}

	.flex-row {
		flex-direction: row;
	}

	.flex-col {
		flex-direction: column;
	}

	.media-item {
		position: relative;
		flex: 1;
		flex-direction: column;
		/* border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #ebebeb; */
		padding: 20rpx 30rpx 21rpx 30rpx;
	}

    .media-item-hover{
        /* background-color: #eee; */
    }

	.media-item-line {
		position: absolute;
		left: 30rpx;
		right: 30rpx;
		bottom: 0;
		height: 1rpx;
		background-color: #ebebeb;
	}
	.media-title {
		flex: 1;
		lines: 3;
		text-overflow: ellipsis;
		font-size: 30rpx;
		color: #ffffff;
	}

	.image-section {
		flex-direction: row;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	.image-list1 {
		width: 690rpx;
		height: 380rpx;
		background:#dedede;
		border-radius: 8rpx;
	}

	.media-info {
		flex-direction: row;
		align-items: center;
	}

	.info-text {
		margin-right: 20rpx;
		color: #999999;
		font-size: 24rpx;
	}
	
	.headImg{
		width:55rpx !important;
		height:55rpx;
		border-radius: 50%;
		margin-right:20rpx;
	}
	.media-foot {
		margin-top: 25rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.playerIcon{
		width:83rpx;
		height:83rpx;
		position:absolute;
	}
	.videoTitle{
		width:100%;
		padding:20rpx;
		position:absolute;
		top:0rpx;
		left:0;
		z-index: 10;
		background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0));
		border-top-left-radius: 8rpx;
		border-top-right-radius: 8rpx;
	}
	.costTime{
		position:absolute;
		bottom:20rpx;
		right:7rpx;
		background:rgba(0,0,0,.2);
		padding:10rpx 14rpx;
		font-size:24rpx;
		color:#fff;
	}
</style>
