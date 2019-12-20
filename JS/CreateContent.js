/*Navigation*/
function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [id, icon] = line.split(",");
        document.querySelector('nav').insertAdjacentHTML('beforeend', `
            <label id="${id}" class="fas fa-${icon}">
                <input type="radio" onclick="pages('${id}')"/>
            </label>`);
        document.querySelector('div[id=pages]').insertAdjacentHTML('beforeend', `
            <iframe id='${id}' src="TXT/${id}.txt" onclick='loadData(this.contentDocument.body.firstChild.innerHTML)'></iframe>`);
    });
}
/*Data*/
function loadData(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [id, src, alt] = line.split(",");
        var html = 'this.contentDocument.body.firstChild.innerHTML';
        document.querySelector('div[id=data]').insertAdjacentHTML('beforeend', `
            <iframe id=${id} src="${src}" onclick="create${id}(${html})"></iframe>`);
        /*Create Section*/
        var section = `document.querySelector('iframe[id=${id}]').mouse()`;
        document.querySelector('section[id=grid]').insertAdjacentHTML('beforeend', `
            <h2 id="Open ${alt}" onclick="${section}">${alt}</h2>`);
    });
}
/*Build Templates*/
function buildTable(data) {
    var content = document.querySelector('div[id=content]');
    var first = true; var header = true;
    var [id, subid] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [id, subid]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header id='content'>
                    <h1>${id}</h1>
                    <h2>${subid}</h2>
                </header>
                <section id='content'>
                    <table id='content'>
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody></tbody>
                    </table>`);
        } else if (header && !first) {
            header = false;
            var tr = document.querySelector('table[id=content] > thead > tr');
            [].forEach.call(line.split('|'), function(head) {
                tr.insertAdjacentHTML('beforeend', `<th>${head}</th>`);
            });
        } else if (!first && !header){
            var tbody = document.querySelector('table[id=content] > tbody');
            tbody.insertAdjacentHTML('beforeend', `<tr></tr>`);
            [].forEach.call(line.split('|'), function(item) {
                tbody.lastChild.insertAdjacentHTML('beforeend', `<td>${item}</td>`);
            });
        }
    });
    /*Display Content*/
    Lightbox();
}
function buildGrid(data){
    var content = document.querySelector('div[id=content]');
    var first = true;
    var [id, subid] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [id, subid]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${id}</h1>
                    <h2>${subid}</h2>
                </header>
                <section id='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[id=content]');
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
    Lightbox();
}
function buildLocation(data){
    var content = document.querySelector('div[id=content]');
    var first = true;
    var [id, subid] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [id, subid]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${id}</h1>
                    <h2>${subid}</h2>
                </header>
                <section id='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[id=content]');
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
    Lightbox();
}
function buildProject(data){
    var content = document.querySelector('div[id=content]');
    var first = true;
    var [id, subid] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [id, subid]=line.split("|");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header>
                    <h1>${id}</h1>
                    <h2>${subid}</h2>
                </header>
                <section id='content'></section>`);
        } else if (!first && line.length>0) {
            var section = document.querySelector('section[id=content]');
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
    Lightbox();
}
function buildParagraph(data){
    var content = document.querySelector('div[id=content]');
    var first = true;
    var [id, subid] = ['',''];
    var pre='';
    clearContent();
    /*Read Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [id, subid]=line.split("|");
            first=false;
        } else {
            [].forEach.call(line.split("\n"), function(string) {
                pre += string+' ';
            }); pre.replace(/ $/, "");
        }
    });
    /*Create Content*/
    content.insertAdjacentHTML('beforeend', `
            <header id='content'>
                <h1>${id}</h1>
                <h2>${subid}</h2>
            </header>
            <section id='content'>
                <p>${pre}</p>
            </section>`);
    /*Display Content*/
    Lightbox();
}
/*Pages*/
function createbio(data) {
    buildParagraph(data);
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