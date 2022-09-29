import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css"
import FavoritesContext from "../../store/favorites-context";

function MainNavigation (){
    const favoritesCtx = useContext(FavoritesContext);

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
                    <Link to="/Fav">
                        Favourites
                        <span className={style.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;