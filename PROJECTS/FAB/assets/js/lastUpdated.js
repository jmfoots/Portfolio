Date.prototype.monthNames = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};
var d=new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
(d.getFullYear());

document.getElementById('LM').innerHTML += "Copyright © 2018, Faith Academy. All Rights Reserved. | 8650 Tanner Williams Rd, Mobile, AL 36608";

var theDate = new Date(document.lastModified); 
theDate.setTime((theDate.getTime()+(60*60)) ) 
with (theDate) { 
	var group = document.getElementById('LU');
	if (getHours() <= 12){
		if (getMinutes() < 10){
			group.innerHTML += "<i>Last updated "+weekday[getDay()]+', '+getDate()+' '+getMonthName()+', '+d.getFullYear()+'. '+getHours()+':0'+getMinutes()+" a.m. CST</i>"
		}
		else{
			group.innerHTML += "<i>Last updated "+weekday[getDay()]+', '+getDate()+' '+getMonthName()+', '+d.getFullYear()+'. '+getHours()+':'+getMinutes()+" a.m. CST</i>"
		}
	}
	else{
		if (getMinutes() < 10){
			group.innerHTML += "<i>Last updated "+weekday[getDay()]+', '+getDate()+' '+getMonthName()+', '+d.getFullYear()+'. '+(getHours() - 12)+':0'+getMinutes()+" p.m. CST</i>"		
		}
		else{
			group.innerHTML += "<i>Last updated "+weekday[getDay()]+', '+getDate()+' '+getMonthName()+', '+d.getFullYear()+'. '+(getHours() - 12)+':'+getMinutes()+" p.m. CST</i>"		
		}
	}
}