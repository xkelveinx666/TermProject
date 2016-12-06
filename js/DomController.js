/**
 * 
 * @authors CaiJinBiao
 * @date    2016-11-24 21:18:10
 * @version 1.0
 */
'use strict';
/*创建节点类*/
var Node = function(tag) {
	if (typeof(tag) === 'string') {
		this.node = document.createElement(tag);
	} else if (typeof(tag) === 'object') {
		this.node = tag;
	} else {
		alert('请用字符串或对象创建该对象');
		return null;
	}
}
Node.prototype = {
	constructor: Node,
	addAttribute: function(attrName, attrValue) {
		var node = this.node;
		if (attrName !== 'className') {
			node.setAttribute(attrName, attrValue);
		} else {
			var className = node.className;
			node.className = className + ' ' + attrValue;
		}
	},
	setText: function(text) {
		this.node.innerText = text;
	},
	getNode: function() {
		return this.node;
	},
	addChild: function(node) {
		if (!node instanceof Node) {
			alert('请传入一个Node对象');
		}
		this.node.appendChild(node.getNode());
	}
}
/*节点类结束*/