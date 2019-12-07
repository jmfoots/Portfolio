function createNavigation(data) {
    var container = document.querySelectorAll('nav > ul');
    [].forEach.call(data.split("\n"), function(line) {
        fields = line.split(",");
        var [title, icon] = fields;
        var item = '<label title="'+title+'" class="fas fa-'+icon+'"><input type="radio" name="menu" id="'+title+'" onclick="pages(this.id)"/></label>';
        container.innerhtml += item;
    });
}