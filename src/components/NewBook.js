import React from "react";
import '../NewBook.css';



function NewBook({onAddClick}) {
    const handleClick = () => onAddClick();
    return (
        <div className="new-book" >
            <div className="new-book__container" onClick={handleClick}>
                    <p className="new-book__plus">+</p>
            </div>
            <div className="new-book__info">
            <h3 className="new-book__title">Добавьте книгу</h3>
            <p className="new-book__text">Нажмите, чтобы добавить книгу в вашу библиотеку</p>
            </div>
        </div>
    );
}
export default NewBook;