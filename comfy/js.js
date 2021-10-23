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
		window.open(url, "_self");
	} else if (val[0] == "/") {
		console.log("testing chan");
		window.open(`https://4chan.org${val}catalog`, "_self");
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

document.getElementById("search").focus();
document.getElementById("search").addEventListener("keypress", (e) => search(e));

const data = null;

var symbols = "AAPL,AMC,BABA,BNTX,BP,DIDI,GME,HOOD, MDVL,MRNA,MSFT,NVAX,PFE,RKLB,ZIM,AIR.NZ,FBU.NZ,FRE.NZ,FPH.NZ,NWF.NZ,PEB.NZ,RBD.NZ,WBC.NZ,ZEL.NZ";

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const result = JSON.parse(this.responseText).quoteResponse.result;
		for (var ticker in result) {
			var symbol = result[ticker]["symbol"]
			,price = `${result[ticker]["currency"]} ${result[ticker]["regularMarketPrice"]}`
			,range = `${result[ticker]["regularMarketDayRange"]}`;
			
			document.getElementById("tickers").innerHTML += 
			`<a href="https://finance.yahoo.com/quote/${symbol}" class="card">
			<b class="symbol">${symbol}</b>
			<br>
			<b class="price">${price}</b>
			<br>
			<i class="range">${range}</i>
			</a>`;
		} 
	}
});

xhr.open("GET", `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${symbols}`);
xhr.setRequestHeader("x-rapidapi-key", "facb608fc8mshf405870d0d2eb4fp14ddafjsn5c8408c45de7");
xhr.setRequestHeader("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com");

xhr.send(data);


var datetime = new Date()
,day = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
var time = `${datetime.getHours()}:${datetime.getMinutes()}`
,date = `${day[datetime.getDay()]} ${datetime.getDate()}/${datetime.getMonth()+1}`
document.getElementById("greetings").innerHTML = `It's currently ${time}, ${date}. Hope you're doing well.`;