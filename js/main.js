const myLibrary = [];

class Book {
	constructor(title, author, pages, read = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		this.info = () => {
			return `${this.title}, by ${this.author}, ${this.pages} pages, ${
				this.read ? "read" : "not read yet"
			}`;
		};
	}
}

function addBookToLibrary() {}
