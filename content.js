var tabUrl = document.location.href;

// Only run if its findlaw site and not in admin
if(tabUrl.indexOf("findlaw1.flsitebuilder.com") >= 0 && tabUrl.indexOf("wp-admin") <= 1 && tabUrl.indexOf("wp-content") <= 1 ){

	var source = document.head.querySelector("[name~=flcss_source][content]").content;

	console.log( 'FindLaw site ' + siteID );
	console.log( 'Source: ' + source );

	var siteID = getSiteID( tabUrl );

	/**
	 * If source is remote, load remote css
	 */
	if( source == 'remote' ){
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/general.css' );
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/header.css' );
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/footer.css' );
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/home.css' );
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/internal.css' );
		loadCss( 'https://flcssgit.smplwp.com/' + siteID + '/blog.css' );
	}

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