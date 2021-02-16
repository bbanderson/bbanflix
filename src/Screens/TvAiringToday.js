import React, { useEffect, useState } from "react";
import { tvApi } from "../api";
import TvContainer from "../Components/TvContainer";
import InfiniteScroll from "../Components/InfiniteScroll";
import Loader from "../Components/Loader";

const Tv = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [airingToday, setAiringToday] = useState([]);
    const page = InfiniteScroll();
    console.log(page)
    console.log(airingToday)
    const getAiringToday = async () => {
        try {
            const {data: {results}} = await tvApi.getAiringToday(page);
            setAiringToday(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMoreAiringToday = async () => {
        try {
            const {data: {results: newAiringToday}} = await tvApi.getAiringToday(page);
            setAiringToday([...airingToday, ...newAiringToday]);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getAiringToday();
    }, [])
    useEffect(() => {
        getMoreAiringToday();
    }, [page])
    return loading ? <Loader /> : <TvContainer>{airingToday}</TvContainer>
}

export default Tv;