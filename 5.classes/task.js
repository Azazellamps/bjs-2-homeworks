class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.stateDefault = 100;
		this.type = null;

	}
	fix() {
		this.state = this.state * 1.5;
	}


	set state(condition) {

		if (condition > 100) {
			this.stateDefault = 100;
		} else if (this.state < 0) {
			this.stateDefault = 0;
		} else {
			this.stateDefault = condition;
		}
	}
	get state() {
		return this.stateDefault;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";

	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";

	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";

	}
}


class Library {

	constructor(name) {
		this.name = name;
		this.books = [];

	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	findBookBy(type, value) {
		const fiund = this.books.find(book => book[type] === value);
		return fiund || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			const book = this.books.splice(index, 1)[0];
			return book;
		} else {
			return null;
		}
	}
}