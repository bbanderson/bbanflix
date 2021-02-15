import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../api";
import InfiniteScroll from "../Components/InfiniteScroll";
import MovieContainer from "../Components/MovieContainer";

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

    const changeTerm = (e) => {
        const {target: {value}} = e;
        if(value !== "") {
            setTerm(value);
        }
    }

    useEffect(() => {
        getMovies()
    }, [term])
    useEffect(() => {
        getMoreMovies()
    }, [page])

    return (
        <>
            <Input placeholder="검색어를 입력해 주세요" maxLength="30" onChange={changeTerm} />
            <MovieContainer>{movies}</MovieContainer>
        </>
    )
}

export default Search;