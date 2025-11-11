import React from "react";
import '../BookTitleAuthor.css';

function BookTitleAuthor({ title, author}) {
    return (
        <div className="book__info">
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
    </div>
    );
}
export default BookTitleAuthor;