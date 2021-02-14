import React, { useEffect, useState } from "react";
import { tvApi } from "../api";
import TvContainer from "../Components/TvContainer";


const Tv = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popular, setPopular] = useState([]);
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
    useEffect(() => {
        getPopular();
    }, [])
    return loading ? "Loading": <TvContainer title="인기">{popular}</TvContainer>
}

export default Tv;