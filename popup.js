function getCurrentTabUrl(callback) {  
	var queryInfo = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function(tabs) {
		var tab = tabs[0]; 
		var url = tab.url;
		callback(url);
	});
}

function getTabUrl(){
	var queryInfo = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function(tabs) {
		var tab = tabs[0]; 
		var url = tab.url;
	});
	return url;
}

function getSiteID( url ){
	var siteUrl = url;
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.', 1);
	var siteID	=	slice2[0];
	return siteID;
}

function renderSiteID(statusText) {
	document.getElementById('siteid').textContent = statusText;
}

function renderButton(siteID){
	document.getElementById('exportbtn').setAttribute( 'href', 'https://flcssgit.smplwp.com/?site=' + siteID + '&export' );
	document.getElementById('screenshotbtn').setAttribute( 'href', 'https://flcss.smplwp.com/site/' + siteID + '?v=screenshot' );
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		var siteID 	= getSiteID(url);
		
		/*
		var source 	= document.head.querySelector("[name~=flcss_source][content]").content;
		if( source == 'remote' ){
			document.getElementById('flcss-status').innerHTML( 'YES' );
		} else {
			document.getElementById('flcss-status').innerHTML( 'NO' );
		}
		*/

		renderSiteID(siteID); 
		renderButton(siteID);
	});
});
