import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div``;

const Trailer = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    /* top:0; */
    /* left:0; */
    /* position: relative; */
    border-radius: 5px;
`;

const ItemImage = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 300px;
    height:450px;
    transition: opacity .2s linear;
`;
const Item = styled.div`
    /* position: relative; */
    /* width: 125px; */
    height: 320px;
`;


const TrailerContainer = ({location: {pathname}, match: {params: {key}}, data}) =>
    // {console.log(pathname)}
     (
    <Container>
        {/* <Trailer> */}
        <Item>
        {key && <ItemImage src={`https://image.tmdb.org/t/p/w500/${key}.jpg`} />}
        </Item>
        {/* </Trailer> */}
    </Container>
    )
;

export default TrailerContainer;