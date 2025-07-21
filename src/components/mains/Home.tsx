import pfp from "../../pfp.png";
import styled from "styled-components";

const StyledPfp = styled.img`
    display: block;
    max-width: 20%;
    margin: 2% auto;

  @media screen and (max-width: 1000px) {
      max-width: 30%;
  }
`;

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <StyledPfp src={pfp} alt="Junoh Cho" />
            <h3>{`I am currently pursuing my Bachelor's degree in Computer Science at Boston University.

My two broad objectives in life are:

1. To utilize my educational experience to help people—whether that means building meaningful software, solving real-world problems, or contributing to projects that have a positive impact.

2. To maintain a creative outlet that I am both proud of and personally fulfilled by—whether through art, design, or coding projects that allow me to express myself beyond technical boundaries.`}</h3>
        </>
    );
}
