import React, { useState } from "react";
import BookCard from "./BookCard";
import '../BooksGrid.css';
import CardBookPopup from "./BookCardPopup";
import NewBook from "./NewBook"
import BookAddPopup from "./BookAddPopup";

function BooksGrid ( { books, onBookClick, onAddClick, onAddBook, onUpdateBook, onDeleteBook } ) {

    const [selectedBook, setSelectedBook] = useState(null);
    const [isBookPopupOpen, setIsBookPopupOpen] = useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  
    // ---------------------------------------

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setIsBookPopupOpen(true);
    };
    function closePopup() {
        setIsBookPopupOpen(false);
        setIsAddPopupOpen(false);

    }
    function handleAddClick() {
        setIsAddPopupOpen(true);
     
    };

    return (

        <div className="books-grid">
            {books.map(book =>
                <BookCard
                    key={book.id || book.title}
                    book={book}
                    onBookClick={handleBookClick}
                />
            )


            }
            <NewBook onAddClick={handleAddClick} />

            <BookAddPopup
                isOpen={isAddPopupOpen}
                onClose={closePopup}
                onAddBook={onAddBook}
            />
            {selectedBook && (
                <CardBookPopup
                    book={selectedBook}
                    isOpen={isBookPopupOpen}
                    onClose={closePopup}
                    onUpdateBook={onUpdateBook}
                    onDelete={onDeleteBook}
                    
                />
                
            )
            

            }
        </div>
    );
}
export default BooksGrid;