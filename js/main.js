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
					? `<button class="status-btn read" onclick="Book.prototype.changeStatus(${index}, false)">Read</button>`
					: `<button class="status-btn not-read" onclick="Book.prototype.changeStatus(${index}, true)">Not Read</button>`
			}
			<button class="remove-btn" onclick="Book.prototype.removeBook(${index})">Remove</button>
		</div>	
		`;
			booksDisplay.appendChild(bookCard);
		});
	}
};

displayLibrary();

Book.prototype.changeStatus = function (index, status) {
	myLibrary[index].read = status;
	displayLibrary();
};

Book.prototype.removeBook = function (index) {
	myLibrary.splice(index, 1);
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
const addButton_Mobile = document.querySelector(".mobile-add");
addButton.addEventListener("click", () => {
	formControl(true);
});
addButton_Mobile.addEventListener("click", () => {
	formControl(true);
});

const closeButton = document.querySelector(".closing-btn");
closeButton.addEventListener("click", () => {
	formControl(false);
});
