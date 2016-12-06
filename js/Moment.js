'use strict';
window.onload = function() {
	/*此JS文件用于生成Moment*/
	(function(){
		var container = document.getElementById("container");
		/*朋友圈类开始*/
		var Moments = function(img, name, time, text) {
			this.img = img;
			this.name = name;
			this.time = time;
			this.text = text;
			this.timeP = null;
			this.recordComment = null;
			this.outDiv = null;
			this.button = null;
			this.inputP = null;
			this.submit = null;
			this.inputText = null;
		}
		Moments.prototype = {
			constructor:Moments,
			createMoments:function(parentNode) {
				var leftDiv = new Node('div'),
					icon = new Node('img'),
					rightDiv = new Node('div'),
					username = new Node('h4'),
					context = new Node('p'),
					buttonAndTime = new Node('p'),
					time = new Node('span'),
					button = new Node('span'),
					comment = new Node('div'),
					outDiv = new Node('div'),
					inputP = new Node('p'),
					inputText = new Node('input'),
					submitButton = new Node('span'),
					attrClass = 'className';
				outDiv.addAttribute(attrClass, 'record');
				leftDiv.addAttribute(attrClass, 'record-left');
				icon.addAttribute(attrClass, 'record-logo');
				icon.addAttribute('src', this.img);
				leftDiv.addChild(icon);
				outDiv.addChild(leftDiv);
				rightDiv.addAttribute(attrClass, 'record-right');
				context.addAttribute(attrClass, 'record-context');
				context.setText(this.text);
				buttonAndTime.addAttribute(attrClass, 'record-timeAndAdd');
				time.addAttribute(attrClass, 'record-time');
				time.setText(this.time);
				button.addAttribute(attrClass, 'commentButton');
				button.setText('评论');
				buttonAndTime.addChild(time);
				buttonAndTime.addChild(button);
				comment.addAttribute(attrClass, 'record-comment');
				username.addAttribute(attrClass, 'record-username');
				username.setText(this.name);
				inputP.addAttribute(attrClass, 'inputOutSide');
				inputText.addAttribute(attrClass, 'comment-input');
				inputText.addAttribute('type', 'text');
				inputText.addAttribute('placeholder', '请输入评论');
				submitButton.addAttribute(attrClass, 'comment-submit');
				submitButton.setText('确认');
				inputP.addChild(inputText);
				inputP.addChild(submitButton);
				rightDiv.addChild(username);
				rightDiv.addChild(context);
				rightDiv.addChild(buttonAndTime);
				rightDiv.addChild(comment);
				rightDiv.addChild(inputP);
				outDiv.addChild(leftDiv);
				outDiv.addChild(rightDiv);
				parentNode.appendChild(outDiv.getNode());
				this.inputP = inputP;
				this.submit = submitButton;
				this.inputText = inputText;
				this.button = button;
				this.timeP = time;
				this.recordComment = comment;
				this.outDiv = outDiv;
			},
			addComment:function(Moments, text){
				var comment = Moments.recordComment,
					outP = new Node('p'),
					h4 = new Node('h4'),
					text = document.createTextNode(":" + text);
				h4.setText(Moments.name);
				outP.addChild(h4);
				outP.getNode().appendChild(text);
				comment.addChild(outP);
			},
			buttonEvent:function() {
				var moments = this;
				var inputP = this.inputP.getNode();
				var inputText = this.inputText.getNode();
				moments.button.getNode().onclick = function() {
					inputP.style.display = 'block';
				}
				moments.submit.getNode().onclick = function() {
					inputP.style.display = 'none';
					Moments.prototype.addComment(moments, inputText.value);
					inputText.value="";
				}
			},
		}
		/*朋友圈类结束*/
		var first = new Moments('image/weixin.png','软工二班','20:50','Leo:收到');
		first.createMoments(container);
		first.buttonEvent();
		var second = new Moments('image/weixin.png','测试名字','21:46','做个朋友圈心累');
		second.createMoments(container);
		second.buttonEvent();
	}());
}