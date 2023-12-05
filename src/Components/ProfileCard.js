import React from "react";
import './ProfileCard.css'; // Import the CSS
import { Tab, Tabs, Box } from "@mui/material";
import Card from './Card/card'

//Images
import stick from '../images/stick.png'
import BTM from '../images/BTM.png'
import Raver from '../images/raver.png'
import GroundBreaker from '../images/groundbreaker.png'
import Chess from '../images/chess.png'
import Randomify from '../images/randomify.png'
import BodyCombat from '../images/bodycombat.jpg'
import StickJam from '../images/stickJam.png'
import Gyro from '../images/gyro.png'
import Nino from '../images/nino.png'
import Monkeys from '../images/monkeys.png'
import Slump from '../images/slump.png'
import Clown from '../images/clown.png'
import Odders from '../images/odders.png'
import Jam from '../images/jam.png'
import SGD from '../images/sgd.png'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItchIo, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const WorkedOnData = [
    {
        image: stick,
        category: "Puzzle game",
        description: "A cute puzzle game about a dog who loves looong sticks. - PC & Switch.",
        title: "Stick to the plan",
        url: "https://store.steampowered.com/app/2334280/Stick_to_the_Plan/"
    },
    {
        image: BTM,
        category: "Graphic adventure game",
        description: "Graphic (mis)adventure about a boy who becomes giant when hearing the word 'FUTURE'. - PC/Web.",
        title: "Bigger Than Me",
        url: "https://store.steampowered.com/app/1882690/Bigger_Than_Me/"
    },
    {
        image: Raver,
        category: "Narrative game",
        description: `Short narrative videogame made to commission for Brainwash Gang, starring a character from their game "Friends VS Friends". -PC/Web.`,
        title: "Raver's Rumble",
        url: "https://deadpixeltales.itch.io/ravers-rumble"
    },
    {
        image: GroundBreaker,
        category: "Roguelite",
        description: "GroundBreaker is an incremental roguelite experience where you have to reach the end of a dark mine. - PC/Web.",
        title: "Ground Breaker",
        url: "https://delunado.itch.io/groundbreaker"
    },
    {
        image: Chess,
        category: "External entity game",
        description: "The classic Chess game on Virtual Reality. Including multiplayer! - Oculus Quest, Pico.",
        title: "Chess Club",
        url: "https://www.oculus.com/experiences/quest/5353996901307344/"
    }
    ,
    {
        image: BodyCombat,
        category: "External entity game",
        description: "A fitness VR game based on Les Mills Bodycombat. I worked on the HTC porting. - Oculus Quest, HTC, Pico.",
        title: "Les Mills Body Combat VR",
        url: "https://www.oculus.com/experiences/quest/5353996901307344/"
    },
    {
        image: Randomify,
        category: "Library",
        description: "Randomify is a blazingly fast and easy-to-use weighted randomizer for Unity. - Unity Plugin.",
        title: "Randomify",
        url: "https://assetstore.unity.com/packages/templates/systems/randomify-fast-easy-weighted-randomizer-174978"
    }
];

const GameJamData = [
    {
        image: StickJam,
        category: "Puzzle game",
        description: "A cute puzzle game about a dog who loves looong sticks. Jam version. - PC & Switch.",
        title: "Stick to the plan [JAM]",
        url: "https://store.steampowered.com/app/2334280/Stick_to_the_Plan/"
    },
    {
        image: Gyro,
        category: "Puzzle game",
        description: "Physics-based puzzle game where you control the map, not the player! - PC/Web",
        title: "Gyroglyph",
        url: "https://delunado.itch.io/gyroglyph"
    },
    {
        image: Nino,
        category: "Turn-Based Shooter game",
        description: "Turn-Based Twin-Stick Shooter where Nino must look for his grandfather. - PC/Web.",
        title: "Nino, your grandpa is nuts!",
        url: "https://eufrasi0.itch.io/nino"
    },
    {
        image: Monkeys,
        category: "Local multiplayer game",
        description: "2-Players Local Competitive Game about Monkeball! - PC/Web",
        title: "Fighting Monkeys Temple Club",
        url: "https://gekkothefool.itch.io/monkeys-temple"
    },
    {
        image: Slump,
        category: "Casual game",
        description: "This little slime from outer space is just having a relaxing day jumping and having some fun! - PC/Web",
        title: "Slump!",
        url: "https://delunado.itch.io/slump"
    },
    {
        image: Clown,
        category: "Casual game",
        description: "A relaxing game where you are a little clownfish who lives in an anemone. Recolect food in order to survive! - PC/Web.",
        title: "Clownbiosis",
        url: "https://delunado.itch.io/clownbiosis"
    }
];


const TalksAndWorkshops = [
    {
        image: Odders,
        category: "Talk",
        description: "A talk about my experience jumping from 2D indie games to VR industry. - Spanish.",
        title: "Saltando entre dimensiones: 2D a VR",
        url: "https://www.youtube.com/watch?v=uHDHh5ad1LA"
    },
    {
        image: Jam,
        category: "Talk",
        description: "A handful of tips and tricks from my experience participating in Game Jams. - Spanish.",
        title: "Game Jams: ¿comer, dormir y... ganar?",
        url: "https://www.youtube.com/watch?v=E7I4RYhflY0"
    },
    {
        image: SGD,
        category: "Talk",
        description: "Around 18 talks about different parts of game development from both new and veterans from spanish gamedev industry. - Spanish.",
        title: "Spain Game Devs Talks",
        url: "https://www.youtube.com/@SpainGameDevs/videos"
    }

];


const ProfileCard = () => {

    const [actualTab, setActualTab] = useState("one");
    const [actualData, setActualData] = useState(WorkedOnData);

    const changeTab = (tab) => {
        if (tab === "one") {
            setActualTab("one");
            setActualData(WorkedOnData.concat(GameJamData).concat(TalksAndWorkshops));
        }
        if (tab === "two") {
            setActualTab("two");
            setActualData(WorkedOnData);
        }
        if (tab === "three") {
            setActualTab("three");
            setActualData(GameJamData);
        }
        if (tab === "four") {
            setActualTab("four");
            setActualData(TalksAndWorkshops);
        }

    }

    return (
        <div className="profile-card" style={{ height: '100vh' }}>
            <div className="profile-header">
                <div className="main-profile">
                    <div className="profile-image"></div>
                    <div className="profile-names">
                        <h1 className="username">Delunado</h1>
                        <small className="page-title">Human game dev</small>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="colunm-left">
                    <div className="about-me">
                        <div>
                            <h2 className="about-me-tittle">
                                About me
                            </h2>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                <p>
                                    Doing cool indie things at Dead Pixel Tales
                                </p>
                                <p>
                                    Creator & Director of Spain Game Devs
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="about-me-tittle" style={{ marginTop: '2rem' }}>
                                Contact me
                            </h2>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '30px', paddingTop: '15px' }}>
                                <a href='https://delunado.itch.io/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faItchIo} className="contact-icon" />
                                </a>
                                <a href='https://twitter.com/delunad0' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="contact-icon" />
                                </a>
                                <a href='https://www.linkedin.com/in/javi-camacho/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                                </a>
                                <a href='https://github.com/Delunado' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                                </a>
                                <a href='mailto:hello@delunado.com' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="colunm-right" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                        <Tabs
                            value={actualTab}
                            onChange={(event, newValue) => changeTab(newValue)}
                            aria-label="secondary tabs example"
                            sx={{
                                backgroundColor: 'transparent',
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'white',
                                },
                                display: 'flex',  // Asegurar que los elementos internos sean flexibles
                                justifyContent: 'center',  // Centrar las pestañas horizontalmente
                                width: '100%',  // Asegurar que las pestañas ocupen todo el ancho disponible
                            }}
                            style={{ marginBottom: '3rem', width: 'auto', display: 'flex', justifySelf: 'center', marginTop: '1rem' }}
                        >
                            <Tab
                                value="one"
                                label="All"
                                className="tab-style"
                                sx={{
                                    color: '#f3f3f3',
                                    width: '25%',
                                    '&.Mui-selected': {
                                        color: 'white', // Hacer el texto de la pestaña seleccionada blanco
                                    },
                                }}
                            />
                            <Tab
                                value="two"
                                label="Worked on"
                                className="tab-style"
                                sx={{
                                    color: '#f3f3f3',
                                    width: '25%',
                                    '&.Mui-selected': {
                                        color: 'white', // Hacer el texto de la pestaña seleccionada blanco
                                    },
                                }}
                            />
                            <Tab
                                value="three"
                                label="Game Jam things"
                                className="tab-style"
                                sx={{
                                    color: '#f3f3f3',
                                    width: '25%',
                                    '&.Mui-selected': {
                                        color: 'white', // Hacer el texto de la pestaña seleccionada blanco
                                    },
                                }}
                            />
                            <Tab
                                value="four"
                                label="Talks and Workshops"
                                className="tab-style"
                                sx={{
                                    color: '#f3f3f3',
                                    width: '25%',
                                    '&.Mui-selected': {
                                        color: 'white', // Hacer el texto de la pestaña seleccionada blanco
                                    },
                                }}
                            />
                        </Tabs>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100%' }}>
                            <div className="card-container">
                                {actualData.map((cardData, index) => (
                                    <Card key={index} {...cardData} />
                                ))}
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div >
    );
}

export default ProfileCard;