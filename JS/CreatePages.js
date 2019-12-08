function createAboutPage(data) {
    var first = true;
    var pre='';
    [].forEach.call(data.split("\n"), function(line) {
        if (first){
            document.querySelector('main').insertAdjacentHTML('beforeend', '<section><h2 onclick="document.querySelector(\'details[title=lightbox] > summary\').click()">'+line+'</h2></section>');
            first=false;
        } else pre +=line+' ';
    });
    document.querySelector('main > section').insertAdjacentHTML('beforeend', '<p>'+pre+'</p>');
}