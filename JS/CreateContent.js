/*Navigation*/
function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, icon] = line.split(",");
        document.querySelector('nav').insertAdjacentHTML('beforeend', `
            <label title="${title}" class="fas fa-${icon}">
                <input type="radio" onclick="pages('${title}')"/>
            </label>`);
        document.querySelector('div[id=pages]').insertAdjacentHTML('beforeend', `
            <iframe title='${title}' src="TXT/${title}.txt" onclick='loadData(this.contentDocument.body.firstChild.innerHTML)'></iframe>`);
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
function buildTable(data) {
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true; var header = true;
    var [title, subtitle] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header title='content'>
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                </header>
                <section title='content'>
                    <table title='content'>
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody></tbody>
                    </table>`);
        } else if (header && !first) {
            header = false;
            var tr = document.querySelector('table[title=content] > thead > tr');
            [].forEach.call(line.split('|'), function(head) {
                tr.insertAdjacentHTML('beforeend', `<th>${head}</th>`);
            });
        } else if (!first && !header){
            var tbody = document.querySelector('table[title=content] > tbody');
            tbody.insertAdjacentHTML('beforeend', `<tr></tr>`);
            [].forEach.call(line.split('|'), function(item) {
                tbody.lastChild.insertAdjacentHTML('beforeend', `<td>${item}</td>`);
            });
        }
    });
    /*Display Content*/
    lightbox.click();
}
function buildGrid(data){
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true;
    var [title, subtitle] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                </header>
                <section title='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[title=content]');
            [header, date, details] = line.split('|');
            section.insertAdjacentHTML('beforeend', `
                <article>
                    <h2>${header}</h2>
                    <date>${date}</date>
                    <ul></ul>
                </article>`);
            [].forEach.call(details.split("\n"), function(string) {
                if (string.length>0) section.lastChild.querySelector(`ul`).insertAdjacentHTML('beforeend', `<li>${string}</li>`);
            });
        }
    });
    /*Display Content*/
    lightbox.click();
}
function buildLocation(data){
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true;
    var [title, subtitle] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                </header>
                <section title='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[title=content]');
            [header, date, address, details] = line.split('|');
            section.insertAdjacentHTML('beforeend', `
                <article>
                    <h2>${header}</h2>
                    <date>${date}</date>
                    <address>${address}</address>
                    <ul></ul>
                </article>`);
            [].forEach.call(details.split("\n"), function(string) {
                if (string.length>0) section.lastChild.querySelector(`ul`).insertAdjacentHTML('beforeend', `<li>${string}</li>`);
            });
        }
    });
    /*Display Content*/
    lightbox.click();
}
function buildProject(data){
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true;
    var [title, subtitle] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                </header>
                <section title='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[title=content]');
            [header, date, source, src, details] = line.split('|');
            section.insertAdjacentHTML('beforeend', `
                <article>
                    <a href='${source}' target='_blank'><img src=${src}></a>
                    <h2>${header}</h2>
                    <date>${date}</date>
                    <ul></ul>
                </article>`);
            [].forEach.call(details.split("\n"), function(string) {
                if (string.length>0) section.lastChild.querySelector(`ul`).insertAdjacentHTML('beforeend', `<li>${string}</li>`);
            });
        }
    });
    /*Display Content*/
    lightbox.click();
}
/*Pages*/
function createbio(data) {
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true;
    var [title, subtitle] = ['',''];
    var pre='';
    clearContent();
    /*Read Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split("|");
            first=false;
        } else {
            [].forEach.call(line.split("\n"), function(string) {
                pre += string+' ';
            }); pre.replace(/ $/, "");
        }
    });
    /*Create Content*/
    content.insertAdjacentHTML('beforeend', `
            <header title='content'>
                <h1>${title}</h1>
                <h2>${subtitle}</h2>
            </header>
            <section title='content'>
                <p>${pre}</p>
            </section>`);
    /*Display Content*/
    lightbox.click();
}
function createcerts(data){
    buildTable(data);
}
function createawards(data){
    buildTable(data);
}
function createhobbies(data){
    buildGrid(data);
}
function createinternships(data){
    buildLocation(data);
}
function createdeveloper(data){
    buildLocation(data);
}
function createcollege(data){
    buildLocation(data);
}
function createschool(data){
    buildLocation(data);
}
function createwebsites(data){
    buildProject(data);
}
function createtoolkits(data){
    buildProject(data);
}
function createsimulations(data){
    buildProject(data);
}
function creategames(data){
    buildProject(data);
}
function createbooths(data){
    buildProject(data);
}