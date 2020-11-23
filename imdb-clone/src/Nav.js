import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                alt="IMDB logo"
            />
            <button className="nav__button">☰ Menu</button>

            <div className="nav__search">
                <input type="text" className="nav__searchInput" />
                <SearchIcon className="nav__searchIcon" />
            </div>

            <button className="nav__button">IMDbPro</button>
            <button className="nav__button">
                <BookmarkIcon className="nav_bookmarkIcon" />Watchlist
            </button>
            <button className="nav__button">Sign In</button>
        </div >
    )
}

export default Nav
