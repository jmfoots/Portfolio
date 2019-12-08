function createAboutPage(data) {
    var first = true;
    var title = '';
    var pre='';
    [].forEach.call(data.split("\n"), function(line) {
        if (first){
            title=line;
            var script = "document.querySelector(\'details[title=lightbox] > summary\').click()";
            document.querySelector('main').insertAdjacentHTML('beforeend', `
                <section title=grid>
                        <h2 title="Show ${line}" onclick="${script}">${line}</h2>
                </section>`);
            first=false;
        } else pre+=line+' ';
    });
    document.querySelector('details[title=lightbox]').insertAdjacentHTML('beforeend', `
        <section>
            <h2>${title}</h2>
            <p>${pre}</p>
        <section>`);
}