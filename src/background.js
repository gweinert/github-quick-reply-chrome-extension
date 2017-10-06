var Background = function() {
	
	var run = function() {
		addTabListener();
	}

	var addTabListener = function() {
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		
			if (tab.status === 'complete') {
				chrome.tabs.sendMessage(
					tab.id,
					{
						action: 'updated',
						changeInfo,
					},
					(res) => {
						console.log('res', res);
					},
				);
			}
		});
	}

	return {
		run: run
	};

};

var b = new Background();
b.run();
