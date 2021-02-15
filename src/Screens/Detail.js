import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../api";
import DetailContainer from "../Components/DetailContainer";

const Detail = ({location: {pathname}, match: {params: {id}}}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [detail, setDetail] = useState([]);
    const getDetail = async (id) => {
        try {
            if (pathname.includes('/movie/')) {
                const {data: newDetail} = await movieApi.getDetail(id);
                setDetail(newDetail);
            } else {
                const {data: newDetail} = await tvApi.getDetail(id);
                setDetail(newDetail);
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetail(id);
    }, [])

    return loading ? "Loading": <DetailContainer title="세부">{detail}</DetailContainer>
}

export default Detail;