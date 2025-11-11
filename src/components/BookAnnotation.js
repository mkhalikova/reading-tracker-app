import React from "react";
import '../BookAnnotation.css';

function BookAnnotation({ description }) {

    return (
        <div className="book-annotation">
                <label className="book-annotation__label">Аннотация:</label>
                <p className="book-annotation__descr">{description || "Аннотации нет"}</p>
        </div>
    );
}
export default BookAnnotation;