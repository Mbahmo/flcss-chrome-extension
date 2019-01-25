var tabUrl = document.location.href;

// Only run if its findlaw site and not in admin
if(tabUrl.indexOf("findlaw1.flsitebuilder.com") >= 0 && tabUrl.indexOf("wp-admin") <= 1 && tabUrl.indexOf("wp-content") <= 1 ){

	console.log( 'FindLaw site detected' );

	var siteID = getSiteID( tabUrl );
	console.log( siteID );
	addcss(  );

	var link = document.createElement("link");
	link.href = "https://flcss.smplwp.com/site/"+ siteID +"/?l=css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);

}

function getSiteID( url ){
	var siteUrl = url;
	var slice1 = siteUrl.replace('https://', '');
	var slice2 = slice1.split('.', 1);
	var siteID	=	slice2[0];
	return siteID;
}

/**
 * Load CSS
 */
function addcss(css){
	var head = document.getElementsByTagName('head')[0];
	var s = document.createElement('style');
	s.setAttribute('type', 'text/css');
	s.setAttribute('href', css);
	if (s.styleSheet) {   // IE
	//s.styleSheet.cssText = css;
	} else {                // the world
	}
	head.appendChild(s);
}


//http://flcss.smplwp.com/site/3090097/?l=css