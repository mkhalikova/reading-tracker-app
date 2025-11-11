import React, { useState, useEffect } from "react";
import Books from './Books';
import Stats from './Stats';
import Quotes from './Quotes';
import Ebooks from './Ebooks';
import '../MainContent.css';
import { Route, Routes, Navigate } from "react-router-dom";
import initialBooks from "./booksData";


function MainContent() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState({});
    const [isBookPopupOpen, setIsBookPopupOpen] = useState(false);
    const [readingLogs, setReadingLogs]=useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("books");
        if (saved) {
            setBooks(JSON.parse(saved));
        } else {
            setBooks(initialBooks);
            localStorage.setItem("books", JSON.stringify(initialBooks));
        }
    }, []);


    function handleBookClick(book) {
        setSelectedBook(book);
        setIsBookPopupOpen(true);
    }
       


    return (
        <div className="main-content">
            <Routes>
                <Route path="/books" element={<Books books={books} setBooks={setBooks} onBookClick={handleBookClick} />}></Route>
                <Route path="/stats" element={<Stats books={books} setReadingLogs={setReadingLogs}/>}></Route>
                <Route path="/quotes" element={<Quotes books={books}/>}></Route>
                <Route path="/wishlist" element={<Ebooks books={books} />}></Route>
                <Route path="*" element={<Navigate to="/books" replace />}></Route>
            </Routes>
            

        </div>
    );
}

export default MainContent;