// 图标组件
Vue.component("google-icon", {
	template: `
	<div class="icon-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
		<a :href="webData.url" :title="webData.name">
			<div class="icon-inner">
				<div class="icon-shape">
					<div class="icon-image">
						<img title="" alt="" class="icons" src="http://www.baidu.com/favicon.ico">
					</div>
				</div>
				<div class="icon-title">百度一下，你就...</div>
			</div>
		</a>
		<transition name="fade">
			<button class="icon-btn" title="修改快捷方式" 
				@click="handleButtonClick"
				v-if="showBtn">
				<img class="icon-btn-img" src="./style/switch.png">
			</button>
		</transition>
		<icon-pop 
			v-if="showPop"
			:webName="webData.name"
			:webUrl="webData.url"
			@closePop="handleclosePop"></icon-pop>
	</div>
	`,
	data () {
		return {
			showPop: false,
			showBtn: false,
			webData: {
				name: "百度一下，你就知道",
				url: "http://www.baidu.com"
			}
		};
	},
	methods: {
		handleButtonClick () {
			this.showPop = true;
		},
		handleMouseEnter () {
			this.showBtn = true;
		},
		handleMouseLeave () {
			this.showBtn = false;
		},
		handleclosePop () {
			this.showPop = false;
		}
	}
});

Vue.component("icon-pop", {
	template: `
		<div class="pop-container">
			<form class="pop">
				<div class="pop-title">修改快捷方式</div>
				<div class="pop-input" v-for="(item, index) in data" :key="index">
					<label class="web-label">{{item.name}}</label>
					<br/>
					<input class="web-input" size="40"
						v-model="item.content"
						@focus="handleInputFocus"
						@blur="handleInputBlur"
						ref="animation">
					<div class="input-animation" 
						:class="{active: item.focus}" 
					></div>
				</div>
				<div class="pop-btn-container">
					<button class="pop-btn"
						:class="[item.class]"
						v-for="item in btnData"
						:key="item.class"
						@click="handleBtnPop">{{item.name}}</button>
				</div>
			</form>
			<div class="overlay"></div>
		</div>
	`,
	props:{
		webUrl: {
			type: String,
			default: "http://wwww.sina.com.cn"
		},
		webName: {
			type: String,
			default: "新浪网"
		}
	},
	data () {
		return {
			data: [
				{
					name: "名称",
					content: this.webName,
					focus: false
				}, {
					name: "网址",
					content: this.webUrl,
					focus: false
				}
			],
			btnData: [
				{
					class: "pop-btn-delete",
					name: "删除"
				}, {
					class: "pop-btn-cancel",
					name: "取消"
				}, {
					class: "pop-btn-complete",
					name: "完成"
				}
			]
		};
	},
	methods: {
		handleBtnPop () {
			this.$emit("closePop");
		},
		handleInputFocus (event) {
			if (event.target.value == this.data[0].content) {
				this.data[0].focus = true;
			} else {
				this.data[1].focus = true;
			}
		},
		handleInputBlur (event) {
			if (event.target.value == this.data[0].content) {
				this.data[0].focus = false;
			} else {
				this.data[1].focus = false;
			}
		}
	},
	mounted () {
		this.$refs.animation[0].focus();
	}
});
var vm = new Vue({
	el: "#app",
	data: {
		a: 1
	}
});