import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Movie from "../Screens/Movie";
import Tv from "../Screens/Tv";
import Search from "../Screens/Search";
import Home from "../Screens/Home";
import Detail from "../Screens/Detail";
import MoviesUpcoming from "../Screens/MoviesUpcoming";
import MoviesNowPlaying from "../Screens/MoviesNowPlaying";
import TvAiringToday from "../Screens/TvAiringToday";
import TvTopRated from "../Screens/TvTopRated";

const Router = () => (
    <HashRouter>
        <Header />
        <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/movie" exact component={Movie} />
            <Route path="/movie/popular" exact component={Movie} />
            <Route path="/movie/upcoming" exact component={MoviesUpcoming} />
            <Route path="/movie/now_playing" exact component={MoviesNowPlaying} />
            <Route path='/movie/:id' component={Detail} />
            <Route path="/tv" exact component={Tv} />
            <Route path="/tv/popular" exact component={Tv} />
            <Route path="/tv/airing_today" exact component={TvAiringToday} />
            <Route path="/tv/top_rated" exact component={TvTopRated} />
            <Route path='/tv/:id' component={Detail} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/movie/popular" />
        </Switch>
    </HashRouter>
);

export default Router;