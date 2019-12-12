function LoadForm(){
	var file = document.getElementById('file_forms');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateForm(line)
		}
};

function CreateForm(line){
	var year = '2018'
	var group = document.getElementById('one');
	var f = line.split(", ");
	var name = f[0]; var file = f[1]; var desc = f[2];
	var dir = 'assets/forms/' + year + '/'
	var title = 'FABaseball_' + year + '_'
	var fileaddress = dir + title + file;
	group.innerHTML +=
		'<section>\
				<div class="content">\
					<div class="inner">\
						<h1>' + name + '</h1>\
						<p>' + desc + '</p>\
						<a href="'+ fileaddress + '" target="_blank" class="fa fa-file-pdf-o fa-3x pdf" title="' + file + '"></a>\
					</div>\
				</div>\
			</section>';
};

function LoadEvents(){
	var file = document.getElementById('file_events');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateEvents(line)
		}
};

function CreateEvents(line){
	Date.prototype.monthNames = [
		"Jan.", "Feb.", "Mar.",
		"Apr.", "May", "June",
		"July", "Aug.", "Sept.",
		"Oct.", "Nov.", "Dec."
	];
	Date.prototype.getMonthName = function() {
		return this.monthNames[this.getMonth()];
	};
	
	var conMonth = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "June":6, "July":7, "Aug":8, "Sept":9, "Oct":10, "Nov":11, "Dec":12};
	
	function getConvDate(abbv){
		var month = abbv.substr(0,abbv.indexOf("."));
		var day = abbv.substr(abbv.indexOf(".")+1);
		var months = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "June":6, "July":7, "Aug":8, "Sept":9, "Oct":10, "Nov":11, "Dec":12}
		return months[month] + day
	};

	var currentDate = new Date(); var month = currentDate.getMonthName(); var date = currentDate.getDate(); var comp = month + " " + date;
	
	var cm = {"Jan.":'January', "Feb.":'February', "Mar.":'March', "Apr.":'April', "May.":'May', "June.":'June', "July.":'July',"Aug.":'August', "Sept.":'September', "Oct.":'October', "Nov.":'November', "Dec.":'December',}
	var dn = {'Sun.': 'Sunday', 'Mon.': 'Monday', 'Tues.': 'Tuesday', 'Wed.': 'Wednesday', 'Thurs.': 'Thursday', 'Fri.': 'Friday', 'Sat.': 'Saturday',}
	var group2 = document.getElementById('timeline');
	var d = line.split(", ");
	var dTeam = d[0]; var dDate = d[2]; var dOpponent = d[3]; var dLocale = d[4]; var dTime = d[5];
	var h = 'icon major fa-home'; var a = 'icon major fa-bus';
	var icon; var additional='';
	if (dLocale.includes('Faith Academy')){icon = h};
	if (dLocale.includes('Faith Academy') != true){icon = a};
	var v = "Varsity"; var j = "Junior Varsity"; var m = "Middle School";
	var date = d[1] + ", " + dDate;
	var team;
	switch(dTeam) {
		case 'v':
			team = v
			break;
		case 'j':
			team = j
			break;
		case 'm':
			team = m
			break;
	};
	var d1 = getConvDate(dDate); var d2 = getConvDate(comp);
	if (d1.substr(0,d1.indexOf(" ")) === d2.substr(0,d2.indexOf(" "))){
		if (parseInt(d1.substr(d1.indexOf(" "))) >= parseInt(d2.substr(d2.indexOf(" ")))){
			if (parseInt(d1.substr(d1.indexOf(" "))) <= 5 + parseInt(d2.substr(d2.indexOf(" ")))){
				if (dTime != "TBA"){
					group2.innerHTML +='\
						<li>\
								<hr><h1>' + team + '</h1>\
								<h3>vs. ' + dOpponent + '</h3><hr>\
								<span class="' + icon + '"></span>\
								<date>'+ date +'</date>\
								<p>Time: ' + dTime + '</p>\
								<p>Location: ' + dLocale + '</p>\
						</li>';
				};
			};
		};
	};

};

function LoadMedia(){
	var file = document.getElementById('file_media');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateGallery(line)
		}
};

function CreateGallery(line){
	var group = document.getElementById('lighthouse');
	var links = document.getElementById('gallerylinks');
	var dir = "images/gallery/"; var ext = ".jpg";
	var y = line.split(", ");
	var yeargroup = document.getElementById(y[0]);
	var year = y[0];
	var img = y[2];
	var alt = y[1];
	var thumb = dir + year + "/" + "thumbs/" + img + ext;
	yeargroup.innerHTML +='<li><img src="' + thumb + '"\
						alt="' + year + ": " + alt + '">\
						</li>';
};