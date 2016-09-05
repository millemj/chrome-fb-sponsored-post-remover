chrome.runtime.onMessage.addListener(function(msg) {
	console.log(msg);
	chrome.browserAction.setBadgeText ( { text: msg.adcount } );
});