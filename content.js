var tabUrl = document.location.href;

// Only run if its findlaw site and not in admin
if(tabUrl.indexOf("findlaw1.flsitebuilder.com") >= 0 && tabUrl.indexOf("wp-admin") <= 1 && tabUrl.indexOf("wp-content") <= 1 ){
	var siteID = getSiteID( tabUrl );
	console.log( 'FindLaw site ' + siteID );
}

function getSiteID( url ){
	var siteUrl = url;
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.', 1);
	var siteID	=	slice2[0];
	return siteID;
}

function loadCss(url){
	var link 	= document.createElement("link");
	link.href 	= url;
	link.type 	= "text/css";
	link.rel 	= "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
}