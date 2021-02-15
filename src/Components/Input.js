import styled from "styled-components";

const Input = styled.input`
    all: unset;
    width: 100%;
    font-size: 3rem;
`;

export default (props) => <Input placeholder="검색어를 입력해 주세요" maxLength="30" onChange={props.changeTerm} />;