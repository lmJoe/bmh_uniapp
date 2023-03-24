<template>
	<view class="uploadPage">
		<view class="upLoad">
			<view class="upLoadArea" @click="upLoadVideo()" :style="{
					'width':`${uploadWidth}rpx`,
					'height':`${uploadHeight}rpx`,
				}">
				<text class="chosePost" v-if="uploadSuccess" @click="chosePost(videoUrl)">选择封面</text>
			</view>
		</view>

		<view class="intro">
			<textarea class="introArea" @blur="bindTextAreaBlur" placeholder="说点什么..." maxlength="30" />
			<view style="text-align:right" class="showNum">
				<view id="span_Font_Length" style="font-size: 14px;">{{areaNum}}</view>
				<view style="font-size: 14px;">/</view>
				<view style="font-size: 14px;">30</view>
			</view>
		</view>
		<view class="tagArea">
			<view class="tagTitle">
				<text>标签</text>
				<text>></text>
			</view>
			<view class="tagList">
				<view class="tag-view" v-for="(item,index) in tagList" :key="item.id">
					<uni-tag class="tag" :circle="true" :inverted="item.inverted" :id="item.id" :text="item.name"
						type="primary" @click="setInverted(item)" />
				</view>
			</view>
		</view>
		<view class="uploadloaction" @click="getLocation">
			<view class="loactionTitle">
				<text>地点</text>
				<text>></text>
			</view>
		</view>
		<view class="operArea">
			<button class="leftBtn" @click="storeLocal">存草稿</button>
			<button class="rightBtn" @click="publish">立即发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sourceType: ['拍摄', '相册', '拍摄或相册'],
				cameraIndex: 0,
				cameraList: [{
						value: 'back',
						name: '后置摄像头',
						checked: 'true'
					},
					{
						value: 'front',
						name: '前置摄像头'
					},
				],
				uploadWidth: '',
				uploadHeight: '',
				videoUrl: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v',
				videoName: '',
				uploadSuccess: false,
				areaNum: 0,
				tagList: [{
					id: 1,
					name: '生活记录',
					inverted: true,
				}, {
					id: 2,
					name: '生活',
					inverted: true,
				}, {
					id: 3,
					name: '自制',
					inverted: true,
				}, {
					id: 4,
					name: '学习',
					inverted: true,
				}, {
					id: 5,
					name: 'VLOG',
					inverted: true,
				}, {
					id: 6,
					name: '记录',
					inverted: true,
				}],
				loadProgress: 0,//加载index
				dltDownLvNew:"",//已下载
				dltDownLvAll:"",//总长度
				dltDownLvWc:"",//完成率
				downloadUlr:"",//下载地址
				suffix:"",//文件后缀
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			bindTextAreaBlur(e) {
				console.log(e.detail.value.length);
				this.areaNum = e.detail.value.length;
			},
			chosePost() {
				console.log("选择封面");
			},
			setInverted(item) {
				const tag = uni.createSelectorQuery().in(this);
				tag.selectAll('.tag').boundingClientRect(tag => {
					for (let i = 0; i < tag.length; i++) {
						if (tag[i].id == item.id) {
							item.inverted = !item.inverted;
						}
					}
				}).exec();
			},
			upLoadVideo() {
				//选择视频
				uni.chooseVideo({
					count: 1, //默认100
					camera: this.cameraList[this.cameraIndex].value,
					sourceType: ['album', 'camera'],
					success: (res) => {
						//可以判断有没有超过最大限制
						// let  fileSize = res.size;
						let tempFilePath = res.tempFilePath;
						this.uploadWidth = res.width;
						this.uploadHeight = res.height;
						this.videoName = res.name;
						this.uploadSuccess = true;
						// this.videoUrl = '';
						uni.showLoading({
							title: '上传中...', //提示的文字内容，显示在loading的下方
							mask: true, //Boolean 	是否显示透明蒙层，防止触摸穿透，默认：false
							success: () => {
								setTimeout(() => {
									uni.hideLoading();
								}, 3000);
							}, //接口调用成功的回调函数	
							fail: '', //接口调用失败的回调函数
							complete: () => {
								// setTimeout(()=>{
								// 	uni.hideLoading();
								// }, 3000);
							}, //接口调用结束的回调函数（调用成功、失败都会执行）
						});

						//上传视频
						// uni.uploadFile({
				 	//   name: "files[]",    //文件上传的name值
						//   url: 'http://api.xxxx.com/upload',    //接口地址
						//   header:{},    //头信息
						//   formData:{},   //上传额外携带的参数
				  //   filePath: tempFilePath,     //临时路径
				 	//   fileType: "video",               //文件类型
						//   success: (uploadFileRes) => {
						//     uni.hideLoading();
						//     const ret = JSON.parse(uploadFileRes.data);
						//     console.log(ret); 
						//   },
						// });
					},
				});
			},
			getLocation() {
				var that = this
				// 1. 用uni自带的getlocation获取位置  
				if (uni.getStorageSync('token') || 0) {
					uni.getLocation({
						type: 'gcj02 ',
						success: function(res) {
							uni.setStorageSync('userLocation', JSON.stringify(res));
							// 这里请求是把数据传给后台
							that.request({
								url: '/driver/order/point_upload',
								data: {
									location: res.longitude + ',' + res.latitude,
									locatetime: new Date().getTime() || '',
									speed: res.speed || '',
									accuracy: res.accuracy || ''
								},
								method: 'post'
							}).then(res => {
								uni.showToast({
									title: res.msg,
									icon: 'none'
								});
							});
						},
						fail: function() {
							uni.showToast({
								title: '获取位置失败',
								icon: 'none'
							});
						}
					});
				}
			},
			storeLocal() { //点击下载
				let e = this.videoUrl;
				let _this = this;
				//下载地址
				this.downloadUlr = e;
				//获取地址后缀
				this.suffix = e.split(".")[e.split(".").length - 1];
				//判断是否为（图片或视频）
				if (e.substring(e.length - 3) == "MP4" || e.substring(e.length - 3) == "mp4" || e.substring(e.length -
					3) == "jpg" || e.substring(e.length - 3) == "png") {
					const downloadTask = uni.downloadFile({
						url: e,
						success: res => {
							if (res.statusCode === 200) {

								if (res.tempFilePath.substring(res.tempFilePath.length - 3) == "mp4" || res
									.tempFilePath.substring(res.tempFilePath.length - 3) == "MP4") { //视频
									//保存视频到相册
									uni.saveVideoToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {

											uni.showToast({
												title: '保存成功',
												icon: 'none',
												duration: 2000,
												mask: true
											});
										},
										fail: function() {
											this.loadProgress = 0;
											uni.showToast({
												title: '保存失败',
												icon: 'none'
											});
										}
									});
								} else { //图片
									// 图片保存到手机相册
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {
											uni.showToast({
												title: '保存成功',
												icon: 'none',
												duration: 2000,
												mask: true
											});
										},
										fail: function() {

											this.loadProgress = 0;
											uni.showToast({
												title: '保存失败',
												icon: 'none'
											});
										}
									});

								}

							} else {
								uni.showToast({
									title: '下载失败',
									icon: "none"
								})
							}
						},
						fail: (err) => {

							this.loadProgress = 0;
							uni.showToast({
								icon: "none",
								mask: true,
								title: '下载失败'
							})
						}
					});
					downloadTask.onProgressUpdate((res) => {
						this.loadProgress = res.progress;
						if (this.loadProgress < 100) {

						} else {
							this.loadProgress = 0;
						}
						if (res.totalBytesExpectedToWrite < 10485760) {
							this.dltDownLvNew = Math.ceil(res.totalBytesWritten / 1024) + "KB";
							this.dltDownLvAll = Math.ceil(res.totalBytesExpectedToWrite / 1024) + "KB";
							this.dltDownLvWc = res.progress + "%"
						} else {
							this.dltDownLvNew = Math.ceil(res.totalBytesWritten / 1048576) + "M"
							this.dltDownLvAll = Math.ceil(res.totalBytesExpectedToWrite / 1048576) + "M";
							this.dltDownLvWc = res.progress + "%"
						}
					});
				} else {
					//下载文件为非图片和视频的文件
					let _this = this;

					const downloadTaskt = uni.downloadFile({
						url: e, //下载地址接口返回
						success: (data) => {
							uni.hideLoading()
							if (data.statusCode === 200) {
								var sFilePath = data.tempFilePath
								var sFileName = _this.downloadUlr.split('/')[_this.downloadUlr.split('/')
									.length - 1]; //原来的文件名

								//#ifdef APP-PLUS
								//文件保存到本地
								uni.saveFile({
									tempFilePath: data.tempFilePath, //临时路径
									success: function(res) {

										var savedFilePath = res.savedFilePath;
										let osname = plus.os.name;
										//ios手机直接打开文件，手动存储文件到手机，Android手机从根目录创建文件夹，保存文件并改名
										if (osname == 'Android') {
											uni.showToast({
												icon: 'none',
												mask: true,
												title: '保存成功',
												duration: 1000,
											});
											_this.fSetFileName(res.savedFilePath, sFilePath);
										}
										setTimeout(() => {
											//打开文档查看
											uni.openDocument({
												filePath: res.savedFilePath,
												success: function(res) {
													// console.log("成功打开文件")
												},
												fail() {
													// console.log("打开文件失败")
												}
											})
										}, 1000)
									},
									fail: function(res) {

									}
								});
								//#endif
								//#ifdef MP-WEIXIN
								//小程序对文件下载并不友好，不建议使用小程序当做下载器
								const FileSystemManager = wx.getFileSystemManager();
								FileSystemManager.saveFile({ //下载成功后保存到本地
									tempFilePath: data.tempFilePath,
									filePath: wx.env.USER_DATA_PATH + "/" + sFileName,
									success(res2) {
										if (res2.errMsg == 'saveFile:ok') {

											// 判断手机平台是 Android 还是 IOS
											if (uni.getSystemInfoSync().platform === 'android') {
												// console.log('运行Android上')
												uni.showModal({
													title: "保存地址为",
													content: "手机存储/Android/data/com.tencent.mm/MicroMsg/wxanewfiles"
												})
											} else {
												// console.log('运行iOS上')
												uni.showToast({
													title: "请转移APP下载",
													icon: "none"
												})
											}

										} else {
											uni.showToast({
												title: "下载失败",
												icon: "none"
											})
										}
									},
									fail() {
										uni.showToast({
											title: "下载失败",
											icon: "none"
										})
									}
								})
								//#endif

							} else {
								this.loadProgress = 0;
								uni.showToast({
									icon: "none",
									mask: true,
									title: "下载失败"
								})
							}
						},
						fail: (err) => {
							this.arcZzShow = false;
							this.loadProgress = 0;
							uni.showToast({
								icon: "none",
								mask: true,
								title: "下载失败"
							})
						}
					})
					downloadTaskt.onProgressUpdate((res) => {
						this.loadProgress = res.progress;
						if (this.loadProgress < 100) {

						} else {
							this.loadProgress = 0;
						}
						if (res.totalBytesExpectedToWrite < 10485760) {
							this.dltDownLvNew = Math.ceil(res.totalBytesWritten / 1024) + "KB";
							this.dltDownLvAll = Math.ceil(res.totalBytesExpectedToWrite / 1024) + "KB";
							this.dltDownLvWc = res.progress + "%"
						} else {
							this.dltDownLvNew = Math.ceil(res.totalBytesWritten / 1048576) + "M"
							this.dltDownLvAll = Math.ceil(res.totalBytesExpectedToWrite / 1048576) + "M";
							this.dltDownLvWc = res.progress + "%"
						}

					});
				}


			}, //点击下载END
			// 给下载的文件重命名
			fSetFileName(sFilePath, sFileName) {
				var sFileName = sFileName.split('/')[sFileName.split('/').length - 1]; //原来的文件名

				var aFileUrl = sFilePath.split('/').splice(0, sFilePath.split('/').length - 1); //saveFile API保存的本地地址

				var url = this.downloadUlr; //下载地址
				// 'url下载地址（和上面的一样）'
				let dtask = plus.downloader.createDownload(url, {
						filename: "file://storage/emulated/0/AAA/" + sFileName //在手机存储更目录创建一个叫AAA的文件夹，把文件存储进去，并更改会原名
					},
					(d, status) => {
						if (status == 200) {
							let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);

						} else {
							//下载失败
							plus.downloader.clear(); //清除下载任务
						}
					})
				dtask.start();
			}

		}
	}
</script>

<style scoped lang="less">
	.uploadPage {
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: #fff;
		padding: 0 30rpx;

		.upLoad {
			display: flex;
			align-items: center;
			flex-direction: column;

			.upLoadArea {
				width: 428rpx;
				height: 530rpx;
				border: 1px solid #dedede;
				margin-top: 20rpx;
				position: relative;

				.chosePost {
					position: absolute;
					bottom: 0;
					background: rgba(0, 0, 0, 0.5);
					width: 100%;
					padding: 20rpx 0;
					text-align: center;
					color: #fff;
					font-size: 28rpx;
				}
			}
		}

		.intro {
			position: relative;

			.introArea {
				width: 642rpx;
				height: 180rpx;
				background: #F4F4F4;
				border-radius: 10rpx;
				margin-top: 24rpx;
				padding: 20rpx 24rpx;
			}

			.showNum {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				position: absolute;
				bottom: 16rpx;
				right: 24rpx;
				color: #999999;
				font-size: 30rpx;
			}
		}

		.tagArea {
			padding: 26rpx 0;
			display: flex;
			flex-direction: column;

			.tagTitle {
				display: flex;
				justify-content: space-between;
				color: #222222;
				font-size: 30rpx;
			}

			.tagList {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				margin-top: 24rpx;
				flex-wrap: wrap;

				.tag-view {
					margin-right: 20rpx;
					margin-bottom: 30rpx;
				}
			}
		}

		.uploadloaction {
			padding: 26rpx 0;
			display: flex;
			flex-direction: column;

			.loactionTitle {
				display: flex;
				justify-content: space-between;
				color: #222222;
				font-size: 30rpx;
			}
		}

		.operArea {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 30rpx;
			margin-top: 230rpx;

			.leftBtn {
				width: 240rpx;
				height: 84rpx;
				border-radius: 50rpx;
				font-size: 24rpx;
				color: #222222;
				line-height: 84rpx;
			}

			.rightBtn {
				width: 426rpx;
				height: 84rpx;
				border-radius: 50rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				background: #FF4A45;
				line-height: 84rpx;
			}
		}
	}

	/deep/ .uni-tag-text--primary {
		color: #666666;
	}

	/deep/ .uni-tag--primary--inverted {
		border-color: #dedede;
	}

	/deep/ .uni-tag {
		padding: 12rpx 26rpx;
		font-size: 24rpx;
	}

	uni-button:after {
		border: none;
	}
</style>
