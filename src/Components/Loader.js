import React from "react";
import styled from "styled-components";

const Loader = styled.div`
    background-image: url('https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif');
    width: 300px;
    height: 300px;
    position: absolute;
    top:0;
    right: 0;
`;

export default () => <Loader />;