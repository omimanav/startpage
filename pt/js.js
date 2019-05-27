window.onload = function() {
    document.getElementById("clock").innerHTML = getTime();
    /* ticktock */
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
    }, 100);
}

function search(e) {
    if (e.keyCode == 13) {
        var val = document.getElementById("search").value;
        window.open("https://duckduckgo.com/?q=" + val);
    }
}

document.addEventListener("keydown", event => {
    if (![8, 9, 20, 32, 37, 38, 39, 40].includes(event.keyCode)) {
        document.getElementById('search').focus();
    }
    if (event.keyCode == 27) {
        document.getElementById('search').value = '';
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
    return "" + todayDate + "/" + 
        (todayMonth + 1) + "/" +
        todayYear + " " +
        (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" + 
        (sec < 10 ? ("0" + sec) : sec);
}