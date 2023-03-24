<script>
	export default {
		onLaunch: function() {
						//加载开屏动画或广告
			// uni.redirectTo({
			// 	url:`/pages/prompt/promptPage`,
			// })
			setTimeout(()=>{
				uni.switchTab({
					url:`/pages/Home/index`,
					success:()=>{
						//跳转成功后
					}
				})
			},1000)
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	// @import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
