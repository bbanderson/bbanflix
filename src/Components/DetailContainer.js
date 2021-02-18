// export default ({ location: { pathname }, match: { params: { id } } }) => {
//     console.log(id)
// }

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import TrailerContainer from "../Components/Trailer";
import SeasonContainer from "../Components/SeasonContainer";

const Title = styled.div`
    font-size: 2rem;
    margin-bottom: 10px;
    & i {
        margin-left: 10px;
        color: #f1c40f;
        cursor: pointer;
    }
`;

const Imdb = styled.a``;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 30px;
    margin-top: 50px;
    /* align-items: center; */
`;

const ImagePart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 564px;
    height: 847px;
    /* size: 564px 847px; */
`;

const InfoPart = styled.div`
    position: relative;
    padding: 0 80px;
`;

const Background = styled.div`
    z-index: -1;
    position: absolute;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    opacity: .25;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(5px);
    justify-self: center;
`;

const Poster = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: opacity .2s linear;
    align-items: center;
    vertical-align: middle;
    border-radius: 5px;
`;

const Overview = styled.div`
    margin: 15px 0;
    line-height: 1.5;
    font-size: 1.1rem;
`;

const Description = styled.div`
    margin: 30px 0;
    padding: 0 5px;
    & div {
        margin-right: 15px;
    }
`;

const ReleaseDate = styled.div`
    display: inline;
`;

const RunTime = styled.div`
    display: inline;
`;

const GenresContainer = styled.div`
    display: inline;

`;

const Genre = styled.span`
    background-color: white;
    border-radius: 3px;
    color: black;
    padding: 4px 7px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const ProductionCompanies = styled.div``;

const ProductionCountries = styled.div``;

const ProductionItem = styled.span`
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const TrailerHeader = styled.div`
    margin: 30px 0;
    width: 100%;
`;
const TrailerMenu = styled.button`
    margin-right: 30px;
    &:hover {
        background-color: white;
        color: black;
    }
    margin-right: 30px;
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    display: inline;
    cursor: pointer;
    background-color: ${props => props.currentTab ? "white" : "transparent"};
    color: ${props => props.currentTab ? "black" : "white"};
    transition: background-color .2s ease-in;
    transition: color .2s ease-in;
`;

const DetailContainer = ({title, children, path, current}) => {console.log(children);console.log(current);
    return(
        <>
        <Background src={`https://image.tmdb.org/t/p/original/${children.backdrop_path}`} />
        <Container>
            <ImagePart>
                <Poster src={`https://image.tmdb.org/t/p/original/${children.poster_path}`} />
            </ImagePart>
            <InfoPart>
            {/* imdb_id, runtime, release_date.substring(0,5) */}
                <Title>{children.title || children.name}{children.imdb_id && <Imdb href={`https://www.imdb.com/title/${children.imdb_id}`} target="_blank"><i class="fab fa-imdb"></i></Imdb>}</Title>
                <Description>
                    <ReleaseDate>{(children && children.release_date && children.release_date.substring(0, 4)) || (children && children.first_air_date && children.first_air_date.substring(0, 4))}</ReleaseDate>
                    <RunTime>{(children && children.runtime) || (children && children.episode_run_time && children.episode_run_time[0])}분</RunTime>
                    <GenresContainer>{children && children.genres && children.genres.map((genre, index) => <Genre key={index}>{genre.name}</Genre>)}</GenresContainer>
                </Description>
                <Overview>{children && children.overview}</Overview>
                <ProductionCompanies>배급사 : {children.production_companies && children.production_companies.map(company => <ProductionItem>{company.name}</ProductionItem>)}</ProductionCompanies>
                <ProductionCountries>소유국 : {children.production_countries && children.production_countries.map(country => <ProductionItem>{country.name}</ProductionItem>)}</ProductionCountries>
                <TrailerHeader>{children.videos && children.videos.results.map((video, index) => {return <Link to={`/movie/${path}/trailer/${video.key}`}><TrailerMenu currentTab={current && current.includes('/trailer/') && current.split('/trailer/')[1] == video.key}>예고편 {index + 1}</TrailerMenu></Link>})}</TrailerHeader>
                <TrailerHeader>{children.seasons && children.seasons.map(season => <Link to={`/tv/${path}/season${String(season.poster_path).slice(0, -4)}`}><TrailerMenu currentTab={current && current.includes('/season/') && current.split('/season/')[1] === String(season.poster_path).slice(1,-4)}>{season.name}</TrailerMenu></Link>)}</TrailerHeader>
                <Route path={`/movie/:id/trailer/:key`} component={TrailerContainer} />
                <Route path={`/tv/:id/season/:key`} component={SeasonContainer} />

            </InfoPart>
        </Container>
        </>
// {title}

)};

DetailContainer.propTypes = {
    title: PropTypes.string,
    path: PropTypes.number,
    children: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string,
        overview: PropTypes.string,
    }))}


export default DetailContainer;