import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

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


const Rating = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const ItemImage = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    height:100%;
    cursor: pointer;
    transition: opacity .2s linear;
`;

const ItemTitle = styled.div`
    padding-top: 10px;
`;


const Item = styled.div`
    position: relative;
    /* width: 125px; */
    height: 320px;
    &:hover {
        ${Rating} {
            opacity: 1;
        }
        ${ItemImage} {
            opacity: .3;
        }
    }
`;

const MovieContainer = ({title, children}) => {console.log(children);
    return(
        <Section>
    <SectionTitle>{title}</SectionTitle>
    <GridContainer>
    {children.map(child =>
    {
        const star = [];
        for (let i=0; i < child.vote_average; i++) {
            star.push(<i class="fas fa-star"></i>)
        }
        console.log(star)
        return (
        <>
            <Link to={`/movie/${child.id}`}>
                <Item>
                    <ItemImage src={`https://image.tmdb.org/t/p/w500/${child.poster_path}`} />
                    <Rating>{star.forEach(e => e)} {child.vote_average} / 10</Rating>
                    <ItemTitle>{child.title.length >= 10 ? `${child.title}...` : child.title}</ItemTitle>
                </Item>
            </Link>
        </>
        )
    }
    )}
    </GridContainer>
    </Section>
)};

MovieContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number
    }))}


export default MovieContainer;