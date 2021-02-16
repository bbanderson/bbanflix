import React from "react";
import styled from "styled-components";

const Loader = styled.div`
    background-image: url('https://loading.io/asset/453061');
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    right: 0;
`;

export default () => <Loader />;