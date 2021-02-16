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

const TrailerContainer = ({data:video}) =>
     (
    <Container>
        <Trailer>
        {console.log(video)}
        {video && <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} muted={true} autoPlay={false} controls={true} />}
            {/* {video.videos && video.videos.results[0] && video.videos.results[0].key && <ReactPlayer url={`https://www.youtube.com/watch?v=${video.videos.results[0].key}`} muted={true} autoPlay={false} controls={true} />} */}
        </Trailer>
    </Container>
    )
;

export default TrailerContainer;