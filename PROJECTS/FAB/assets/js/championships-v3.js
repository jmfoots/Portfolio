function LoadChampionships(){
	var file = document.getElementById('file_championships');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var first = false;
			if (i == 0){
				first = true;
			}
			CreateGhampionship(line, first)
		}
};

function CreateGhampionship(line, first){
	var group = document.getElementById('champs');
	var y = line.split(", ");
	var active = 'none';
	if (first == true){
		active = 'block';
	}
	var id = y[0]; var score = y[y.length-1];
	group.innerHTML +=
		'<section class="' + id + '" style="display:' + active + ';">\
		<div class="table-wrapper">\
			<table class="alt">\
				<thead>\
					<tr>\
						<th colspan="4">' +id +' State Champions</th>\
					</tr>\
				</thead>\
				<tbody id=year' + id + '>\
				</tbody>\
				<tfoot>\
					<tr><td colspan="8">'+ score +'</td></tr>\
				</tfoot>\
			</table>\
		</div>';
	var year = document.getElementById('year' + id)
	var rowNum = 0; var currentRow; var rowlength = 5;
	for (var i = 1; i < y.length-1; i++) {
		if (i == 1){
			year.innerHTML += '<tr id="year'+id+'row'+rowNum+'"></tr>';
			currentRow = document.getElementById('year' + id+'row'+rowNum)
			rowNum ++
		} else if (i%rowlength == 0){
			year.innerHTML += '<tr id="year'+id+'row'+rowNum+'"></tr>';
			currentRow = document.getElementById('year' + id+'row'+rowNum)
			rowNum ++
		}
		if (i%rowlength != 0){
			currentRow.innerHTML +='<td>' + y[i] + '</td>\ ';
		}
	}

	var links = document.getElementById('champlinks');
	if (active == "block"){
		links.innerHTML += '<li class="active" data-content-id="'+ id +'">'+id+'</li>';
	}
	if (active != "block"){
		links.innerHTML += '<li data-content-id="'+id+'">'+id+'</li>';
	}
};