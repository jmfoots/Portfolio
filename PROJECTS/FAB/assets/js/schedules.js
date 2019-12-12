function LoadSchedules() {
	var file = document.getElementById('file_schedules');
	var raw = file.contentWindow.document.body.childNodes[0].innerHTML;
	while (raw.indexOf("\r") >= 0)
		raw = raw.replace("\r", "");
		var lines = raw.split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			CreateSchedule(line)
		}
};

function CreateSchedule(line){
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

	var currentDate = new Date(); var month = currentDate.getMonthName(); var date = currentDate.getDate(); var comp = month + " " + date; var styling = "rgba(255,255,255,.15)"; 
	function findE(e){return document.getElementById(e);}
	
	var g = line.split(", ");
	var team = g[0]; var day = g[1]; var date = g[2]; var opponent = g[3]; var location = g[4]; var time = g[5]; var type = g[6]
	if (findE("scheduleheadingteam") === null) {
		var th = document.getElementsByTagName('thead');
		var i;
		for (i = 0; i < th.length; i++) {
			th[i].innerHTML +='\
				<tr id="scheduleheadingteam">\
					<th>Day</th>\
					<th>Date</th>\
					<th>Opponent</th>\
					<th>Location</th>\
					<th>Time</th>\
				</tr>';
		}
	}
	var where = findE('T'+team.toUpperCase());
	if (type != null){
		where.innerHTML +='\
			<tr>\
				<td colspan="2">'+type+'</td>\
				<td colspan="3"></td>\
			</tr>';
	};
	where.innerHTML +='\
		<tr data-date="' + date + '">\
			<td>' + day + '</td>\
			<td>' + date + '</td>\
			<td>' + opponent + '</td>\
			<td>' + location + '</td>\
			<td>' + time + '</td>\
		</tr>';
	var d1 = getConvDate(date); var d2 = getConvDate(comp);
		
	if (d1.substr(0,d1.indexOf(" ")) < d2.substr(0,d2.indexOf(" "))){
		if (date != "TBA"){
				$("tr[data-date='" + date + "']").css("color", styling);
		};
	};
	if (d1.substr(0,d1.indexOf(" ")) === d2.substr(0,d2.indexOf(" "))){
		if (parseInt(d1.substr(d1.indexOf(" "))) < parseInt(d2.substr(d2.indexOf(" ")))){
			if (date != "TBA"){
				$("tr[data-date='" + date + "']").css("color", styling);
			};
		};
	};
	
	$("tr[data-date='" + comp + "']").css("background-color","rgba(255,255,255,.25)");
};