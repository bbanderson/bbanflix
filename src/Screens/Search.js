import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "../api";
import InfiniteScroll from "../Components/InfiniteScroll";
import MovieContainer from "../Components/MovieContainer";
import TvContainer from "../Components/TvContainer";

const Input = styled.input`
    all: unset;
    width: 100%;
    font-size: 3rem;
`;

const Search = () => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [term, setTerm] = useState("");
    const page = InfiniteScroll();
    const getMovies = async () => {
        try {
            const {data: {results: movies}} = await movieApi.search(term, page);
            setLoading(true);
            setMovies(movies);
            console.log(movies);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }
    const getMoreMovies = async () => {
        try {
            const {data: {results: newMovies}} = await movieApi.search(term, page);
            setLoading(true);
            setMovies([...movies, ...newMovies]);
            console.log(movies);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }
    const getTv = async () => {
        try {
            const {data: {results: movies}} = await tvApi.search(term, page);
            setLoading(true);
            setTv(movies);
            console.log(movies);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }
    const getMoreTv = async () => {
        try {
            const {data: {results: newTv}} = await tvApi.search(term, page);
            setLoading(true);
            setTv([...tv, ...newTv]);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }

    const changeTerm = (e) => {
        const {target: {value}} = e;
        if(value !== "") {
            setTerm(value);
        }
    }

    useEffect(() => {
        getMovies();
        getTv();
    }, [term])
    useEffect(() => {
        getMoreMovies();
        getMoreTv();
    }, [page])

    return (
        <>
            <Input placeholder="검색어를 입력해 주세요" maxLength="30" onChange={changeTerm} />
            <MovieContainer>{movies}</MovieContainer>
            <TvContainer>{tv}</TvContainer>
        </>
    )
}

export default Search;