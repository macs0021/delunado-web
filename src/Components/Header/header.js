//react
import React from "https://esm.sh/react@18.2.0";
import './header.css'
import { useState } from "react";

const Header = ({ title, description }) => {

    const [indiceActivo, setIndiceActivo] = useState(null);

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
        console.log(clase);
    }



    let squares = [];

    for (let i = 0; i < 20; i++) {
        squares.push(i);
    }

    const generateRandomNum = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);



    return (
        <div className="intro">
            <div className="quote" style={{ width: 'auto' }}>
                <p style={{ fontSize: '0.6rem' }}>Try me!</p>
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
                                        animationDelay: `${i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0}s`,
                                        animationDuration: `${generateRandomNum({ min: 10, max: 50 })}s`,
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