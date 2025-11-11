import React from "react";
import '../BookProgress.css';

function BookProgress({ progress, total }) {

    return (
        <div className="book__progress-bar">

                        <div className="progress-bar__border">
                            <div className="progress-bar__line" style={{ width: `${(progress / total) * 100}%` }}></div>
                        </div>
                        <p className="progress-bar__pages">{progress} / {total}</p>
                    </div>
    );
}
export default BookProgress;