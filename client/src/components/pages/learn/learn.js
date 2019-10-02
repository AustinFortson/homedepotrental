import React from 'react';
import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import tilesawrental from '../../images/tilesawrental.jpg';
import carpetdryerrental from '../../images/carpetdryerrental.jpg';
import aeratorrental from '../../images/aeratorrental.jpg';
import chainsawrental from '../../images/chainsawrental.jpg';
import drainsnakerental from '../../images/drainsnakerental.jpg';
import floorsanderrental from '../../images/floorsanderrental.jpg';
import generatorrental from '../../images/generatorrental.jpg';
import hammerdrillrental from '../../images/hammerdrillrental.jpg';
import hedgetrimmerrental from '../../images/hedgetrimmerrental.jpg';
import ladderrental from '../../images/ladderrental.jpg';
import lawnedgerrental from '../../images/lawnedgerrental.jpg';
import paintsprayerrental from '../../images/paintsprayerrental.jpg';
import prunerrental from '../../images/prunerrental.jpg';
import pumprental from '../../images/pumprental.jpg';
import sodcutterrental from '../../images/sodcutterrental.jpg';
import tillerrental from '../../images/tillerrental.jpg';
import trencherrental from '../../images/trencherrental.jpg';
import LearnCard from '../../learncard/learncard';
import './learn.scss';



export default function learn() {

    return (
    <div>

        <Row>
            <Container>
                <Jumbotron id ="jumbotron">
                    <h1>LEARN THE TOOL BEFORE RENTING </h1>
                    <h3>
                        Watch from Home Depot video tutorials on how the tool works before renting
                    </h3>
                    <p>
                        <Button id="youtubeLink" href="https://www.youtube.com/watch?v=uzMgWkgKXvc&list=PL4wNSwy14b1DdGv8ZnyLfzJJzjbIJbfGJ&index=1" target="_blank">See All Videos</Button>
                    </p>
                </Jumbotron>
            </Container>
        </Row>

        <Row id="learnSection">
            <LearnCard
            videoId="gFHdmMl0tR4"
            learnIMG={tilesawrental}
            learnTitle="Tile Saws"
            />
            <LearnCard
            videoId="7CqKL5zteZs"
            learnIMG={carpetdryerrental}
            learnTitle="Carpet Dryers"
            />
            <LearnCard
            videoId="dpENlBYv4Ew"
            learnIMG={aeratorrental}
            learnTitle="Aerators"
            />
            <LearnCard
            videoId="VbDoKn9eb9Y"
            learnIMG={chainsawrental}
            learnTitle="Chainsaws"
            />
            <LearnCard
            videoId="LpCzDMR1LCs"
            learnIMG={floorsanderrental}
            learnTitle="Floor Sanders"
            />
            <LearnCard
            videoId="Z0Zo51lfxl4"
            learnIMG={drainsnakerental}
            learnTitle="Drain Snakes"
            />
            <LearnCard
            videoId="rM9M-tqAuek"
            learnIMG={generatorrental}
            learnTitle="Generators"
            />
            <LearnCard
            videoId="2JLtTCfL9To"
            learnIMG={hammerdrillrental}
            learnTitle="Hammer Drills"
            />
            <LearnCard
            videoId="hTmWSoT8PCg"
            learnIMG={hedgetrimmerrental}
            learnTitle="Hedge Trimmers"
            />
            <LearnCard
            videoId="vnAaP1dJndo"
            learnIMG={ladderrental}
            learnTitle="Ladders"
            />
            <LearnCard
            videoId="lYc1afLIOd0"
            learnIMG={lawnedgerrental}
            learnTitle="Lawn Edgers"
            />
            <LearnCard
            videoId="s6y89SV3PY8"
            learnIMG={paintsprayerrental}
            learnTitle="Paint Sprayers"
            />
            <LearnCard
            videoId="P0bmEXFJQMY"
            learnIMG={prunerrental}
            learnTitle="Power Pruners"
            />
            <LearnCard
            videoId="b5O9ES_YvjE"
            learnIMG={pumprental}
            learnTitle="Pumps"
            />
            <LearnCard
            videoId="uzMgWkgKXvc"
            learnIMG={sodcutterrental}
            learnTitle="Sod Cutters"
            />
            <LearnCard
            videoId="78I2mBBRiLY"
            learnIMG={tillerrental}
            learnTitle="Tillers"
            />
            <LearnCard
            videoId="wpCpNa5NoFo"
            learnIMG={trencherrental}
            learnTitle="Trenchers"
            />
        </Row>

    </div>

    )
}