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
	document.getElementById('optionsbtn').setAttribute( 'href', 'https://'+ siteID +'.findlaw1.flsitebuilder.com/wp-admin/admin.php?page=et_divi_options' );
}

function generateCSSLink(siteID){
	var str	= document.getElementById('csslink').value; 
	var n		= str.replace("SITE_ID", siteID);
	document.getElementById("csslink").value=n;
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		var siteID 	= getSiteID(url);
		generateCSSLink(siteID);
		renderSiteID(siteID); 
		renderButton(siteID);
	});
});
