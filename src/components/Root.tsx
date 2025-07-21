import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import { Routes, Route } from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Work from "./mains/Work.tsx";
import Cert from "./mains/Cert.tsx";
import Projects from "./mains/Projects.jsx";
import Art from "./mains/Art.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
    background-color: black;
    color: white;
    padding: 3%;
    display: flex;
    flex-direction: column;
`;

const MainContainer = styled.main`
    max-width: 80%;
    margin: 0 auto ;
    text-align: left;
    

    h1 {
        font-size: 2vw;
        margin-bottom: 5%;
    }

    h3 {
        font-size: 1.2vw;
        margin-top: 2%;
    }

    /* Responsive media query */
    @media screen and (max-width: 1000px) {
        h1 {
            font-size: 5vw;
            text-align: center;
        }
        h3 {
            font-size: 3.5vw;
        }
        
    }
`;

export default function Root() {
    return (
        <Wrapper>
            <Header />
            <Nav />
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education.html" element={<Education />} />
                    <Route path="/work.html" element={<Work />} />
                    <Route path="/cert.html" element={<Cert />} />
                    <Route path="/projects.html" element={<Projects />} />
                    <Route path="/art.html" element={<Art />} />
                </Routes>
            </MainContainer>
            <Footer />
        </Wrapper>
    );
}
