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
                        <h2 title="Show ${line}" onclick="${script}">${line}</h2>
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