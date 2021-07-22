import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
    return (
        <Row md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
                Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/Pooran8898"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/pooran-suthar-621370211/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.instagram.com/pooransuthar/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <AiFillInstagram />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://drive.google.com/file/d/1ZPKwZOKGJVPdkbjkN9F6nLVnUcB8fU5v/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        id="resumelink"
                    >
                        <GrResume />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://twitter.com/PooranSuthar4"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <AiOutlineTwitter />
                    </a>
                </li>
            </ul>
        </Row>
    );
};
