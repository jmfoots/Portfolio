function readData(file) {
    var req = new XMLHttpRequest();
    req.open("GET", file, false);
    req.responseType = 'text';
    req.onreadystatechange = function() {
        if(req.readyState === req.DONE){
            if (req.status === 200) {
                return req.responseText;
            }
        }
    }; req.send(null);
}