import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Movie from "../Screens/Movie";
import Tv from "../Screens/Tv";
import Search from "../Screens/Search";
import Home from "./Home";
import Detail from "../Screens/Detail";
import MoviesUpcoming from "../Screens/MoviesUpcoming";
import MoviesNowPlaying from "../Screens/MoviesNowPlaying";

const Router = () => (
    <HashRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/movie/popular" exact component={Movie} />
            <Route path="/movie/upcoming" exact component={MoviesUpcoming} />
            <Route path="/movie/now_playing" exact component={MoviesNowPlaying} />
            <Route path="/tv" component={Tv} />
            <Route path="/search" component={Search} />
            <Route path='/movie/:id' component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </HashRouter>
);

export default Router;