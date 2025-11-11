import React from "react";
import '../BookQuotes.css';

function BookQuotes({ quotes }) {

  const safeQuotes = Array.isArray(quotes)
  ? quotes
  : quotes
  ? [quotes]
  : [];

    return (
        <div className="book-quotes">
        <label className="book-quotes__label">Цитаты:</label>
        {safeQuotes.length > 0 ? (
          <ul className="book-quotes__list">
            {safeQuotes.map((q, i) => (
              <li key={i} className="book-quotes__text">
                {q}
              </li>
            ))}
          </ul>
        ) : (
          <p className="book-quotes__text">Цитат нет</p>
        )}
      </div>
    );
}
export default BookQuotes;