function OpenFile(){	
	var reader = new FileReader();
	reader.onload = function (e) {
		var textArea = document.getElementById("myTextArea");
		textArea.value = e.target.result;
	};
	var file = document.getElementById("myFile").files[0];
	reader.readAsText(file);
	var fileName = document.getElementById("myFile").files[0].name;
	var title = document.getElementById("myFileName");
	title.value = fileName;
}