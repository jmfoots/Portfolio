function readData(file) {
    var req = new XMLHttpRequest();
    req.open("GET", file, false);
    req.onreadystatechange = function() {
        if(req.readyState === 4 && req.status === 200) {
            return req.responseText
        } else return "";
    }; req.send(null);
}