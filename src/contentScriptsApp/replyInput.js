define(['./actions', './utilities'], function(ACTIONS, Utilities) {

	var ReplyInput = function(containerClassName, props) {	
		this.props = props;
		this.state = {
			show: false,
		};
		this.node = document.createElement('div');
		this.textareaNode = null;
		this.render();
		this.componentDidMount();
		return this;
	}
	
	ReplyInput.prototype = {
	
		notify: function(action, data) {
	
			if (action == ACTIONS.clickReply) {
				this.handleClickReply(data);		
			}
		},
	
		handleClickReply(data) {
			this.state.show = true;
			var replyValue = '';
			var quoteText = '';
			var quote = Utilities.getSelectedText();
			if (quote) {
				quoteText = '> ' + quote + '\n\n';
			}
			this.textareaNode.value = quoteText + '@' + data + ' ';
			this.render();
			this.textareaNode.focus();
		},
	
		componentDidMount() {
			this.node.appendChild(this.buildCommentNode());
		},
	
		buildCommentNode: function() {
			var commentNode = document.querySelector('form.js-new-comment-form').cloneNode(true);
			commentNode.addEventListener('submit', this.onSubmit.bind(this));
			this.textareaNode = commentNode.querySelector('textarea');
			return commentNode;
		},
	
		onSubmit: function() {
			this.state.show = false;
			const newComment = document.querySelector('.js-comment-container:last-child');
	
			window.setTimeout(function() {
				window.scroll(0, Utilities.findPos(newComment));
			}, 500);
			this.render();
		},
	
		render: function() {
			this.node.className = 'reply-input-chrome-ext';
			if (this.state.show) {
				this.node.style = 'display: block';
			} else {
				this.node.style = 'display: none';
			}
			return this.node;
		}
	};

	return ReplyInput;

});

