/**
 *
 * @authors CaiJinBiao (you@example.org)
 * @date    2016-12-04 10:15:27
 * @version 1.0
 */
window.onload = function() {
	(function() {
		var MainFrame = function(img) {
			this.img = img;
		};
		MainFrame.prototype = {
			constructor:MainFrame,
			messageButton:document.getElementById('message'),
			messageImg:null,
			concatButton:document.getElementById('concat'),
			concatImg:null,
			momentsButton:document.getElementById('moments'),
			momentsImg:null,
			iframeLeft:document.getElementById('iframeLeft'),
			iframeRight:document.getElementById('iframeRight'),
			getImage:function() {
				MainFrame.prototype.messageImg = MainFrame.prototype.messageButton.getElementsByTagName('img')[0];
				MainFrame.prototype.concatImg = MainFrame.prototype.concatButton.getElementsByTagName('img')[0];
				MainFrame.prototype.momentsImg = MainFrame.prototype.momentsButton.getElementsByTagName('img')[0];
				MainFrame.prototype.messageButton.style.color = '#018F44';
				MainFrame.prototype.messageImg.src="image/messageClick.png";
			},
			buttonEvent:function() {
				MainFrame.prototype.messageButton.onclick = function() {
					MainFrame.prototype.buttonChange(MainFrame.prototype.messageImg, 'message');
					MainFrame.prototype.activity('Message.html', 'Chat.html');
				};
				MainFrame.prototype.concatButton.onclick = function() {
					MainFrame.prototype.buttonChange(MainFrame.prototype.concatImg, 'contacts');
					MainFrame.prototype.activity('Contacts.html', 'DetialInformation.html');
				};
				MainFrame.prototype.momentsButton.onclick = function() {
					MainFrame.prototype.buttonChange(MainFrame.prototype.momentsImg, 'find');
					MainFrame.prototype.activity('Moments.html', 'PhotoGraph.html');
				};
			},
			activity:function(leftHtml, rightHtml) {
				MainFrame.prototype.iframeLeft.src = leftHtml;
				MainFrame.prototype.iframeRight.src = rightHtml;
			},
			buttonChange:function(button, img) {
				MainFrame.prototype.messageButton.style.color = '#FFFFFF';
				MainFrame.prototype.concatButton.style.color = '#FFFFFF';
				MainFrame.prototype.momentsButton.style.color = '#FFFFFF';
				MainFrame.prototype.messageImg.src="image/message.png";
				MainFrame.prototype.concatImg.src="image/contacts.png";
				MainFrame.prototype.momentsImg.src="image/find.png";
				button.parentNode.style.color = '#018F44';
				button.src = 'image/' + img + 'Click.png';
			},
			widthChange:function() {
				var origin = true;
				window.onresize = function() {
					var width = document.documentElement.clientWidth || window.innerWidth;
					if (width > 700 && !origin) {
						MainFrame.prototype.buttonChange(MainFrame.prototype.messageImg, 'message');
						MainFrame.prototype.activity('Message.html', 'Chat.html');
						origin = true;
					}
					else if(width < 700) {
						origin = false;
					}
				};
			}
		};
		var mf = new MainFrame('image/weixin.png');
		mf.getImage();
		mf.buttonEvent();
		mf.widthChange();
	})();
}
