import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    font-size: 1vw;
    margin-top: 5%;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All rights reserved by Junoh Cho <a href="">Credits</a>&#169;
            </p>
        </StyledFooter>
    );
}
