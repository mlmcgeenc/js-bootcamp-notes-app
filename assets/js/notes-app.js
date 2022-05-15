var createNoteButtonEl = document.getElementById("create-note-button")
var deleteNotesButtonEl = document.getElementById("delete-notes-button")
var searchEl = document.getElementById("search-text")

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
	console.log("handleCreateNote", e)
}

var handleDeleteNotes = function (e) {
	console.log("handleDeleteNotes", e)
	document.querySelectorAll(".note").forEach(function(note){
		note.remove()
	})
}

var handleSearchChange = function (e) {
	console.log("Search entered - ", e.target.value)
}

createNoteButtonEl.addEventListener("click", handleCreateNote)
deleteNotesButtonEl.addEventListener("click", handleDeleteNotes)
searchEl.addEventListener("input", handleSearchChange)