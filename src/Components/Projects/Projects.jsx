import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import sudokologo from "../Assets/S.png";
import Clockifylogo from "../Assets/Clockify.png";
import Covidlogo from "../Assets/21.png";
import Travelocitylogo from "../Assets/22.png";
import Airgaragelogo from "../Assets/23.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiRedux, SiStyledComponents, SiMaterialUi } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={Clockifylogo} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Clockify Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Clockify is a simple time tracker and timesheet app that lets
                                    you and your team track work hours across projects.You can
                                    also assign task to each project and set a timer for project.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons" />
                                    <SiRedux className="Techstacks-icons" />
                                    <SiStyledComponents className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <SiMaterialUi className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/rajatsahu18/team_oxygen"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://csb-c7qjs.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={sudokologo} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Sudoku Solver
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Sudoku Solver is a Website that gives you the Solution of
                                    Every Sudoko Problem that you input and also you can visualize
                                    each step of how the sudoku is getting solved.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <SiMaterialUi className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/Pooran8898/Sudokosolver"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://csb-ks3rf.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={Covidlogo} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Covid-Tracker(India)
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Covid Tracker is website that shows you the complete data of
                                    the Covid-19 Cases of Every State distributed in three
                                    sections Active, Recovered and Deaths.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <SiMaterialUi className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Pooran8898/Covid-19-Tracker-India"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://csb-nm11v.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img
                                variant="top"
                                src={Travelocitylogo}
                                alt="Clockify Clone"
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Travelocity
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Travelocity is a Website that lets You Book Hotels, Flights
                                    and Complete Vacation Packages Across the World and Also
                                    Provides free of Cost Cancellation Policy to Customers.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Amol-Talekar/travelocity"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://amol-talekar.github.io/travelocity/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img
                                variant="top"
                                src={Airgaragelogo}
                                alt="Clockify Clone"
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>Airgarage</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Airgarage is a Website that lets You Book the Parking Places
                                    in any Part of the Us Country.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/MeeraMendhe/Airgarage"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://pooran8898.github.io/csb-6e154/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </Container>
    );
};
