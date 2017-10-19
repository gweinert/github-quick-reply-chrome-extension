
requirejs(['contentScriptsApp/replyButton', 'contentScriptsApp/replyInput'], function(ReplyButton, ReplyInput) {
	
	var ContentScript = function() {
		this.addMessageListener();
		this.injectNodes();
	};
	
	ContentScript.prototype = {
		
		addMessageListener: function() {
			chrome.runtime.onMessage.addListener(function(mes, sender) {			
				if (mes.action === 'updated') {
					this.injectNodes();
				}
			}.bind(this));
		},
	
		injectNodes: function() {
			var replyButtonsExist = document.querySelector('.reply-button-chrome-ext');
			
			if (!replyButtonsExist) {
				var commentContainers = document.querySelectorAll('.js-comment-container');
				commentContainers.forEach(function(commentContainer) {
					var commentHeaderActionContainer = commentContainer.querySelector('.timeline-comment-actions');
					var replyButtonNode = new ReplyButton();
					var replyInputNode = new ReplyInput();
					replyButtonNode.subscribe(replyInputNode);
		
					if (commentHeaderActionContainer) {
						var toInsertBefore = commentHeaderActionContainer.childNodes[5];
						commentHeaderActionContainer.insertBefore(replyButtonNode.render(), toInsertBefore);
					}
					commentContainer.appendChild(replyInputNode.render());	
				});
			}
		},
	
	};
	var cs = new ContentScript();
});
