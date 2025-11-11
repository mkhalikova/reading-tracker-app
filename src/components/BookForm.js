import React, { useState, useEffect } from "react";
import '../BookForm.css';


function BookForm({ onSubmit, mode, book, onAddSubmit }) {
    const initialValues = {
        id: Date.now(),
        title: "",
        author: "",
        cover: "",
        status: "вишлист",
        total: 0,
        progress: 0,
        rating: 0,
        description: "",
        notes: "",
        quotes: "",
        startDate: "",
        finishDate: ""
    }

    // const [formData, setFormData] = useState(initialValues);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [hover, setHover] = useState(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const [formData, setFormData] = useState(() =>
        mode === "edit"
            ? { ...book }              // если редактируем — сразу подставляем статус книги
            : { ...initialValues } // если создаём — пустые поля
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === "edit") {
            onSubmit(formData);
        } else {
            onAddSubmit(formData);
        }

    };
    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="book-form__header-container">
                <h2 className="book-form__header">{mode === "edit" ? "Редактировать книгу" : "Добавить книгу"}</h2>
                <p className="book-form__text">{mode === "edit" ? "Редактировать данные о книге" : "Заполните детали, чтобы добавить книгу в коллекцию"}</p>
            </div>
            <div className="book-form__container">
                {/* основные поля */}
                <label className="book-form__label">
                    Название:
                </label>
                <input className="book-form__input"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label className="book-form__label">
                    Автор:
                </label>
                <input className="book-form__input"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />

                <label className="book-form__label">
                    Статус:
                </label>
                {/* <select id="status" name="status" className="book-form__select"
                    value={formData.status}
                    onChange={handleChange}>
                    <option value="читаю">читаю</option>
                    <option value="прочитано">прочитано</option>
                    <option value="вишлист">вишлист</option>
                    <option value="отложено">отложено</option>
                </select> */}
                <div className="status-select">
                    {["читаю", "прочитано", "вишлист", "отложено"].map((status) => (
                        <div
                            key={status}
                            className={`status-option ${(formData.status === status) ? "active" : ""}`}
                            onClick={() =>
                                setFormData((prev) => ({ ...prev, status }))
                            }
                        >
                            {status}
                        </div>
                    ))}
                </div>




                {/* расширенные поля */}
                {/* {!showAdvanced && ( */}
                <button className={`book-form__toggle-btn ${showAdvanced ? "active" : ""}`}
                    type="button"
                    onClick={() => setShowAdvanced(prev => !prev)}>
                    {showAdvanced ? "Скрыть расширенные поля" : "Показать расширенные поля"}
                </button>
                {/* )} */}

                {showAdvanced && (
                    <div className="book-form__advanced">
                        <label className="book-form__label">
                            Обложка (URL):
                        </label>
                        <input className="book-form__input"
                            type="text"
                            name="cover"
                            value={formData.cover}
                            onChange={handleChange}
                        />

                        <label className="book-form__label">
                            Количество страниц:
                        </label>
                        <input className="book-form__input"
                            type="number"
                            name="total"
                            value={formData.total}
                            onChange={handleChange}
                        />
                        <label className="book-form__label">
                            Аннотация:
                        </label>
                        <textarea name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="book-form__decsr"></textarea>

                        {formData.status === "прочитано" && (
                            <>
                                <label className="book-form__label">
                                    Рейтинг (1-5):
                                </label>


                                <div className="rating-select">
                                    {[...Array(5)].map((_, index) => {
                                        const starValue = index + 1;
                                        return (
                                            <svg
                                                key={starValue}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="15"
                                                height="15"
                                                className={`status-rating ${(hover || formData.rating) >= starValue ? "active" : ""}`}
                                                onClick={() =>
                                                    setFormData((prev) => ({ ...prev, rating: starValue }))
                                                }
                                                onMouseEnter={() => setHover(starValue)}
                                                onMouseLeave={() => setHover(0)}
                                            >
                                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.417 8.268L12 19.771l-7.417 4.093L6 15.596 0 9.748l8.332-1.73z" />
                                            </svg>
                                        );
                                    })}
                                </div>



                            </>
                        )}
                        {(formData.status === "прочитано" || formData.status === "читаю") && (
                            <>
                                <label className="book-form__label">
                                    Дата начала чтения:
                                </label>
                                <input className="book-form__input"
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {formData.status === "читаю" && (
                            <>
                                <label className="book-form__label">
                                    Прочитано страниц:
                                </label>
                                <input className="book-form__input"
                                    type="number"
                                    name="progress"
                                    value={formData.progress}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {formData.status === "прочитано" && (
                            <>
                                <label className="book-form__label">
                                    Дата окончания чтения:
                                </label>
                                <input className="book-form__input"
                                    type="date"
                                    name="finishDate"
                                    value={formData.finishDate}
                                    onChange={handleChange}
                                />
                            </>
                        )}


                        <label className="book-form__label">
                            Заметки:
                        </label>
                        <textarea name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="book-form__decsr"></textarea>
                        <label className="book-form__label">
                            Цитаты:
                        </label>
                        <textarea name="quotes"
                            value={formData.quotes}
                            onChange={handleChange}
                            className="book-form__decsr"></textarea>
                    </div>

                )}
            </div>
            <div className="book-form__submit-container">
                <button type="submit" className="book-form__submit" onSubmit={onSubmit}>
                    {mode === "edit" ? "Сохранить изменения" : "Добавить книгу"}
                </button>
            </div>
        </form>
    );
}

export default BookForm;