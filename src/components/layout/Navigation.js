import { Link } from "react-router-dom";
import style from "./Navigation.module.css"


function MainNavigation (){
    return <header className={style.header} >
        <div className={style.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Meetup</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/Fav">Favourites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;