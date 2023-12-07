//react
import './header.css'
import { useState } from "react";

const Header = ({ title, description }) => {

    let squaresSize = 20;
    let maxWait = 20;
    let maxDuration = 50;

    function checkMobileSize() {
        const anchoPantalla = window.innerWidth;
        if (anchoPantalla <= 768) {
            // Es un dispositivo móvil, haz algo aquí
            squaresSize = 5;
            maxWait = 3;
            maxDuration=10;
        } 
    }

    // Llama a la función para detectar y actuar según el tipo de dispositivo
    checkMobileSize();



    const manejarClic = (clase) => {
        const elemento = document.getElementById("square" + clase);
        const container = document.getElementById("container" + clase);

        if (elemento) {
            // Move the container to the square's position
            const squarePosition = elemento.getBoundingClientRect();
            container.style.transform = `translate(${squarePosition.left}px, ${squarePosition.top}px)`;

            if (elemento.style.animationPlayState == 'paused') {
                elemento.style.animationPlayState = 'running';
            } else {
                elemento.style.animationPlayState = 'paused';
            }

            // Pause the square's animation

        }
    }

    let squares = [];

    for (let i = 0; i < squaresSize; i++) {
        squares.push(i);
    }

    const generateRandomNum = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);



    return (
        <div className="intro">
            <div className="quote" style={{ width: 'auto' }}>
                <p style={{ fontSize: '0.6rem' }} className='try-me'>Try me!</p>
            </div>
            <div className="squares-wrapper">
                <ul className="squares">
                    {squares.map((el, i) => {
                        const randomDimensions = Math.floor(
                            Math.random() * (150 - 15 + 1) + 15
                        );
                        return (
                            <>
                                <div key={"container" + i} id={"container" + el}></div>
                                <li
                                    key={i}
                                    id={"square" + el}
                                    onClick={() => manejarClic(el)}
                                    style={{
                                        left: `${generateRandomNum({ min: 0, max: 90 })}%`,
                                        width: randomDimensions,
                                        height: randomDimensions,
                                        animationDelay: `${i % 2 ? generateRandomNum({ min: 0, max: maxWait}) : 0}s`,
                                        animationDuration: `${generateRandomNum({ min: 10, max: maxDuration })}s`,
                                    }}
                                />
                            </>
                        );
                    })}
                </ul>
            </div>
            <div className="image-overlay" />
        </div>
    );
};

export default Header;