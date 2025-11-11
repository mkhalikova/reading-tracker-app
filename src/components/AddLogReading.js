import React, { useState } from "react";
import '../AddLogReading.css';
import NewLogReading from './NewLogReading';


function AddLogReading({ books, setReadingLogs }) {
    const [isLogging, setIsLogging] = useState(false);

    function handleClick() {
        if (isLogging) {
        setIsLogging(false); }
        else {
        setIsLogging(true);}
    }
    function handleAddLog(newLog) {
        setReadingLogs(prev => {
          const updated = [...prev, { id: Date.now(), ...newLog }];
          updated.sort((a,b) => new Date(a.date) - new Date(b.date));
          console.log("✅ Добавлена новая запись:", newLog);
          console.log("📚 Все записи:", updated);
          return updated;
        });
        setIsLogging(false);
      }

      

    return (
        <div className={`add-log ${isLogging ? "expanded" : "" }`} >
            <div className="add-log__visible">
            <div className="add-log__container" onClick={handleClick}>
                <p className="add-log__plus">{isLogging ? "-" : "+"}</p>
            </div>
            <div className="add-log__info">
                <h3 className="add-log__title">Добавить запись о чтении</h3>
                <p className="add-log__text">Следите за своим ежедневным прогрессом</p>
            </div>
            </div>
            <NewLogReading isLogging={isLogging}
                books={books}
                onCancel={() => setIsLogging(false)}
                onSubmit={handleAddLog} />
        </div>

    );
}
export default AddLogReading;