
define(['./actions', './utilities', './replyButtonSvg'], function(ACTIONS, utilities, ReplyButtonSvg) {

	var ReplyButton = function() {
		this.observers = [];
		this.state = {
			hover: false
		};
		return this;
	}

	ReplyButton.BUTTON_STYLE =
		'position: absolute;'+
		'background-color: transparent;'+
		'border: none;'+
		'-webkit-appearance: none;'+
		'height: 20px;'+
		'width: 25px;'+
		'overflow: hidden;'+
		'position: relative;'+
		'fill: #586069;'+
		'color: inherit;';
	
	ReplyButton.prototype = {
	
		subscribe: function(observer) {
			this.observer = observer;
		},
	
		onClick: function(e) {
			var userName = this.getUserName(e);
			this.observer.notify(ACTIONS.clickReply, userName);
		},

		onMouseOver: function(e) {
			this.button.style.fill = '#0366d6';
		},

		onMouseOut: function(e) {
			this.button.style.fill = '#586069';			
		},
	
		getUserName: function(e) {
			var parentContainerClass = 'js-comment-container';
			var parent = utilities.findAncestor(e.target, parentContainerClass);
			var userNameNode = parent.querySelector('.author');
			var userName = userNameNode.text;
			return userName;
		},
	
		render: function() {
			this.button = document.createElement('button');
			this.button.className = 'reply-button-chrome-ext';
			this.button.onclick = this.onClick.bind(this);
			this.button.onmouseover = this.onMouseOver.bind(this);
			this.button.onmouseout = this.onMouseOut.bind(this);
			this.button.style = ReplyButton.BUTTON_STYLE;
			this.button.innerHTML = ReplyButtonSvg.render();

			return this.button;
		}
	};

	return ReplyButton;

});