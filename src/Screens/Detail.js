import React, { useEffect, useState } from "react";
import { movieApi } from "../api";
import DetailContainer from "../Components/DetailContainer";

const Detail = ({location: {pathname}, match: {params: {id}}}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [detail, setDetail] = useState([]);
    const getDetail = async (id) => {
        try {
            const {data: newDetail} = await movieApi.getDetail(id);
            setDetail(newDetail);
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