import React from "react";
import '../BookCard.css';
import BookPreview from './BookPreview';


function BookCard({ book, onBookClick, onDelete }) {

    const handleClick = () => onBookClick(book);

    return (
        <div className="book-card" onClick={handleClick}>
           <BookPreview book={book} onDelete={onDelete} />
        </div>
    );
}
export default BookCard;