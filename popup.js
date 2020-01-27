jQuery('#btn-copy').click(function(){
	reformat();
	var data = jQuery('#result');

	if (data != "") {
		data.select();
		document.execCommand("copy");
	}
});
jQuery('#btn-typo').click(function(){
var typography = '<h1>This is markup test template, and this is H1</h1><p>This is normal paragraph, with a <a href="#">Hyperlink</a> that you <strong>might want (see i am bold)</strong> to check how it looks if you hover it, <a href="#">here is another link</a> in case you missed the first hyperlink.</p><h2>This is H2</h2><p>Normal short paragraph</p><p class="callOut">This paragraph is actually a blockquote in original site but they will look like normal paragraphy in new site and thats ok</p><blockquote>And then THIS PARAGRAPH is the real blockquote that should have the same design with how the old blockquote looks in original site</blockquote><ul><li>Normal UL LI list</li><li>Check the margin/padding</li><li>Make sure it have same bullet as original site</li></ul><h3>Another H3 Heading</h3><h4>Another H4 Heading</h4>';
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.executeScript(
		tabs[0].id,
		{
			code: "$('.content').append(" +"'" +typography+ "'" + "); + "
			+ "$('#content').append(" +"'" +typography+ "'" + "); + " 
			+ "$('.fl-main-content').not('.fl-main-content-title').append(" +"'" +typography+ "'" + ");"
		});
  });
});

function reformat(){
var text = jQuery('#url').val();

	if (text != "") {

		text = text.toLowerCase();

		//check if url contain domain

		var url = text;
		var hostname;

		//find & remove protocol (http, ftp, etc.) and get hostname

		if (url.indexOf("//") > -1) {
			hostname = url.split('/')[2];
		}
		else {
			hostname = url.split('/')[0];
		}


		//find & remove host and port number
		hostname = hostname.split(':')[0];

		if (hostname != "") {
			const url        = text;
			const lookingFor = hostname;
			const replaced   = url.substring(url.indexOf(lookingFor) + lookingFor.length);
			text = replaced;
		}


		//check / at first and last character
		if (text.charAt(0) != "/") {
			text = "/" + text;
		}

		if (text.slice(-1) != "/") {
			text = text + "/";
		}


		//remove .shtml or html
		text = text.replace(".shtml", "");
		text = text.replace(".html", "");


		jQuery('#result').html(text);

		return true;
	} else {
		return false;
	}
}
jQuery('#form-url').on('submit', function (e) {
	e.preventDefault();
	reformat();
});
function getCurrentTabUrl(callback) {
	var queryInfo = {
		active: true,
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function (tabs) {
		var tab = tabs[0];
		var url = tab.url;
		callback(url);
	});
}

function getTabUrl() {
	var queryInfo = {
		active: true,
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function (tabs) {
		var tab = tabs[0];
		var url = tab.url;
	});
	return url;
}

function getSiteID(url) {
	var siteUrl = url;
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.', 1);
	var siteID = slice2[0];
	return siteID;
}

function getServerID(url) {
	var siteUrl = url;
	// https://123456.findlaw2.flsitebuilder.com
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.');
	return slice2[1];
}

function renderSiteID(statusText) {
	document.getElementById('siteid').textContent = statusText;
}

function renderButton(siteID, serverID) {
	document.getElementById('checklandingbtn').setAttribute('href', 'https://flcss.smplwp.com/site/' + siteID);
	document.getElementById('exportbtn').setAttribute('href', 'https://flcssgit.smplwp.com/?site=' + siteID + '&export');
	document.getElementById('screenshotbtn').setAttribute('href', 'https://flcss.smplwp.com/site/' + siteID + '?v=screenshot');
	document.getElementById('optionsbtn').setAttribute('href', 'https://' + siteID + '.' + serverID + '.flsitebuilder.com/wp-admin/admin.php?page=et_divi_options');
	document.getElementById('librarybtn').setAttribute('href', 'https://' + siteID + '.' + serverID + '.flsitebuilder.com/wp-admin/edit.php?post_type=et_pb_layout');
	document.getElementById('redirectionsbtn').setAttribute('href', 'https://' + siteID + '.' + serverID + '.flsitebuilder.com/wp-admin/tools.php?page=redirection.php');
	document.getElementById('jsonldbtn').setAttribute('href', 'https://' + siteID + '.' + serverID + '.flsitebuilder.com/wp-admin/options-general.php?page=options-general-php-json-ld');
}

function generateCSSLink(siteID, serverID) {
	var str = document.getElementById('csslink').value;
	var n = str.replace("SITE_ID", siteID);
	var o = n.replace("SERVER_ID", serverID);
	document.getElementById("csslink").value = o;
}

document.addEventListener('DOMContentLoaded', function () {
	getCurrentTabUrl(function (url) {
		var siteID = getSiteID(url);
		var serverID = getServerID(url);
		generateCSSLink(siteID, serverID);
		renderSiteID(siteID);
		renderButton(siteID, serverID);
	});
});
