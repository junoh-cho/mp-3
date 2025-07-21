import art1 from "../../art1.png";
import art2 from "../../art2.png";
import styled from "styled-components";

const StyledImg = styled.img`
    display: block;
    margin: 5% auto;
    max-width: 90%;
    height: auto;
    border: 2px solid white;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export default function Art(){
    return (
        <main>
            <h1>Art gallery</h1>
            <StyledImg src={art1} alt="Art1"/>
            <StyledImg src={art2} alt="Art2"/>
        </main>
    );
}