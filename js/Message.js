'use strict';
window.onload = function() {
	/*此JS文件用于生成Message*/
	(function(){
		var wrap = document.getElementById("wrap");
		/*创建节点类*/
		var Node = function(tag) {
			if(typeof(tag) === 'string') {
				this.node = document.createElement(tag);
			}
			else if(typeof(tag) === 'object'){
				this.node = tag;
			}
			else {
				alert('请用字符串或对象创建该对象');
				return null;
			}
		}
		Node.prototype = {
			constructor:Node,
			addAttribute:function(attrName, attrValue) {
				var node = this.node;
				if(attrName !== 'className') {
					node.setAttribute(attrName, attrValue);
				}
				else {
					var className = node.className;
					node.className = className + ' ' + attrValue;
				}
			},
			setText:function(text) {
				this.node.innerHTML = text;
			},
			getNode:function() {
				return this.node;
			},
			addChild(node) {
				if(!node instanceof Node) {
					alert('请传入一个Node对象');
				}
				this.node.appendChild(node.getNode());
			}
		}
		/*节点类结束*/
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
			createMessage:function() {
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
				recordName.addAttribute(attrClass, 'record-name width100');
				recordName.setText(this.name);
				time.addAttribute(attrClass, 'time');
				time.setText(this.time);
				recordDetail.addAttribute(attrClass, 'record-detail width100');
				recordDetail.setText(this.text);
				recordName.addChild(time);
				messageRecord.addChild(recordName);
				messageRecord.addChild(recordDetail);
				messageDiv.addChild(messageIcon);
				messageDiv.addChild(messageRecord);
				this.messageDiv = messageDiv;
				this.messageIcon = messageIcon;
				this.recordName = recordName;
				this.timeSpan = time;
				this.recordDetail = recordDetail;
			},
			editMessage:function() {
			},
			showMessage:function() {
			}
		}
		/*讯息类结束*/
		var first = new Message('1','2','3','4');
		first.createMessage();
		wrap.appendChild(first.messageDiv.getNode());
		var me = new Message('2','4','5','6');
		me.createMessage();
		wrap.appendChild(me.messageDiv.getNode());
	}());
}