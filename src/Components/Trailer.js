import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div``;

const Trailer = styled.div`
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    /* position: relative; */
    border-radius: 5px;
`;

const TrailerContainer = ({location: {pathname}, match: {params: {key}}, data}) =>
    // {console.log(pathname)}
     (
    <Container>
        <Trailer>
        {key && <ReactPlayer url={`https://www.youtube.com/watch?v=${key}`} muted={true} autoPlay={false} controls={true} />}
        </Trailer>
    </Container>
    )
;

export default TrailerContainer;