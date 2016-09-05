var adsRemoved = 0;

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    // console.log(mutations, observer);
    // ...
	var el = null;
	var elParent = null;
	var tn = null;
	var elAttr = null;
	var sponsoredLink = document.getElementsByClassName('uiStreamSponsoredLink');
	if(sponsoredLink.length !== 0) {
		do {
			el = sponsoredLink.item(0);
			do {
				elParent = el.parentNode;
				el = elParent;
				tn = el.tagName;
				if(tn === "BODY") {
					el = null;
				} else {
					elAttr = el.getAttribute("data-referrer");
					if(typeof elAttr == "string" 
					   && elAttr.indexOf("hyperfeed_story_id") === 0) {
						el.remove();
						adsRemoved++;
						console.log(adsRemoved+" ads removed");
						// chrome.runtime.sendMessage({"adcount": adsRemoved.toString() });
						el = null;
					}
				}
			} while (el !== null);
		} while  (sponsoredLink.length > 0);
	}
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});