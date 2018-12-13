$(document).ready(function () {
	// 按钮闪现
	$(".icon-container").on({
		"mouseenter": function () {
			$(".icon-btn").css("display", "block");
		}, 
		"mouseleave": function () {
			$(".icon-btn").css("display", "none");
		}
	}); 

	/**
	 * 浮窗组件
	 * @param {string} name 
	 * @param {string} url 
	 */
	function CreatePop(name, url) {
		this.name = name;
		this.url = url;
		this.show = true;

		$($("script")[0]).before(	"<div class='pop-container'></div>"
		);
		var $pop = $("<div class=pop></div>");
		var $overlay = $("<div class=overlay></div>");
		$(".pop-container").append($pop).append($overlay);
		// pop标题
		var $popTitle = $("<div class=pop-title>修改快捷方式</div>");
		$(".pop").append($popTitle.css("margin-bottom", "20px"));
		// pop输入框参数
		var param = [{
			label: ["名称", "label-title"],
			class: "shortcut-name",
			content: this.name
		}, {
			label: ["网址", "label-url"],
			class: "shortcut-url",
			content: this.url
		}];
		// 添加输入框
		for (var i = 0; i < param.length; i++) {
			var $div = $("<div class='pop-input'></div>");
			$div.append($("<label></label>").addClass(param[i].label[1])
				.text(param[i].label[0])).append("<br/>")
				.append($("<input type='text' size='38' style='background: rgb(241,243,244)'>")
					.val(param[i].content)
					.addClass(param[i].class));
			$(".pop").append($div.css("margin-bottom", "10px"));			
		}
		// 改变输入框的样式
		$(".pop-input input").css({"border": "none", "padding": "8px"});
		
		// 添加按钮
		var $divBtn = $("<div class='pop-btn-container'></div>");
		$divBtn.css({"position": "relative", "margin-top": "30px"});
		$(".pop").append($divBtn);
		$divBtn.append($("<button class='pop-btn pop-btn-del'>删除</button>"))
			.append($("<button class='pop-btn pop-btn-cancel'>取消</button>"))
			.append($("<button class='pop-btn pop-btn-complete'>完成</button>"));
		$(".pop-btn").css({
			"padding": "8px 20px",
			"color": "blue",
			"background": "#fff",
			"position": "absolute",
			"border": "1px solid #d3cdcd",
			"border-radius": "4px"});
		
		$(".pop-btn-cancel").css({
			"right": "100px"
		});
		$(".pop-btn-complete").css({
			"right": "20px",
			"background": "rgb(26,115,232)",
			"color": "#fff"
		});
		// 关闭浮窗
		$(".pop-btn").on("click", function() {
			$(".pop-container").remove();
		});
	}
	// 开启浮窗
	$(".icon-btn").on("click", function(event) {
		var pop = new CreatePop("百度一下", "http://www.baidu.com");
	});
	
});