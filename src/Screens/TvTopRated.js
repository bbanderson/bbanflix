import React, { useEffect, useState } from "react";
import { tvApi } from "../api";
import TvContainer from "../Components/TvContainer";
import InfiniteScroll from "../Components/InfiniteScroll";

const Tv = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topRated, setTopRated] = useState([]);
    const page = InfiniteScroll();
    console.log(page)
    console.log(topRated)
    const getTopRated = async () => {
        try {
            const {data: {results}} = await tvApi.getTopRated(page);
            setTopRated(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMoreTopRated = async () => {
        try {
            const {data: {results: newAiringToday}} = await tvApi.getTopRated(page);
            setTopRated([...topRated, ...newAiringToday]);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getTopRated();
    }, [])
    useEffect(() => {
        getMoreTopRated();
    }, [page])
    return loading ? "Loading": <TvContainer>{topRated}</TvContainer>
}

export default Tv;