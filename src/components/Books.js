import React, { useState, useEffect, useMemo } from "react";
import BooksGrid from "./BooksGrid";
import '../Books.css';
import BookStatusFilter from "./BookStatusFilter";
import initialBooks from "./booksData";

function Books({ books, setBooks, onBookClick, onAddClick }) {
    // const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("all");


    // сохранение при изменении
    useEffect(() => {
        if (books.length > 0) {
            localStorage.setItem("books", JSON.stringify(books));
        }
    }, [books]);

    const counts = useMemo(() => {
        return books.reduce(
            (acc, book) => {
                acc.all += 1;
                if (book.status === "прочитано") acc.read += 1;
                else if (book.status === "читаю") acc.reading += 1;
                else if (book.status === "вишлист") acc.wishlist += 1;
                return acc;
            },
            { all: 0, read: 0, reading: 0, wishlist: 0 }
        );
    }, [books]);

    const filteredBooks = useMemo(() => {
        if (filter === "all") return books;
        if (filter === "read") return books.filter((b) => b.status === "прочитано");
        if (filter === "reading") return books.filter((b) => b.status === "читаю");
        if (filter === "wishlist") return books.filter((b) => b.status === "вишлист");
    }, [books, filter]);

    // управление книгами
    const addBook = (newBook) => setBooks(prev => [...prev, { ...newBook, id: Date.now() }]);
    const updateBook = (updatedBook) => setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));
    const deleteBook = (id) => setBooks(prev => prev.filter(b => b.id !== id));

    return (
        <div className="my-books">
            My books
            <BookStatusFilter
                counts={counts}
                activeFilter={filter}
                onFilterChange={setFilter} />
            <BooksGrid
                books={filteredBooks}
                onBookClick={onBookClick}
                onAddClick={onAddClick}
                onAddBook={addBook}
                onUpdateBook={updateBook}
                onDeleteBook={deleteBook}
            />
        </div>
    );
}

export default Books;