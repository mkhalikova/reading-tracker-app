import React from "react";
import '../ConfirmDeleteModal.css';



function ConfirmDeleteModal({ confirmShow, onConfirm, onCancel, logToDelete }) {
    if(!confirmShow || ! logToDelete) return null;
    const formattedDate = new Date (logToDelete.date).toLocaleDateString("ru-RU",{
        day: "numeric",
        month: "long",
    });
    return (
        <div className={`deleteModal ${confirmShow ? "popup_opened" : ""}`}>
            <button className="deleteModal__close" type="button" onClick={onCancel} >
                x
            </button>
            <div className="deleteModal__wrapper">
                <div className="deleteModal__container">
                    <p className="deleteModal__text">Вы уверены, что хотите удалить эту запись?</p>
                    <div className="deleteModal__details">
                    <p className="deleteModal__text details">
                    📖 <strong>{logToDelete.bookId}</strong><br />
                        📅 {formattedDate}<br />
                        📘 {logToDelete.pages} стр.</p>
                        </div>
                </div>


                <div className="deleteModal__btns">
                    <button className="deleteModal__btn cancel" type="button" onClick={onCancel}>
                        Отмена
                    </button>
                    <button className="deleteModal__btn del" type="button" onClick={onConfirm} >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ConfirmDeleteModal;