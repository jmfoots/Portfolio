function createAboutPage(data) {
    var first = true;
    var pre='';
    [].forEach.call(data.split("\n"), function(line) {
        if (first){
            var script = "document.querySelector(\'details[title=lightbox] > summary\').click()";
            document.querySelector('main').insertAdjacentHTML('beforeend', `
                <section>
                    <h2 title="Show ${line}" class="fas fa-expand" onclick=${script}>${line}</h2>
                </section>`);
            first=false;
        } else pre+=line+' ';
    });
    document.querySelector('main > section').insertAdjacentHTML('beforeend', `<p>${pre}</p>`);
}