import React, { useEffect, useState } from "react";
import { BarChart, XAxis,YAxis, Bar, Tooltip, CartesianGrid } from "recharts";

import '../ChartNavigation.css';


function ChartNavigation( { weekStart, weekEnd, onPrev, onNext}) {




    return (
        <div className="nav-chart" >
            <button type="button" onClick={onPrev} className="nav-chart__btn">{"<"}</button>
            <p className="nav-chart__week">
                {weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}
                </p>
            <button type="button" onClick={onNext} className="nav-chart__btn">{">"}</button>
        </div>

    );
}
export default ChartNavigation;