import React from "react";
import '../ShowLogs.css';



function ShowLogs({ readingLogs, deleteConfirm }) {
   
    function formatDate(logDate) {
        const date = new Date(logDate);
        return date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })

       
    }
    return (
        <div className="show-log" >
            <div className="show-log__visible">
                <h3 className="show-log__title">Recent Reading History</h3>
                <div className="show-log__table-wrapper">
                    {[...readingLogs].reverse().map(log => (
                        <div className="show-log__info" key={log.id}>
                            <div className="show-log__info-wrapper">
                                <div className="show-log__info-container">
                                    <p className="show-log__info-text">{log.bookId}</p>
                                    <div className="show-log__info-pages">{log.pages} стр.</div>
                                </div>
                                <p className="show-log__info-text data">{formatDate(log.date)}</p>
                            </div>
                            <div>
                                <button className="show-log__btn-remove" title="Удалить запись" type="button" 
                                onClick={() => deleteConfirm(log)} >-</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>

    );
}
export default ShowLogs;