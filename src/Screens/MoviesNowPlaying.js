import React, { useEffect, useState } from "react";
import { movieApi } from "../api";
import MovieContainer from "../Components/MovieContainer";
import InfiniteScroll from "../Components/InfiniteScroll";
import Loader from "../Components/Loader";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nowPlaying, setNowPlaying] = useState([]);
    const page = InfiniteScroll();
    console.log(page)
    console.log(nowPlaying)
    const getNowPlaying = async () => {
        try {
            const {data: {results}} = await movieApi.getNowPlaying(page);
            setNowPlaying(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMoreNowPlaying = async () => {
        try {
            const {data: {results: newNowPlaying}} = await movieApi.getNowPlaying(page);
            setNowPlaying([...nowPlaying, ...newNowPlaying]);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getNowPlaying();
    }, [])
    useEffect(() => {
        getMoreNowPlaying();
    }, [page])
    return loading ? <Loader /> : <MovieContainer>{nowPlaying}</MovieContainer>
}

export default Movie;