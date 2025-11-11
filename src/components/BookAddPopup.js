import React from "react";
import '../BookAddPopup.css';

import BookCover from './BookCover';
import BookTitleAuthor from './BookTitleAuthor';
import BookStatusLabel from './BookStatusLabel';
import BookProgress from './BookProgress';
import BookRating from './BookRating';
import BookAnnotation from './BookAnnotation';
import BookNotes from './BookNotes';
import BookForm from './BookForm';

function BookAddPopup({ isOpen, onClose, onAddBook, newBook }) {
    
    const handleAddSubmit = (newBook) => {
        onAddBook(newBook);
        onClose();
    }
    return (
        <div className={`book-add-popup ${isOpen ? "popup_opened" : ""}`}>
            <button className="book-add-popup__close" type="button" onClick={onClose}>
                x
            </button>
            <div className="book-card-add-popup__wrapper">
                <div className="book-card-add-popup__container">
                   <BookForm mode="new" 
                   onAddBook={onAddBook} 
                   onAddSubmit={handleAddSubmit}/>
                </div>


                {/* <div className="book-card-popup__btns">
                <button className="book-card-popup__btn " type="button">
                        Отмена
                    </button>
                    <button className="book-card-popup__btn " type="button">
                        Сохранить
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default BookAddPopup;