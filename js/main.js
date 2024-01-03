const myLibrary = [];
const form = document.querySelector(".form-modal");
const formContainer = document.querySelector(".new-book-form-container");
const booksDisplay = document.querySelector(".books-display");

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

const displayLibrary = () => {
	booksDisplay.innerHTML = "";
	if (myLibrary.length === 0) {
		booksDisplay.innerHTML = "<p class='no-books'>No books in library...</p>";
		return;
	} else {
		myLibrary.forEach((book, index) => {
			const bookCard = document.createElement("div");
			bookCard.classList.add("book-card");
			bookCard.innerHTML = `
		<div class="book-card-content">
			<h2>${book.title}</h2>
			<p>Author: ${book.author}</p>
			<p>Pages: ${book.pages}</p>
			${
				book.read
					? `<button class="status-btn read" onclick="changeStatus(false, ${index})">Read</button>`
					: `<button class="status-btn not-read" onclick="changeStatus(true, ${index})">Not Read</button>`
			}
			<button class="remove-btn" onclick="removeBook(${index})">Remove</button>
		</div>	
		`;
			booksDisplay.appendChild(bookCard);
		});
	}
};

displayLibrary();

const changeStatus = (status, index) => {
	myLibrary[index].read = status;
	displayLibrary();
};

const resetForm = () => {
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	document.getElementById("read").checked = false;
	formControl(false);
	displayLibrary();
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").checked;
	addBookToLibrary(title, author, pages, read);
	resetForm();
});

const addButton = document.getElementById("add-book");
addButton.addEventListener("click", () => {
	formControl(true);
});

const closeButton = document.querySelector(".closing-btn");
closeButton.addEventListener("click", () => {
	formControl(false);
});
