// Define a TypeScript interface for a Book
interface Book {
    title: string;
    author: string;
    genre: string;
    year: number;
}

// Create an array of books
const books: Book[] = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997
    }
];

// Try to access a book at an out-of-bounds index
const index = 10; // Intentional error: accessing an index that doesn't exist
const book = books[index];

// Print information about each book
console.log("List of Books:");
books.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Year: ${book.year}`);
    console.log();
});
