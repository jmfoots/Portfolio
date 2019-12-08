/*Navigation*/
function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, icon] = line.split(",");
        document.querySelector('nav').insertAdjacentHTML('beforeend', `
            <label title="${title}" class="fas fa-${icon}">
                <input type="radio" onclick="pages('${title}')"/>
            </label>`);
    });
}
/*Data*/
function loadData(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, src, alt] = line.split(",");
        var html = 'this.contentDocument.body.firstChild.innerHTML';
        document.querySelector('div[title=data]').insertAdjacentHTML('beforeend', `
            <iframe title=${title} src="${src}" onclick="create${title}(${html})"></iframe>`);
        /*Create Section*/
        var section = `document.querySelector('iframe[title=${title}]').click()`;
        document.querySelector('section[title=grid]').insertAdjacentHTML('beforeend', `
            <h2 title="Open ${alt}" onclick="${section}">${alt}</h2>`);
    });
}
/*Pages*/
function createbio(data) {
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var first = true;
    var [title, subtitle] = '';
    var pre='';
    /*Read Data*/
    [].forEach.call(data.split("\n"), function(line) {
        if (first){
            [title, subtitle]=line.split(",");
            first=false;
        } else pre+=line+' ';
    });
    /*Create Content*/
    document.querySelector('div[title=content]').insertAdjacentHTML('beforeend', `
            <header title='content'>
                <h1>${title}</h1>
                <h2>${subtitle}</h2>
            </header>
            <section title='content'>
                <p>${pre}</p>
            <section>`);
    /*Display Content*/
    
    lightbox.dispatchEvent(new Event('click'), new Event('touchend'));
}
