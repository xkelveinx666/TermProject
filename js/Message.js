'use strict';
window.onload = function() {
	/*此JS文件用于生成Message*/
	(function(){
		var wrap = document.getElementById("wrap");
		/*讯息类开始*/
		var Message = function(img, name, time, text) {
			this.img = img;
			this.name = name;
			this.time = time;
			this.text = text;
			this.messageDiv = null;
			this.messageIcon = null;
			this.recordName = null;
			this.timeSpan = null;
			this.recordDetail = null;
		}
		Message.prototype = {
			constructor:Message,
			createMessage:function(parentNode) {
				var messageDiv = new Node('div'),
					messageIcon = new Node('img'),
					messageRecord = new Node('div'),
					recordName = new Node('p'),
					time = new Node('span'),
					recordDetail = new Node('p'),
					attrClass = 'className';
				messageDiv.addAttribute(attrClass, 'Message width100');
				messageIcon.addAttribute(attrClass, 'Message-icon');
				messageIcon.addAttribute('src', this.img);
				messageRecord.addAttribute(attrClass, 'Message-record fontYaHei');
				recordName.addAttribute(attrClass, 'record-name');
				recordName.setText(this.name);
				time.addAttribute(attrClass, 'time');
				time.setText(this.time);
				recordDetail.addAttribute(attrClass, 'record-detail width100');
				recordDetail.setText(this.text);
				messageRecord.addChild(recordName);
				messageRecord.addChild(time);
				messageRecord.addChild(recordDetail);
				messageDiv.addChild(messageIcon);
				messageDiv.addChild(messageRecord);
				this.messageDiv = messageDiv;
				this.messageIcon = messageIcon;
				this.recordName = recordName;
				this.timeSpan = time;
				this.recordDetail = recordDetail;
				parentNode.insertBefore(messageDiv.getNode(), parentNode.firstChild);
			},
			editMessage:function(newImg, newName, newTime, newText) {
				if(newImg) {
					this.messageIcon.addAttribute('src', newImg);
				}
				if(newName) {
					this.recordName.setText(newName);
				}
				if(newTime) {
					this.timeSpan.setText(newTime);
				}
				if(newText) {
					this.recordDetail.setText(newText);
				}
			},
			showMessage:function() {
			}
		}
		/*讯息类结束*/
		var first = new Message('image/weixin.png','软工二班','20:50','Leo:收到');
		first.createMessage(wrap);
		var me = new Message('2','订阅号','17:13','嗯');
		me.createMessage(wrap);
		var second = new Message('2','订阅号','17:13','嗯');
		second.createMessage(wrap);
		var second1 = new Message('2','遗嘱','16:14','嗯');
		second1.createMessage(wrap);
		second1.editMessage('4', '测试', '18:13', '哈哈');
		var temp = new Message('5','译注','22:18','hahahahahaha');
		temp.createMessage(wrap);
	}());
}