function LoadCoaches() {
	document.getElementById('file_coaches').contentWindow.document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8">';
	var file = document.getElementById('file_coaches');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateCoach(line)
		}
};

function CreateCoach(line){
	var group = document.getElementById('one');
	var dir = "images/coaches/";
	var ext = ".jpg";
	var c = line.split("; ");
	var sym = c[0]; var name = c[1]; var team = c[2]; var img = c[3]; var desc = c[4]
	var file = dir + sym + "/" + img + ext;
	group.innerHTML +=
		'<section>\
				<a class="image" style="background-image:url('+ file + ')"></a>\
				<div class="content">\
					<div class="inner">\
						<h1>' + name + '</h1>\
						<h2>' + team + '</h2>\
						<p>' + desc + '</p>\
					</div>\
				</div>\
			</section>';
};

function LoadAlumni() {
	document.getElementById('file_alumni').contentWindow.document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8">';
	var file = document.getElementById('file_alumni');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateAlumni(line)
		}
};

function CreateAlumni(line){
	var group = document.getElementById('alumni');
	var a = line.split("; ");
	var name = a[0]; var desc = a[1];
	group.innerHTML +='\
		<li class="alumn">\
				<h2>' + name + '</h2>\
				<p>' + desc + '</p>\
		</li>';
};

function LoadHeadings() {
	document.getElementById('file_rosterHeadings').contentWindow.document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8">';
	var file = document.getElementById('file_rosterHeadings');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateHeading(line)
		}
};

function CreateHeading(line){
	var h = line.split(", ");
	var tag = h[0].toUpperCase();
	var headings = document.getElementById('headings' + tag);
	for (var i = 1; i < h.length; i++) {
		headings.innerHTML += '<th>' + h[i] + '</th>';
	}
};

function LoadPlayer() {
	document.getElementById('file_rosterPlayer').contentWindow.document.getElementsByTagName('head')[0].innerHTML += '<meta charset="UTF-8">';
	var file = document.getElementById('file_rosterPlayer');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreatePlayer(line)
		}
};

function CreatePlayer(line){
	var p = line.split(", ");
	var tag = p[0].toUpperCase(); var id = p[1];
	var sheet = document.getElementById('sheet' + tag);
	sheet.innerHTML += '<tr id="items' + tag + id +'"></tr>';
	for (var i = 1; i < p.length; i++) {
		var items = document.getElementById('items' + tag + id);
		items.innerHTML += '<td>' + p[i] + '</td>';
	}
};