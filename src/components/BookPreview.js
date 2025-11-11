import React from "react";
import '../BookPreview.css';
import BookCover from './BookCover';
import BookTitleAuthor from './BookTitleAuthor';
import BookStatusLabel from './BookStatusLabel';
import BookProgress from './BookProgress';
import BookRating from './BookRating';

function BookPreview({ book }) {
    return (
        <div className="book-preview"  >
            <BookCover cover={book.cover} title={book.title} author={book.author} />
            <div className="book-preview__container">
                
                
                <BookTitleAuthor title={book.title} author={book.author} />
                <BookStatusLabel status={book.status} />
                <div className="book-preview__state-wrapper">
                {book.status === "читаю" && (
                    <BookProgress progress={book.progress} total={book.total} />
                )}
                {book.status === "прочитано" && (
                    <BookRating rating={book.rating} />
                )}
            </div>
            </div>
            
        </div>
    );
}
export default BookPreview;