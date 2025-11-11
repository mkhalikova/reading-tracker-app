import React, { useEffect, useState } from "react";
import '../Stats.css';
import AddLogReading from './AddLogReading';
import ShowLogs from './ShowLogs';
import ReadingChart from './ReadingChart';
import ConfirmDeleteModal from './ConfirmDeleteModal';

function Stats({ books }) {
    const [confirmShow, setConfirmShow] = useState(false);
    const [logToDelete, setLogToDelete] = useState(null);

    const readBooksCount = books.filter(book => book.status === 'прочитано').length;
  
    const [readingLogs, setReadingLogs] = useState(() => {
        const saved = localStorage.getItem("readingLogs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("readingLogs", JSON.stringify(readingLogs));
    }, [readingLogs]);

    function handleDeleteConfirm (log) {
        setConfirmShow(true);
       setLogToDelete(log);
    }
    function handleDelete() {
        if (logToDelete ) {
            setReadingLogs(prev => prev.filter(b => b.id !== logToDelete.id));
        }
        setConfirmShow(false);
        setLogToDelete(null);
    }
    function handleCancel() {
        setConfirmShow(false);
        setLogToDelete(null);
    }


    // 1. Группируем страницы по дате
    const grouped = readingLogs.reduce((acc, log) => {
        if (!acc[log.date]) {
            acc[log.date] = 0;
        }
        acc[log.date] += log.pages;
        return acc;
    }, {});



    const formattedData = Object.keys(grouped)
        .map(date => ({
            date,
            pages: grouped[date]
        }));



        function streakCount(formattedData) {
            const dateSet = new Set(formattedData.map(item => item.date)); // быстро проверяем наличие
            let count = 0;
            let current = new Date();
            current.setDate(current.getDate() - 1); // начинаем со вчерашнего дня
          
            while (dateSet.has(current.toISOString().split('T')[0])) {
              count++;
              current.setDate(current.getDate() - 1);
            }
          
            return count;
          }
          

    const streakData = streakCount(formattedData);


    return (
        <div className="stats">
            <h3>My Statistics</h3>
            <AddLogReading books={books} setReadingLogs={setReadingLogs} />
            <div className="stats__streak"><p>Дней чтения без перерыва: {streakData}</p></div>
            <div className="stats__wrapper">
                <ReadingChart data={formattedData} />
                <div className="books-total">
                    <p className="books-total__text">прочитано</p>
                    <div className="books-total__container">
                        <p className="books-total__count"> {readBooksCount}</p>
                    </div>
                    <p className="books-total__text" >книг</p>
                </div>
            </div>
           
            <ShowLogs readingLogs={readingLogs} deleteConfirm={handleDeleteConfirm} />
            <ConfirmDeleteModal confirmShow={confirmShow} 
            onConfirm={handleDelete} 
            onCancel={handleCancel}
            logToDelete={logToDelete}/>
        </div>
    );
}

export default Stats;