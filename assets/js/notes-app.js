var createNoteButtonEl = document.getElementById("create-note-button")

const notes = [
	{
		title: "My next trip",
		body: "I would like to go to Toronto",
	},
	{
		title: "Habbits to improve",
		body: "Walk every day",
	},
	{
		title: "Office modifications",
		body: "Buy new monitors",
	},
];

var handleCreateNote = function (e) {
	console.log('handleClick')
	console.log(e.target)
}

createNoteButtonEl.addEventListener("click", handleCreateNote)