import React from "react";
import '../BookStatusFilter.css';

function BookStatusFilter({counts, activeFilter, onFilterChange}) {
    const filters = [
        { key: "all", label: "Все книги" },
        { key: "read", label: "Прочитано" },
        { key: "reading", label: "Читаю" },
        { key: "wishlist", label: "Вишлист" }
    ]
    return (
        <div className="book-status-filter">
            {
                filters.map((f) => (
                    <button
                        key={f.key}
                        className={`book-status-filter__btn ${activeFilter === f.key ?
                            "active" : ""}`}
                        onClick={() => onFilterChange(f.key)}
                    >
                       <div className="book-status-filter__count-container">{f.label} <div className="book-status-filter__count">{counts[f.key]}</div></div> 
                    </button>
                )
                )
            }
        </div>
    );
}

export default BookStatusFilter;