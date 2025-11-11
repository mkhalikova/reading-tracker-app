import React from "react";
import { NavLink } from "react-router-dom";
import '../Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/books" className="sidebar-link">Мои книги</NavLink>
            <NavLink to="/stats" className="sidebar-link">Статистика</NavLink>
            <NavLink to="/quotes" className="sidebar-link">Цитаты</NavLink>
            <NavLink to="/wishlist" className="sidebar-link">Ebooks</NavLink>
        </div>
    );
}

export default Sidebar;