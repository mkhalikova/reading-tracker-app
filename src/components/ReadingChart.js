import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from "recharts";
// import { motion, AnimatePresence } from "framer-motion";

import '../ReadingChart.css';
import ChartNavigation from './ChartNavigation';

function ReadingChart({ data }) {

    const [offset, setOffset] = useState(0);


    const today = new Date();
    const dayOfweek = today.getDay(); // 0-вс ... 6-сб
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - (dayOfweek === 0 ? 6 : dayOfweek - 1) + offset * 7);
    const startDate = new Date(currentMonday);
    const endDate = new Date(currentMonday);
    endDate.setDate(startDate.getDate() + 6);

    // console.log("today data: ", today);
    // console.log("номер дня недели: ", dayOfweek);
    // console.log("startDate нач недели: ", startDate);
    // console.log("endDate конец недели: ", endDate);

    startDate.setHours(0, 0, 0, 0); // нормализация дат
    endDate.setHours(23, 59, 59, 999);

    // Создаём массив всех дат недели
    function getWeekDates(startDate) {
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(startDate);
            d.setDate(startDate.getDate() + i);
            dates.push(d);
        }
        return dates;
    }
    // Преобразуем данные — подставляем нули
    function prepareWeekData(readingLogs, startDate, endDate) {
        const weekDates = getWeekDates(startDate);

        return weekDates.map(date => {
            const formatter = new Intl.DateTimeFormat('ru-RU', {
                day: 'numeric',
                month: 'short',
            });
            const dayString = date.toISOString().split('T')[0];

            const entry = readingLogs.find(log => {
                const logDate = new Date(log.date + 'T00:00');  // создаём локальную дату
                const logDateString = logDate.toISOString().split('T')[0];
                return logDateString === dayString;
            });

            return {
                date: formatter.format(date),
                pages: entry ? entry.pages : 0
            };
        });
    }

    const filteredData = prepareWeekData(data, startDate, endDate);

    function onPrev() {
        setOffset((prev) => prev - 1);
    }

    function onNext() {
        setOffset((prev) => prev + 1);
    }

    return (


        <div className="reading-chart" >
            <h3 className="reading-chart__title">Прогресс чтения по дням</h3>
            <BarChart
                width={600}    // ширина графика
                height={250}   // высота графика
                data={filteredData}    // подготовленные данные
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" interval={0} />                  {/* ось X — даты */}
                <YAxis />                                 {/* ось Y — количество страниц */}
                <Tooltip />                               {/* подсказка при наведении */}
                <Bar dataKey="pages" fill="#404f68" />

            </BarChart>
            <ChartNavigation weekStart={startDate}
                weekEnd={endDate}
                onPrev={onPrev}
                onNext={onNext}
            />
        </div>

    );
}
export default ReadingChart;