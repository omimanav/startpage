document.addEventListener("keydown", event => {
	if (![8, 9, 20, 32, 37, 38, 39, 40].includes(event.keyCode)) {
		document.getElementById('search').focus();
	}
	if (event.keyCode == 27) {
		document.getElementById('search').value = '';
	}
});

function linkup(val) {
	const sites = [
		'thehiddenbay'
		,'facebook'
		,'twitter'
		,'pinterest'
		,'yahoo'
		,'linkedin'
		,'youtube'
		,'github'
		,'instagram'
		,'reddit'
		,'gmail'
		,'outlook'
		,'icloud'
		,'couchsurfing'
		,'airbnb'
		,'indeed'
		,"neodebrid"
		,'pdfdrive'
		,'trademe.nz'
		,'mega.nz'
		,'yewtu.be'
		,'libgen.is'
		,'waifu2x.udp.jp'
		,'exif.regex.info/exif.cgi'
		,'pixelpeeper.io'
		,'snapdrop.net'
		,'sharedrop.io'
		,'deepbrid.com/service'
		,'canvas.auckland.ac.nz'
	];

	let website,domain;
	for (site of sites) {
		if (site.indexOf(val) > -1) {website=site; break;}
	}

	//	if board: goto board
	//	else if website: goto website
	//	else search on ddg
	if (val[0] == "/") {
		console.log("testing chan");
		window.open(`https://4chan.org${val}catalog`, "_self");
	} else if (website) {
		domain = website.indexOf(".") == -1 ? ".com" : "";
		url = `http://${website+domain}`;
		window.open(url, "_self");
	} else {
		window.open(`https://duckduckgo.com/?q=${val}`, "_self");
	}
}

function search(e) {
	console.log(e);
	if (e.keyCode == 13) {
		var val = document.getElementById("search").value;
		if (val.trim().indexOf(".") > -1 && val.indexOf(" ") == -1) {
			window.open(`https://${val.trim()}`, "_self");
		} else {
			linkup(val);
		}
		return 1;
	}
}
