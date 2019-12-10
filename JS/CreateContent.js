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
    var content = document.querySelector('div[title=content]');
    var first = true;
    var [title, subtitle] = ['',''];
    var pre='';
    clearContent();
    /*Read Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split(",");
            first=false;
        } else {
            [].forEach.call(line.split("\n"), function(string) {
                pre += string;
            });
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
            <section>`);
    /*Display Content*/
    lightbox.click();
}
function createhobbies(data) {
    var lightbox = document.querySelector('details[title=lightbox] > summary');
    var content = document.querySelector('div[title=content]');
    var first = true; var header = true;
    var [title, subtitle] = ['',''];
    clearContent();
    /*Read & Create Content*/
    [].forEach.call(data.split("~"), function(line) {
        if (first && line.length>0){
            [title, subtitle]=line.split(",");
            first=false;
            content.insertAdjacentHTML('beforeend', `
                <header title='content'>
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                </header>
                <section title='content'>
                    <table title='content'>
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                <section>`);
        } else if (header && !first) {
            header = false;
            var thead = document.querySelector('table[title=content] > thead');
            thead.insertAdjacentHTML('beforeend', `<tr></tr>`);
            var tr = thead.querySelector('tr');
            [].forEach.call(line.split(','), function(head) {
                tr.insertAdjacentHTML('beforeend', `<th>${head}</th>`);
            });
        } else if (!first && !header){
            var tbody = document.querySelector('table[title=content] > tbody');
            tbody.insertAdjacentHTML('beforeend', `<tr></tr>`);
            var row = tbody.lastChild;
            [].forEach.call(line.split(','), function(item) {
                row.insertAdjacentHTML('beforeend', `<td>${item}</td>`);
            });
        }
    });
    /*Display Content*/
    lightbox.click();
}