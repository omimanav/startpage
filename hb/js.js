var listOfBookmarks = [];
window.onload = function() {
    document.getElementById("clock").innerHTML = getTime();
    /* ticktock */
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
    }, 100);
    
    $(".bmt, .bookmark").on({
		mouseenter: function() {
			$(this)
				.siblings()
				.addBack()
				.not(".bmt")
				.css({
					"font-size":"12pt"
					,"opacity":"1"
					,"background-color":"rgb(245, 254, 245, 1.0)"
				});
		}
		,mouseleave: function() {
			$(this)
				.siblings()
				.addBack()
				.not(".bmt")
				.css({
					"font-size":"0pt"
					,"opacity":"0"
					,"background-color":"rgb(245, 254, 245, 0.0)"
				});
		}
	});
	
	var bookmarks = document.getElementsByClassName("link");
	for (x = 0; x < bookmarks.length; x++) {
		listOfBookmarks.push(bookmarks[x].innerHTML);
	}
	// use array for autocomplete
}

function search(e) {
    if (e.keyCode == 13) {
        var val = $("#search").value;
        window.open("https://duckduckgo.com/?q=" + val);
    }
}

document.addEventListener("keydown", event => {
    if (![8, 9, 20, 32, 37, 38, 39, 40].includes(event.keyCode)) {
        $("#search").focus();
    }
    if (event.keyCode == 27) {
        $("#search").value = '';
    }
    var predictions = [];
    for (bm in listOfBookmarks) {
    	if ($("#search").value in bm) predictions.push(bm);
    }
});

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours(),
        todayDate = date.getDate(),
        todayMonth = date.getMonth(),
        todayYear = date.getFullYear();
    return "<span id='date'>" + todayDate + "/" + 
        (todayMonth + 1) + "/" +
        todayYear + "</span><br><span id='time'>" +
        (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" + 
        (sec < 10 ? ("0" + sec) : sec) + "</span>";
}
