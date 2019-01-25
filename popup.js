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

function renderEditButton(siteID){
	document.getElementById('editbtn').setAttribute( 'href', 'https://flcss.smplwp.com/site/' + siteID );
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		var siteID = getSiteID(url);
		renderSiteID(siteID); 
		renderEditButton(siteID);
	});



});
