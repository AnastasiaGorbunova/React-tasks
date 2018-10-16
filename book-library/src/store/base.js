import books from 'etc/dummy-data/books';

const initialState = {
    books,
    currentBook : null
};

class Store {
    constructor() {
        this.state = localStorage.getItem('books-store') ? JSON.parse(localStorage.getItem('books-store')) : initialState;
   console.log(this.state)
    }

    set(key, value) {
        this.state[key] = value;
        this.save();
    }

    get(key) {
        return this.state[key];
    }

    save() {
        localStorage.setItem('books-store', JSON.stringify(this.state));
    }
}

export default Store;