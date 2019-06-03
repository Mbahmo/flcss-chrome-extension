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

function getServerID( url ){
	var siteUrl = url;
	// https://123456.findlaw2.flsitebuilder.com
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.');
	return slice2[1];
}

function renderSiteID(statusText) {
	document.getElementById('siteid').textContent = statusText;
}

function renderButton(siteID,serverID){
	document.getElementById('checklandingbtn').setAttribute( 'href', 'https://flcss.smplwp.com/site/' + siteID );
	document.getElementById('exportbtn').setAttribute( 'href', 'https://flcssgit.smplwp.com/?site=' + siteID + '&export' );
	document.getElementById('screenshotbtn').setAttribute( 'href', 'https://flcss.smplwp.com/site/' + siteID + '?v=screenshot' );
	document.getElementById('optionsbtn').setAttribute( 'href', 'https://'+ siteID +'.'+ serverID +'.flsitebuilder.com/wp-admin/admin.php?page=et_divi_options' );
	document.getElementById('librarybtn').setAttribute( 'href', 'https://'+ siteID +'.'+ serverID +'.flsitebuilder.com/wp-admin/edit.php?post_type=et_pb_layout' );
}

function generateCSSLink(siteID){
	var str	= document.getElementById('csslink').value; 
	var n		= str.replace("SITE_ID", siteID);
	document.getElementById("csslink").value=n;
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		var siteID 	= getSiteID(url);
		var serverID = getServerID(url);
		generateCSSLink(siteID);
		renderSiteID(siteID); 
		renderButton(siteID,serverID);
	});
});
