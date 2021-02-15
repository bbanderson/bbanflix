import React, { useEffect, useState } from "react";
import { movieApi } from "../api";
import MovieContainer from "../Components/MovieContainer";
import InfiniteScroll from "../Components/InfiniteScroll";
import SubHeaderMovie from "../Components/SubHeaderMovie";
import Loader from "../Components/Loader";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popular, setPopular] = useState([]);
    const page = InfiniteScroll();
    console.log(page)
    console.log(popular)
    const getPopular = async () => {
        try {
            const {data: {results}} = await movieApi.getPopular(page);
            setPopular(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMorePopular = async () => {
        try {
            const {data: {results: newPopular}} = await movieApi.getPopular(page);
            setPopular([...popular, ...newPopular]);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPopular();
    }, [])
    useEffect(() => {
        getMorePopular();
    }, [page])
    return loading ? <Loader /> : <MovieContainer>{popular}</MovieContainer>
}

export default Movie;