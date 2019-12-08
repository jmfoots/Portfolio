/*Pages*/
function createAboutPage(data) {
    var first = true;
    var [title, subtitle] = '';
    var pre='';
    [].forEach.call(data.split("\n"), function(line) {
        if (first){
            [title, subtitle]=line.split(",");
            var script = "document.querySelector(\'details[title=lightbox] > summary\').click()";
            document.querySelector('main').insertAdjacentHTML('beforeend', `
                <section title=grid>
                        <h2 title="Show ${subtitle}" onclick="${script}">${subtitle}</h2>
                </section>`);
            first=false;
        } else pre+=line+' ';
    });
    document.querySelector('details[title=lightbox]').insertAdjacentHTML('beforeend', `
        <div title='content'>
            <header title='content'>
                <h1>${title}</h1>
                <h2>${subtitle}</h2>
            </header>
            <section title='content'>
                <p>${pre}</p>
            <section>
        </div>`);
}
/*Navigation*/
function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, icon] = line.split(",");
        document.querySelector('nav').insertAdjacentHTML('beforeend', `
            <label title="${title}" class="fas fa-${icon}">
                <input type="radio" name="menu" id="${title}" onclick="pages(this.id)"/>
            </label>`);
    });
}