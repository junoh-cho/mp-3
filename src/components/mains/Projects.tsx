import { useState } from "react";
import tmnt from "../../tmnt.mp3";
import styled from "styled-components";

const InputContainer = styled.div`
    margin-top: 3%;
    padding: 3%;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: red;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2%;

    input[type="text"] {
        width: 40%;
        padding: 2vw;
        font-size: 2vw;
        background-color: white;
        color: black;
        border: 1vw solid black;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 3%;

        input[type="text"] {
            width: 80%;
            padding: 3vw;
            font-size: 3.5vw;
            border: 0.5vw solid black;
            border-radius: 1vw;
        }
    }
`;


const ButtonsContainer = styled.div`
  margin-top: 2%;
  text-align: center;
  background-color: green;

  button {
    padding: 1.2vw 2.5vw;
    margin: 2% 1%;
    font-size: 1.1vw;
    background-color: white;
    color: black;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const Output = styled.h3<{ isNegative: boolean }>`
  margin-top: 3%;
  font-size: 1.5vw;
  min-height: 3vw;
  padding-top: 2%;
  color: ${(props) => (props.isNegative ? "red" : "white")};
`;

export default function Projects() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [isNegative, setIsNegative] = useState(false);

    function addition() {
        const a = Number(first);
        const b = Number(second);
        const value = a + b;
        setResult(value);
        setIsNegative(value < 0);
    }

    function subtract() {
        const a = Number(first);
        const b = Number(second);
        const value = a - b;
        setResult(value);
        setIsNegative(value < 0);
    }

    function multiply() {
        const a = Number(first);
        const b = Number(second);
        const value = a * b;
        setResult(value);
        setIsNegative(value < 0);
    }

    function divide() {
        const a = Number(first);
        const b = Number(second);
        const value = a / b;
        setResult(value);
        setIsNegative(value < 0);
    }

    function exponent() {
        const a = Number(first);
        const b = Number(second);
        let value = a;
        for (let i = 1; i < b; i++) {
            value = value * a;
        }
        setResult(value);
        setIsNegative(value < 0);
    }

    function clearOutput() {
        setFirst("");
        setSecond("");
        setResult(null);
        setIsNegative(false);
    }

    return (
        <main>
            <h1>Projects</h1>
            <h3>JS calculator ft. Raphael from TMNT</h3>
            <audio controls autoPlay src={tmnt}></audio>

            <InputContainer id="input">
                <label htmlFor="first-number" />
                <input
                    type="text"
                    id="first-number"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />
                <label htmlFor="second-number" />
                <input
                    type="text"
                    id="second-number"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />
            </InputContainer>

            <ButtonsContainer id="buttons">
                <button onClick={addition}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
                <button onClick={exponent}>**</button>
                <button onClick={clearOutput}>Clear</button>
            </ButtonsContainer>

            <Output id="output" isNegative={isNegative}>
                {result !== null ? result : ""}
            </Output>
        </main>
    );
}
