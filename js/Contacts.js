/**
 *
 * @authors CaiJinBiao
 * @date    2016-12-04 16:56:56
 * @version 1.0
 */
'use strict';
window.onload = function() {
	/*此JS文件用于生成Contacts*/
	(function(){
		/*联系人类开始*/
		var Contacts = function(img, text) {
			this.img = img;
			this.text = text;
		}
		Contacts.prototype = {
			constructor:Contacts,
			wrap:document.getElementById("wrap"),
			group:[],
			createContacts:function() {
				var	icon = new Node('img'),
					para = new Node('p'),
					text = document.createTextNode(this.text),
					textValue = this.text,
					outA = new Node('a'),
					attrClass = 'className';
				icon.addAttribute('src', this.img);
				para.addChild(icon);
				para.getNode().appendChild(text);
				outA.addAttribute('href', 'DetialInformation.html');
				outA.addChild(para);
				textValue = textValue.toLowerCase();
				Contacts.prototype.createDivide(textValue.charAt(0), outA);
			},
			createDivide:function(area, paraObj){
				var group = Contacts.prototype.group,
					wrap = Contacts.prototype.wrap,
					index = area.charCodeAt() - 'a'.charCodeAt(),
					area = null,
					nextindex = index;
				if(!group[index]) {
					group[index] = new Node('div');
					group[index].addAttribute('className', 'group');
					area = new Node('p');
					area.addAttribute('className', 'area');
					area.setText((String.fromCharCode(index + 'a'.charCodeAt())).toUpperCase());
					group[index].addChild(area);
					while(nextindex++ < 25) {
						if(group[nextindex]) {
							break;
						}
					}
					if(nextindex === 26) {
						wrap.appendChild(group[index].getNode());
					}
					else {
						wrap.insertBefore(group[index].getNode(), group[nextindex].getNode());
					}
				}
				group[index].addChild(paraObj);
				Contacts.prototype.group = group;
			},
		}
		/*联系人类结束*/
		var first1 = new Contacts('image/weixin.png','a一');
		first1.createContacts();
		var first2 = new Contacts('image/weixin.png','a二');
		first2.createContacts();
		var first4 = new Contacts('image/weixin.png','a四');
		first4.createContacts();
		var fourth1 = new Contacts('image/weixin.png','d一');
		fourth1.createContacts();
		var third1 = new Contacts('image/weixin.png','c一');
		third1.createContacts();
		var third2 = new Contacts('image/weixin.png','c二');
		third2.createContacts();
		var eleven1 = new Contacts('image/weixin.png','L一');
		eleven1.createContacts();
		var eight1 = new Contacts('image/weixin.png','H一');
		eight1.createContacts();
	}());
}