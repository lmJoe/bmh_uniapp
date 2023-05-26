import { openBlock, createElementBlock, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../../plugin-vue_export-helper.js";
var _style_0 = { "content": { "": { "width": 100, "height": 100 } } };
const _sfc_main = {
  data() {
    return {
      time: 5,
      QHeight: 0
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(0);
        this.QHeight = height;
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createCommentVNode(` 	<view class="content" :style="{height:QHeight+'px'}">\r
		<image :style="{height:QHeight+'px'}" src="https://test-static01.pomoho.com/uniapptest/images/start.png"></image>\r
	</view> `)
  ]);
}
var promptPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/gitproject/bmh_uniapp/pages/prompt/promptPage.nvue"]]);
export { promptPage as default };
