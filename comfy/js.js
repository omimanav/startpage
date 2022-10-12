const sites = [
		"thehiddenbay"
		,"facebook"
		,"twitter"
		,"pinterest"
		,"yahoo"
		,"linkedin"
		,"youtube"
		,"github"
		,"instagram"
		,"reddit"
		,"dezgo"
		,"gmail"
		,"outlook"
		,"photopea"
		,"icloud"
		,"couchsurfing"
		,"airbnb"
		,"indeed"
		,"pdfdrive"
		,"askubuntu"
		,"neodebrid"
		,"trademe.nz"
		,"mega.nz"
		,"yewtu.be"
		,"libgen.is"
		,"waifu2x.udp.jp"
		,"exif.regex.info/exif.cgi"
		,"pixelpeeper.io"
		,"snapdrop.net"
		,"sharedrop.io"
		,"deepbrid.com/service"
		,"canvas.auckland.ac.nz"
];

document.addEventListener("keydown", event => {
	updateSuggestions(event.key, document.getElementById("search").value, sites);
	if (![8, 9, 20, 32, 37, 38, 39, 40].includes(event.keyCode)) {
		document.getElementById("search").focus();
	}
	if (event.keyCode == 27) {
		document.getElementById("search").value = "";
	}
});

function linkup(val, sites) {
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
	} else if (val[0] == "r" && val[1] == "/") {
		console.log("testing chan");
		window.open(`https://reddit.com/${val}`, "_self");
	} else if (website) {
		domain = website.indexOf(".") == -1 ? ".com" : "";
		url = `http://${website+domain}`;
		window.open(url, "_self");
	} else {
		window.open(`https://duckduckgo.com/?q=${val}`, "_self");
	}
}

function updateSuggestions(key, term, sites) {
	document.getElementById("suggestions").innerHTML = "";
	for (site of sites) {
		if (site.indexOf(term+key) > -1) {
			document.getElementById("suggestions").innerHTML += `<a href="https://${(site.indexOf(".") > -1) ? site : site+".com"}" class="suggestion">${site}</a>`;
		}
	}
}

function search(e) {
	if (e.keyCode == 13) {
		var val = document.getElementById("search").value;
		if (val.trim().indexOf(".") > -1 && val.indexOf(" ") == -1) {
			window.open(`https://${val.trim()}`, "_self");
		} else {
			linkup(val, sites);
		}
		return 1;
	}
}

document.getElementById("search").focus();
document.getElementById("search").addEventListener("keypress", (e) => search(e));

var datetime = new Date()
,day = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
var time = `${datetime.getHours()}:${datetime.getMinutes() > 9 ? datetime.getMinutes() : "0"+datetime.getMinutes()}`
,date = `${day[datetime.getDay()]} ${datetime.getDate()}/${datetime.getMonth()+1}`
document.getElementById("greetings").innerHTML = `It's currently ${time}, ${date}. Hope you're doing well.`;
