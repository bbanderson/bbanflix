import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px 30px 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding-top: 30px;
    background-color: ${props => props.scroll ? "black" : "none"};
    width: 100%;
`;

const Nav = styled.nav``;

const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    `;

const Item = styled.li`
    margin-right: 30px;
    border-bottom: 3px solid ${prop => (prop.currentTab ? "#c0392b" : "transparent")};
    transition: border-bottom .3s ease-in-out;
    padding: 10px 0;
    width: 80px;
    height: 100%;
    text-align: center;
    display: inline-block;
    &:hover {
        background-color: "#c0392b";
    }
    & a {
        display: block;
    }

`;

const SubHeaderMovie = styled.div`
    margin-top: 50px;
    padding: 0 30px;
`;

const SubHeaderBtn = styled.a`
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

const Header = withRouter(({location: {pathname}, history}) => (
    <Container scroll={window.scrollY >= 100}>
        <Nav>
            <List>
                <Item currentTab={pathname === '/'}><Link to="/">홈</Link></Item>
                <Item currentTab={pathname.includes('/movie')}><Link to="/movie/popular">영화</Link></Item>
                <Item currentTab={pathname.includes('/tv')}><Link to="/tv">TV 프로그램</Link></Item>
                <Item currentTab={pathname.includes('/search')}><Link to="/search">🔍</Link></Item>
            </List>
        </Nav>
        {/* {console.log(pathname.split('/movie/')[1][0])}
        {console.log(['p', 'n', 'u'].includes(pathname.split('/movie/')[1][0]))} */}
        {/* {console.log(typeof parseInt(encodeURI(pathname.split('/movie/')[1])))} */}
        {pathname.includes('/movie') && ['p', 'n', 'u'].includes(pathname.split('/movie/')[1][0]) && (
            <SubHeaderMovie currentPage={pathname.includes('/movie')}>
                <Link to="/movie/popular"><SubHeaderBtn currentTab={pathname === '/movie/popular'}>인기 100선</SubHeaderBtn></Link>
                <Link to="/movie/upcoming"><SubHeaderBtn currentTab={pathname === '/movie/upcoming'}>개봉 예정</SubHeaderBtn></Link>
                <Link to="/movie/now_playing"><SubHeaderBtn currentTab={pathname === '/movie/now_playing'}>최신 영화</SubHeaderBtn></Link>
            </SubHeaderMovie>
        )}
        {pathname !== "/" && pathname.includes('/movie') && !['p', 'n', 'u'].includes(pathname.split('/movie/')[1][0]) && (
            <SubHeaderMovie currentPage={pathname.includes('/movie')}>
            {console.log(history)}
                <SubHeaderBtn onClick={history.goBack}>뒤로 가기</SubHeaderBtn>
            </SubHeaderMovie>
        )}
        {pathname.includes('/tv') && (
            <SubHeaderMovie currentPage={pathname.includes('/tv')}>
                <Link to="/tv/popular"><SubHeaderBtn currentTab={pathname === '/tv/popular'}>인기 100선</SubHeaderBtn></Link>
                <Link to="/tv/upcoming"><SubHeaderBtn currentTab={pathname === '/tv/upcoming'}>개봉 예정</SubHeaderBtn></Link>
                <Link to="/tv/now_playing"><SubHeaderBtn currentTab={pathname === '/tv/now_playing'}>최신 영화</SubHeaderBtn></Link>
            </SubHeaderMovie>
        )}
    </Container>
));

export default Header;