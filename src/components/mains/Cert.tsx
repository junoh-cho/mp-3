import cert1 from "../../cert1.png";
import cert2 from "../../cert2.png";
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

export default function Cert(){
    return (
        <main>
            <h1>Certificates</h1>
            <StyledImg src={cert1} alt="Certificate1"/>
            <StyledImg src={cert2} alt="Certificate2"/>
        </main>
    );
}