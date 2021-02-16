import React, { useEffect, useState } from "react";
import { movieApi } from "../api";
import MovieContainer from "../Components/MovieContainer";
import InfiniteScroll from "../Components/InfiniteScroll";
import SubHeaderMovie from "../Components/SubHeaderMovie";
import Loader from "../Components/Loader";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [upcoming, setUpcoming] = useState([]);
    const page = InfiniteScroll();
    console.log(page)
    console.log(upcoming)
    const getUpcoming = async () => {
        try {
            const {data: {results}} = await movieApi.getUpcoming(page);
            setUpcoming(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMoreUpcoming = async () => {
        try {
            const {data: {results: newPopular}} = await movieApi.getUpcoming(page);
            setUpcoming([...upcoming, ...newPopular]);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getUpcoming();
    }, [])
    useEffect(() => {
        getMoreUpcoming();
    }, [page])
    return loading ? <Loader /> : <MovieContainer>{upcoming}</MovieContainer>
}

export default Movie;