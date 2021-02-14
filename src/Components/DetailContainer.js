// export default ({ location: { pathname }, match: { params: { id } } }) => {
//     console.log(id)
// }

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player";

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
    width: 300px;
    height: 400px;
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

const Trailer = styled.div`
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    /* position: relative; */
    border-radius: 5px;
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


const DetailContainer = ({title, children}) => {console.log(children);
    return(
        <>
        <Background src={`https://image.tmdb.org/t/p/original/${children.backdrop_path}`} />
        <Container>
            <ImagePart>
                <Poster src={`https://image.tmdb.org/t/p/original/${children.poster_path}`} />
            </ImagePart>
            <InfoPart>
            {/* imdb_id, runtime, release_date.substring(0,5) */}
                <Title>{children.title}<Imdb href={`https://www.imdb.com/title/${children.imdb_id}`} target="_blank"><i class="fab fa-imdb"></i></Imdb></Title>
                <Description>
                    <ReleaseDate>{children && children.release_date && children.release_date.substring(0, 4)}</ReleaseDate>
                    <RunTime>{children && children.runtime}분</RunTime>
                    <GenresContainer>{children && children.genres && children.genres.map((genre, index) => <Genre key={index}>{genre.name}</Genre>)}</GenresContainer>
                </Description>
                <Overview>{children && children.overview}</Overview>
                <Trailer>
                    {children.videos && children.videos.results[0] && children.videos.results[0].key && <ReactPlayer url={`https://www.youtube.com/watch?v=${children.videos.results[0].key}`} muted={true} autoPlay={false} controls={true} />}
                </Trailer>
            </InfoPart>
        </Container>
        </>
// {title}

)};

DetailContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string,
        overview: PropTypes.string,
    }))}


export default DetailContainer;