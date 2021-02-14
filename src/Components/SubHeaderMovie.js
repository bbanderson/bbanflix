import React from "react";
import { Link, Route } from "react-router-dom";
import MoviesUpcoming from "../Screens/MoviesUpcoming";
import Movie from "../Screens/Movie";

const SubHeaderMovie = ({location: {pathname}}) => {
    if(pathname.includes('/movie')) {  
        return (<>
        <Link to="/movie/popular">인기 100선</Link>
        <Link to="/movie/upcoming">개봉 예정</Link>
        <Link to="/movie/now_playing">최신 영화</Link>
        </>)
    }
}

export default SubHeaderMovie;