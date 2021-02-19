const button = document.getElementById("save");
button.onclick = save;

function save(){
	// alert("saved");
	var formValues = document.forms.formSettings;
	var formData = new FormData(formValues);
	var time = formData.get("time");
	var people = formData.get("people");
	alert(time+" "+people);
	localStorage.setItem("GameTime",time);
	localStorage.setItem("GamePeople",people);
	setTimeout("location.href = 'index.html';");
}

