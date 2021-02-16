import React, { useEffect, useState } from "react";
import { tvApi } from "../api";
import TvContainer from "../Components/TvContainer";
import InfiniteScroll from "../Components/InfiniteScroll";
import Loader from "../Components/Loader";

const Tv = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popular, setPopular] = useState([]);
    const page = InfiniteScroll();
    console.log(popular)
    const getPopular = async () => {
        try {
            const {data: {results}} = await tvApi.getPopular();
            setPopular(results);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    const getMorePopular = async () => {
        try {
            const {data: {results: newPopular}} = await tvApi.getPopular(page);
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
    return loading ? <Loader /> : <TvContainer>{popular}</TvContainer>
}

export default Tv;