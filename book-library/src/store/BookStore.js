import Store from './base';

class BookStore extends Store {

    getCurrentBook() {
        const currentBook = this.get('currentBook');
        const booksList = this.get('books');
        return booksList[currentBook];
    }

    setCurrentBook(book, id) {
        const booksList = this.get('books');
        let indexOfCurrentBook = booksList.findIndex(function (book) {
            return book.id === id;
        });
        console.log(booksList[id - 1]);
        console.log(book);
        this.set(booksList[indexOfCurrentBook], book);
    }

    getBooksList() {
        return this.get('books');
    }

    setBooks(newBooks) {
        this.set('books', newBooks)
    }
}

export default new BookStore();