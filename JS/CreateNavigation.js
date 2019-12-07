function createNavigation(data) {
    [].forEach.call(data.split("\n"), function(line) {
        var [title, icon] = line.split(",");
        document.getElementById("navigation").insertAdjacentHTML('beforeend', '\
            <label title="'+title+'" class="fas fa-'+icon+'"><input type="radio" name="menu" id="'+title+'" onclick="pages(this.id)"/></label>');
    });
}