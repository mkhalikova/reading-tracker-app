import React from "react";
import '../BookNotes.css';

function BookNotes({ notes }) {

    return (
        <div className="book-notes">
                <label className="book-notes__label">Мои заметки:</label>
                <p className="book-notes__text">{notes || "Заметок нет"}</p>
        </div>
    );
}
export default BookNotes;