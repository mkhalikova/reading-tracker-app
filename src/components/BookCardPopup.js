import React, { useState } from "react";
import '../BookCardPopup.css';
import BookCover from './BookCover';
import BookTitleAuthor from './BookTitleAuthor';
import BookStatusLabel from './BookStatusLabel';
import BookProgress from './BookProgress';
import BookRating from './BookRating';
import BookAnnotation from './BookAnnotation';
import BookNotes from './BookNotes';
import BookQuotes from './BookQuotes';
import BookForm from './BookForm';

function BookCardPopup({ book, isOpen, onClose, onUpdateBook, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    }
    const handleFormSubmit = (updatedBook) => {
        onUpdateBook(updatedBook);
        setIsEditing(false);
         onClose();
    }
    const handleDeleteClick = () => {
        onDelete(book.id); // здесь setBooks вызывается корректно
        onClose(); // если нужно закрыть попап
      };

    return (
        <div className={`book-card-popup ${isOpen ? "popup_opened" : ""}`}>

            <div className="book-card-popup__wrapper">
                <button className="book-card-popup__close" type="button" onClick={onClose}>
                    x
                </button>
                {!isEditing ? (
                    <>
                        {/* <div className="book-card-popup__container">
                    <div>
                        <BookStatusLabel status={book.status} />
                        <BookCover cover={book.cover} title={book.title} author={book.author} />
                        <BookTitleAuthor title={book.title} author={book.author} />
                        {book.status === "читаю" && (
                            <BookProgress progress={book.progress} total={book.total} />
                        )}
                        {book.status === "прочитано" && (
                            <BookRating rating={book.rating} />
                        )}
                    </div>
                    <BookAnnotation description={book.description}/>
                </div> */}
                        <div className="book-card-popup__header-container">
                            <h2 className="book-card-popup__header">{book.title}</h2>
                            <p className="book-card-popup__text">Информация о книге</p>
                        </div>
                        <div className="book-card-popup__container">

                            <BookCover cover={book.cover} title={book.title} author={book.author} />
                            <div className="book-card-popup__info">
                                <BookTitleAuthor title={book.title} author={book.author} />
                                <BookStatusLabel status={book.status} />


                                {book.status === "читаю" && (
                                    <BookProgress progress={book.progress} total={book.total} />
                                )}
                                {book.status === "прочитано" && (
                                    <BookRating rating={book.rating} />
                                )}
                            </div>

                        </div>
                        <div className="book-card-popup__textareas">
                            <BookAnnotation description={book.description} />
                            <BookNotes notes={book.notes} />
                            <BookQuotes quotes={book.quotes} />
                        </div>

                        <div className="book-card-popup__btns">
                            <button
                                className="book-card-popup__btn del"
                                type="button"
                                onClick={() => handleDeleteClick()}
                            >
                                Удалить
                            </button>
                            <button className="book-card-popup__btn edit" type="button"
                                onClick={handleEditClick}>
                                Редактировать
                            </button>
                        </div>
                    </>
                ) : (
                    <BookForm mode="edit" 
                    book={book} 
                    onSubmit={handleFormSubmit} 
                    onDelete={onDelete} />
                )}
            </div>
        </div>
    );
}

export default BookCardPopup;