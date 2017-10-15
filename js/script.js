function getNote(){
	if(localStorage.getItem('note')){
		var note = localStorage.getItem('note');
	} else {
		var note = "Escreva sua nota aqui";
	}

	document.getElementById('note').innerHTML= note;
}

function saveNote(id){
	var note = document.getElementById('note').innerHTML;
	localStorage.setItem('note', note);
}

function clearNote(){
	clear: localStorage.clear();
	return false;
}