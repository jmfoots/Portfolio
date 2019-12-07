function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, icon] = line.split(",");
        document.querySelector('nav').insertAdjacentHTML('beforeend', '\
            <label title="'+title+'" class="fas fa-'+icon+'"><input type="radio" name="menu" id="'+title+'" onclick="pages(this.id)"/></label>');
    });
}