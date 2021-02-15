import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Section = styled.div`
`;

const SectionTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 30px 30px 50px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 50px 10px;
    justify-content: center;
`;

const Item = styled.div`
    /* width: 125px; */
    height: 320px;
`;

const ItemImage = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    height:100%;
    cursor: pointer;
    &:hover {
        opacity: .5;
    }
    transition: opacity .2s linear;
`;

const ItemTitle = styled.div`
    padding-top: 10px;
`;

const TvContainer = ({title, children}) => {console.log(children); return(
    <Section>
    <SectionTitle>{title}</SectionTitle>
    <GridContainer>
    {children.map(child => 
    <Link to={`/tv/${child.id}`}>
        <Item>
            <ItemImage src={`https://image.tmdb.org/t/p/w500/${child.poster_path}`} />
            <ItemTitle>{child.name.length >= 10 ? `${child.name}...` : child.name}</ItemTitle>
        </Item>
    </Link>
        )}
    </GridContainer>
    </Section>
)};

TvContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number
    }))}


export default TvContainer;