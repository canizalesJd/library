const myLibrary = [];
const form = document.querySelector(".form-modal");

class Book {
	constructor(title, author, pages, read = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

const addBookToLibrary = (title, author, pages, read) => {
	myLibrary.push(new Book(title, author, pages, read));
};

const formControl = (display = false) => {
	display ? (form.style.display = "block") : (form.style.display = "none");
};

const resetForm = () => {
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	document.getElementById("read").checked = false;
	formControl(false);
	// displayLibrary();
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").checked;
	addBookToLibrary(title, author, pages, read);
	resetForm();
	console.log(myLibrary);
});

const addButton = document.getElementById("add-book");
addButton.addEventListener("click", () => {
	formControl(true);
});
