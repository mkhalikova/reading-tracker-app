import React, { useState }  from "react";

import '../NewLogReading.css';


function NewLogReading({ books, isLogging, onCancel, setReadingLogs, onSubmit }) {
    const today = new Date().toISOString().split("T")[0];
    const [selectedBook, setSelectedBook] = useState("");
    const [pages, setPages] = useState(0);
    const [date, setDate] = useState(today);
   
    function handleSubmit(e) {
        e.preventDefault(); // чтобы страница не перезагружалась
        onSubmit({
          bookId: selectedBook,
          date,
          pages: Number(pages)
        });
        resetForm()
      }

      function resetForm() {
        setSelectedBook("");
        setPages(0);
        setDate(today);
      }
    
      function handleCancel() {
        resetForm()
        onCancel();
      }
    return (
        <form onSubmit={handleSubmit}  className={`new-log ${isLogging ? "opened" : ""} `} >

            <select name="select-book"
                className="new-log__book"
                value={selectedBook}
                onChange={e => setSelectedBook(e.target.value)}>
                <option value="" disabled hidden>Выберите книгу, которую читаете</option>
                {books.filter((b) => b.status === "читаю").map(book =>
                    <option key={book.id}>{book.title}</option>
                )}
            </select>

            <input type="number"
                className="new-log__pages"
                min="1"
                value={pages}
                onChange={e => setPages((e.target.value))} />

            <input className="new-log__date"
                type="date"
                value={date}
                onChange={e => setDate((e.target.value))}
            />

            <div className="new-log__buttons">
                <button type="submit" className="new-log__button" >Добавить запись</button>
                <button type="button" className="new-log__button" onClick={handleCancel}>Отмена</button>
            </div>
        </form>
    );
}
export default NewLogReading;