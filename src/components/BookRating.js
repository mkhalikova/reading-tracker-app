import React from "react";
import '../BookRating.css';

function BookRating({ rating }) {

    return (
        <div className="book__rating">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className={index < (rating || 0) ? "active" : ""}
                >
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.417 8.268L12 19.771l-7.417 4.093L6 15.596 0 9.748l8.332-1.73z" />
                </svg>

            ))
            }
        </div>
    );
}
export default BookRating;