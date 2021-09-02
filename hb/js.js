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
		,'pdfdrive'
		,'trademe.nz'
		,'mega.nz'
		,'invidio.us'
		,'libgen.is'
		,'waifu2x.udp.jp'
		,'exif.regex.info/exif.cgi'
		,'pixelpeeper.io'
		,'snapdrop.net'
		,'sharedrop.io'
	];
	
	let website,domain;
	for (site of sites) {
		if (site.indexOf(val) > -1) {website=site; break;}
	}
	
	//	if website: goto website
	//	else if board: goto board
	//	else search on ddg
	if (website) {
		domain = website.indexOf(".") == -1 ? ".com" : "";
		url = `http://${website+domain}`;
		window.open(url);
	} else if (val[0] == "/") {
		console.log("testing chan");
		window.open(`https://4chan.org${val}catalog`);
	} else {
		window.open(`https://duckduckgo.com/?q=${val}`);
	}
}

function search(e) {
	console.log(e);
	if (e.keyCode == 13) {
		var val = document.getElementById("search").value;
		if (val.trim().indexOf(".") > -1 && val.indexOf(" ") == -1) {
			window.open(`https://${val.trim()}`);
		} else {
			linkup(val);
		}
		return 1;
	}
}

document.getElementById("search").focus();
document.getElementById("search").addEventListener("keypress", (e) => search(e));

/*
const data = null;
const symbols = ["AAPL", "PM", "AIR.NZ", "RAK.NZ", "NWF.NZ", "PEB.NZ"].join(",");

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const result = JSON.parse(this.responseText).quoteResponse.result;
		for (var ticker in result) {
			var market = result[ticker]["fullExchangeName"]
			,company = result[ticker]["longName"]
			,symbol = result[ticker]["symbol"]
			,price = `${result[ticker]["currency"]} ${result[ticker]["regularMarketPrice"]}`
			,range = `${result[ticker]["currency"]} ${result[ticker]["regularMarketDayRange"]}`;
			
			document.getElementById("watchlist").innerHTML += 
			`<span class="card">
			<i class="market">${market}</i>
			<b class="company">${company}</b>
			<b class="symbol">${symbol}</b>
			<b class="price">${price}</b>
			<i class="range">${range}</i>
			</span>`;
		} 
	}
});

xhr.open("GET", `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbols}`);
xhr.setRequestHeader("x-rapidapi-key", "5fdb4bc5e4msh8a96cdebe86ec02p10314bjsn20ce4cb4e867");
xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");

xhr.send(data);
*/
