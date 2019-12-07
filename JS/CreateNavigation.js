function createNavigation(data) {
    console.log(data);
    var container = document.getElementById("navigation");;
    [].forEach.call(data.split("\n"), function(line) {
        fields = line.split(",");
        var title = fields[0];
        var icon = fields[1];
        console.log(title);
        console.log(icon);
        container.insertAdjacentHTML('beforeend', '<label title="'+title+'" class="fas fa-'+icon+'"><input type="radio" name="menu" id="'+title+'" onclick="pages(this.id)"/></label>');
    });
}