/*
				    .ooooo.          ooo. .oo.     .ooooo.    oooo d8b
				   d88" `88b         `888P"Y88b   d88" `88b   `888""8P
				   888888888  88888   888   888   888   888    888
				   888        88888   888   888   888   888    888
				   `"88888"          o888o o888o  `Y8bod8P"   d888b

***********************************************************************************************************
Copyright 2013 by E-Nor Inc.
Author Ahmed Awwad.
Automatically tag links for Google Tag Manager to track file downloads, outbound links, and email clicks.
Automatically tag links for Google Tag Manager to simplify tracking across domains.
Version: 1.4: Fire an "eloqua event" anytime a download is clicked along with GA Event.
Last Updated: 7/17/2013
***********************************************************************************************************/
function trackClick(link) {
    _gaq.push(['_trackEvent', link.getAttribute('category'), link.getAttribute('action'), link.getAttribute('label')]);
    setTimeout(window.open(link.href, '_blank'), 150);
}

function trackLink(link) {
    _gaq.push(['_link', link.href]);
    setTimeout(function(){ document.location = link.href; }, 150);
}

var domains_to_track = ["altera.com", "altera.co.jp", "altera.com.cn", "buyaltera.com"];
var extDoc = [".doc",".docx",".xls",".xlsx",".xlsm",".ppt",".pptx",".exe",".zip",".pdf",".js",".txt",".csv",".rdf",".xml",".tar",".iso",".qdz",".run",".bsx",".gz",".qar",".rpm"];
var mainDomain = document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
mainDomain = mainDomain.toLowerCase();
var arr = document.getElementsByTagName("a");
for(i=0; i < arr.length; i++)
 {
	var flag = 0;
	var flagExt = 0;
	var tmp = arr[i].getAttribute("onclick");
	var doname ="";
	var mailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
	var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	if(mailPattern.test(arr[i].href) || urlPattern.test(arr[i].href))
	{
		try
		 {
			doname = arr[i].hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
			doname = doname.toLowerCase();
		 }
		catch(err)
		 {
			doname = arr[i].href;
			doname = doname.toLowerCase();
		 }
	}
	else
	{
		continue;
	}

	if (tmp != null)
	{
		tmp = String(tmp);
		if (tmp.indexOf('_gaq.push') > -1)
		continue;
	}
	//Internal Links
	if(doname == mainDomain || doname.indexOf(mainDomain) != -1)
		{
			// Tracking email clicks
			if (arr[i].href.toLowerCase().indexOf("mailto:") != -1)
			{
				var gaUri = arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
				arr[i].setAttribute('category', 'email clicks');
				arr[i].setAttribute('action', 'click');
				arr[i].setAttribute('label', gaUri);
				arr[i].onclick = function() { trackClick(this); return false; };
			}

			else if(arr[i].href.toLowerCase().indexOf("mailto:") == -1)
			{

				for(var j = 0; j < extDoc.length; j++)
				{
					var arExt = arr[i].href.split(".");
					var ext = arExt[arExt.length-1].split(/[#?]/);
					if("."+ext[0].toLowerCase() == extDoc[j])
					{
						// Tracking electronic documents - doc, xls, pdf, exe, zip
						var intGaUri = arr[i].href.split(doname);
						var gaUri = intGaUri[1].split(extDoc[j]);
						arr[i].setAttribute('category', 'assets');
						arr[i].setAttribute('action', 'download');
						arr[i].setAttribute('label', gaUri[0] + extDoc[j]);
						arr[i].onclick = function() { trackClick(this); return false; };
						break;
					}

				}

			}

		}

	// External Link
	else if(doname != mainDomain && doname.indexOf(mainDomain) == -1)
	{
		for (var k = 0; k < domains_to_track.length; k++)
		{
			if(doname.indexOf(domains_to_track[k]) == -1)
			{
				flag++;
				if(flag == domains_to_track.length)
				{
					if(arr[i].href.toLowerCase().indexOf("mailto:") == -1)
					{
						// Tracking outbound links off site
						var gaUri = arr[i].href.split("//");

                                                // Commented out because breaking links in tables in AEM
                                                // arr[i].setAttribute('category', 'outbound links');
						// arr[i].setAttribute('action', 'click');
						// arr[i].setAttribute('label', gaUri[1]);
						// arr[i].onclick = function() { trackClick(this); return false; };
					}
				}
			}
			else if(doname.indexOf(domains_to_track[k]) != -1 && arr[i].href.toLowerCase().indexOf("mailto:") == -1)
			{
				for(var l = 0; l < extDoc.length; l++)
				{
					var arExt = arr[i].href.split(".");
					var ext = arExt[arExt.length-1].split(/[#?]/);
					if("."+ext[0].toLowerCase() == extDoc[l])
					{
						// Tracking electronic documents - doc, xls, pdf, exe, zip
						var intGaUri = arr[i].href.split(doname);
						var gaUri = intGaUri[1].split(extDoc[l]);
						arr[i].setAttribute('category', 'assets');
						arr[i].setAttribute('action', 'download');
						arr[i].setAttribute('label', gaUri[0] + extDoc[l]);
						arr[i].onclick = function() { trackClick(this); return false; };
						break;
					}
					else if("."+ext[0].toLowerCase() != extDoc[l])
					{
						flagExt++;
						if(flagExt == extDoc.length)
						{
							//Auto-Linker
							arr[i].onclick = function() { trackLink(this); return false; };
						}
					}
				}
			}
			else if(doname.indexOf(domains_to_track[k]) != -1 && arr[i].href.toLowerCase().indexOf("mailto:") != -1)
			{
				var gaUri = arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
				arr[i].setAttribute('category', 'email clicks');
				arr[i].setAttribute('action', 'click');
				arr[i].setAttribute('label', gaUri);
				arr[i].onclick = function() { trackClick(this); return false; };
			}
		}
	}
 }
