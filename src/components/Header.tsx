import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 1%;

  h1 {
    font-size: 2.5vw;
    margin-bottom: 1%;
  }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Junoh Cho</h1>
        </StyledHeader>
    );
}