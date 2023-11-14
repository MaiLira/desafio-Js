class Book {
  constructor(title, description, author) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookInfo) {
    const newBook = new Book(
      bookInfo.title,
      bookInfo.description,
      bookInfo.author,
      bookInfo.id
    );
    this.books.push(newBook);
    return newBook;
  }

  getBookById(id) {
    return this.books.find(book => book.id === id);
  }

  getBooks() {
    return this.books;
  }

  removeBookById(id) {
    const removedBookIndex = this.books.findIndex(book => book.id === id);

    if (removedBookIndex !== -1) {
      const removedBook = this.books.splice(removedBookIndex, 1)[0];
      return removedBook;
    } else {
      return null;
    }
  }

  updateBookById(id, info = {}) {
    const bookToUpdate = this.getBookById(id);

    if (bookToUpdate) {
      if (info.title) {
        bookToUpdate.title = info.title;
      }

      if (info.description) {
        bookToUpdate.description = info.description;
      }

      if (info.author) {
        bookToUpdate.author = info.author;
      }

      return bookToUpdate;
    } else {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }
}



// Testando
const newLibrary = new Library();

const book1 = newLibrary.addBook({
  title: 'Harry Potter e a Pedra Filosofal',
  description:
    'O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre em seu 11° aniversário que é um bruxo',
  author: 'J. K. Rowling',
});

const book2 = newLibrary.addBook({
  title: 'Jogos Vorazes',
  description: 'É um livro de aventura, ação, distópico e pós-apocalíptico',
  author: 'Suzanne Collins',
});

console.log('Lista de livros:', newLibrary.getBooks());

newLibrary.updateBookById(book1.id, { title: 'HP: Pedra Filosofal Atualizado' });
console.log('Livro atualizado:', newLibrary.getBookById(book1.id));

newLibrary.removeBookById(book2.id);
console.log('Lista de livros após remoção:', newLibrary.getBooks());