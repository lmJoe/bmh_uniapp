"use strict";var t=require("../../../../common/vendor.js");const e={data:()=>({messageList:[{id:1,name:"音社大爆炸",headImg:"../../../../static/mine/1.webp",status:2},{id:2,name:"王晓初",headImg:"../../../../static/mine/2.webp",status:2},{id:3,name:"Asen",headImg:"../../../../static/mine/3.webp",status:3},{id:4,name:"GHJKS鼓掌",headImg:"../../../../static/mine/4.webp",status:1},{id:5,name:"要相信光",headImg:"../../../../static/mine/3.webp",status:1},{id:6,name:"王晓初",headImg:"../../../../static/mine/1.webp",status:1},{id:7,name:"今天和明天",headImg:"../../../../static/mine/3.webp",status:1}]}),methods:{rightBtn(e){switch(e.status){case 1:e.status=3,t.index.showToast({title:"关注成功",icon:"none"});break;case 2:e.status=3,t.index.showToast({title:"互相关注成功",icon:"none"});break;case 3:t.index.showModal({content:"确认取消关注？",confirmText:"取消关注",cancelText:"继续关注",success:function(t){t.confirm?e.status=2:t.cancel&&(e.status=3)}})}}}};if(!Array){(t.resolveComponent("uni-list-item")+t.resolveComponent("uni-list"))()}Math||((()=>"../../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js")+(()=>"../../../../uni_modules/uni-list/components/uni-list/uni-list.js"))();var s=t._export_sfc(e,[["render",function(e,s,a,i,n,m){return{a:t.f(n.messageList,((e,s,a)=>({a:e.headImg,b:t.t(e.name),c:t.t(1==e.status?"关注":2==e.status?"回关":3==e.status?"相互关注":""),d:t.n(3==e.status?"messagetime1":"messagetime"),e:t.o((t=>m.rightBtn(e))),f:"5870bbee-1-"+a+",5870bbee-0"})))}}],["__scopeId","data-v-5870bbee"]]);wx.createPage(s);