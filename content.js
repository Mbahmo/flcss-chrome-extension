var tabUrl = document.location.href;

// Only run if its findlaw site and not in admin
if(tabUrl.indexOf("findlaw1.flsitebuilder.com") >= 0 && tabUrl.indexOf("wp-admin") <= 1 && tabUrl.indexOf("wp-content") <= 1 ){
	var siteID = getSiteID( tabUrl );
	console.log( 'FindLaw site ' + siteID );
} else {
	
	jQuery('html').prepend('<style>@media(max-width:980px){ .typographyPopup { margin-left: 0 !important; width: 100% !important; position:absolute !important; top: 0 !important; left: 0 !important; padding: 10px !important; } }</style>');
	jQuery('body').append('<a href="#" id="checkTypography" style="font-size: 12px;padding: 10px 15px;font-weight: bold;border-radius: 4px;background-color:#2ecc71;color:#fff;position:fixed;z-index: 999999;opacity: 0.4;bottom: 10px;text-decoration: none;left: 10px;">T</a>');
	
	jQuery(document).ready(function ($) {
		$('body').on('click', '#checkTypography', function(e){
			e.preventDefault();
			checkTypography();
		});
	});

	function checkTypography(){
			var containerWidth = jQuery('.container-columns').width();
			var headingFontFamily = jQuery('h1.page-title').css('font-family');
	
			var headingFontSize = jQuery('h1.page-title').css('font-size');
			var headingFontSizeCalc = headingFontSize.toString().replace('px', '');
	
			var headingFontWeight = jQuery('h1.page-title').css('font-weight');
	
			var headingLineHeightpx = jQuery('h1.page-title').css('line-height');
			if( headingLineHeightpx == 'normal' ){
				headingLineHeight = 1;
			} else {
				var headingLineHeightCalc = headingLineHeightpx.toString().replace('px','');
				var headingLineHeight = headingLineHeightCalc/headingFontSizeCalc;
			}
			
	
			var headingLetterSpacing = jQuery('h1.page-title').css('letter-spacing');
			var headingColor = jQuery('h1.page-title').css('color');
	
			var textFontFamily = jQuery('.content p').css('font-family');
			var textFontSize = jQuery('.content p').css('font-size');
			var textFontSizeCalc = textFontSize.toString().replace('px', '');
	
			var textFontWeight = jQuery('.content p').css('font-weight');
	
			var textLineHeightpx = jQuery('.content p').css('line-height');
	
			if( textLineHeightpx == 'normal' ){
				textLineHeight = 1;
			} else {
				var textLineHeightCalc = textLineHeightpx.toString().replace('px', '');
			var textLineHeight = textLineHeightCalc/textFontSizeCalc;
			}
			var textLetterSpacing = jQuery('.content p').css('letter-spacing');
			var textColor = jQuery('.content p').css('color');
	
			jQuery('body').append('<div style="position:fixed; width: 100%; height: 100%; background: rgba(0,0,0,0.6); left: 0; top: 0;"></div>');
			jQuery('body').append('<div class="typographyPopup"  style="position:fixed; width: 600px; height: auto; top: 0; left: 50%; margin-left: -300px; z-index:9999; background: #fff; padding: 30px 40px; border-radius:4px; margin-top: 10vh;"><h1>Site Width: ' + containerWidth + 'px</h1><h1>Heading</h1><ul style="font-size: 20px;"><li>Font Family: '+ headingFontFamily +'</li><li>Font Size: '+ headingFontSize +'</li><li>Font Weight: '+ headingFontWeight +'</li><li>Line Height: '+ headingLineHeight +'</li><li>Letter Spacing: '+ headingLetterSpacing +'</li><li>Color: '+ headingColor +'</li></ul><h1>Text Content</h1><ul style="font-size: 20px;"><li>Font Family: '+ textFontFamily +'</li><li>Font Size: '+ textFontSize +'</li><li>Font Weight: '+ textFontWeight +'</li><li>Line Height: '+ textLineHeight +'</li><li>Letter Spacing: '+ textLetterSpacing +'</li><li>Color: '+ textColor +'</li></ul></div>');
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