import React from "react";
import '../BookStatusLabel.css';

function BookStatusLabel({ status }) {
    const statusColors = {
        читаю: "book__state--reading",
        прочитано: "book__state--finished",
        вишлист: "book__state--wishlist",
        отложено: "book__state--postponed",
    };
    const statusClass = statusColors[status];
    return (
        <label className={`book__state ${statusClass}`}>{status}</label>
    );
}
export default BookStatusLabel;