import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5%;
        margin-top: 2%;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2vw;

        &:hover {
            font-weight: bold;
        }

        &#nav-red:hover {
            color: red;
        }
        &#nav-orange:hover {
            color: orange;
        }
        &#nav-yellow:hover {
            color: yellow;
        }
        &#nav-green:hover {
            color: green;
        }
        &#nav-blue:hover {
            color: blue;
        }
        &#nav-indigo:hover {
            color: indigo;
        }
    }
    @media screen and (max-width: 1000px) {
        ul {
            display: flex;
            flex-direction: row; /* Make nav vertical */
            align-items: center;
            padding: 0;
        }
        
        a {
            font-size: 2vw;
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link id="nav-red" to="/">Home</Link></li>
                <li><Link id="nav-orange" to="/education.html">Education</Link></li>
                <li><Link id="nav-yellow" to="/work.html">Work experience</Link></li>
                <li><Link id="nav-green" to="/cert.html">Certificates</Link></li>
                <li><Link id="nav-blue" to="/projects.html">Projects</Link></li>
                <li><Link id="nav-indigo" to="/art.html">Art Gallery</Link></li>
            </ul>
        </StyledNav>
    );
}
