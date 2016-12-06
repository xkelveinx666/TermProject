/**
 *
 * @authors CaiJinBiao
 * @date    2016-11-28 13:21:27
 * @version 1.0
 */
window.onload = function() {
	(function() {
		var ContentMessage = function(side, img, text) {
			this.side = side;
			this.img = img;
			this.text = text;
			this.wrapDiv;
			this.logo;
			this.para;
		};
		ContentMessage.prototype = {
			constructor:ContentMessage,
			content:document.getElementById('content'),
			createMessage:function() {
				if(this.text === "") {
					retrun;
				}
				var side = this.side;
					wrapDiv = new Node('div'),
					logo = new Node('img');
					para = new Node('p');
				wrapDiv.addAttribute('className', 'content-message' + side + '  clearfix');
				logo.addAttribute('className', 'message' + side + '-pic');
				logo.addAttribute('src', this.img);
				para.addAttribute('className', 'message' + side + '-text');
				para.setText(this.text);
				wrapDiv.addChild(logo);
				wrapDiv.addChild(para);
				ContentMessage.prototype.content.appendChild(wrapDiv.getNode());
				ContentMessage.prototype.content.scrollTop = ContentMessage.prototype.content.scrollHeight;
			}
		};
		var InputText = function() {
			this.face = document.getElementById('footer-face');
			this.text = document.getElementById('footer-text');
			this.send = document.getElementById('footer-send');
		};
		InputText.prototype = {
			constructor:InputText,
			sendMessage:function() {
				var text = this.text;
				var side = null;
				var img = null;
				this.send.onclick = function() {
					var value = text.value;
					if(Math.random() * 10 < 5) {
						side = 'Left';
						img = 'image/weixin.png'
					}
					else {
						side = 'Right';
						img = 'image/user1.jpg'
					}
					var cm = new ContentMessage(side, img, value);
					cm.createMessage();
					text.value = "";
				}
			}
		};
		var Navigator = function() {
			this.nav = document.getElementById('nav');
			this.name = document.getElementById('name-span');
			this.option = document.getElementById('nav-option');
			this.groupButton = document.getElementById('group-pic');
			this.endFlag = true;
		}
		Navigator.prototype = {
			constructor:Navigator,
			showNav:function(navigator, obj) {
				var nav = navigator||this.nav;
				var navObj = obj || this;
				if(navObj.endFlag === true) {
					var i = 0;
					var t = setInterval(function() {
						nav.style.right = -(360 - i) + 'px';
						i += 28;
						navObj.endFlag = false;
						if(i >= 360) {
							nav.style.right = '0';
							clearInterval(t);
							navObj.endFlag = true;
						}
					},15);
				}
			},
			hideNav:function() {
				var nav = this.nav;
				nav.style.rihgt = '0';
				var navObj = this;
				nav.onmouseleave = function() {
					if(navObj.endFlag === true) {
						var i = 0;
						var t = setInterval(function() {
							nav.style.right = -i + 'px';
							i += 28;
							navObj.endFlag = false;
							if(i >= 360) {
								nav.style.right = '-360px';
								clearInterval(t);
								navObj.endFlag = true;
							}
						},15);
					}
				}
			},
			outNav:function() {
				var button = this.groupButton;
				var nav = this.nav;
				var obj = this;
				button.onclick = function() {
					Navigator.prototype.showNav(nav, obj);
				};
			},
			optionButton:function() {
				var option = this.option;
				var para = option.getElementsByTagName('p');
				var i = 0, max = 0;
				for(i = 0,max = para.length;i < max;i++) {
					var span = para[i].getElementsByTagName('span')[0];
					span.onclick = function() {
						var spanbackground = this.getElementsByTagName('span')[0];
						var spanCirlce = this.getElementsByTagName('span')[1];
						if(spanbackground.className.length < 20) {
							spanbackground.className += ' button-backgroundClick';
							spanCirlce.className += ' button-circleClick';
						}
						else {
							spanbackground.className = ' button-background';
							spanCirlce.className = ' button-circle';
						}
					}
				}
			}
		}
		var it = new InputText();
		it.sendMessage();
		var nav = new Navigator();
		nav.outNav();
		nav.hideNav();
		nav.optionButton();
	})();
}
