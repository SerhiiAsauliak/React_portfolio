import React from "react";
import "./about.css";
import Screen from "../../assets/screenjpg.jpg";
import { FaAward } from "react-icons/fa";
import {AiFillFolderOpen} from 'react-icons/ai'

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Screen} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Entry-level</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Different Pet Projects</small>
            </article>
          </div>
          <p>
            I am Front-End Developer with entry-level experience specializing in
            web development and i also have experiance in realization fullstack MERN projects. Actively looking for work to use received skills. I
            want to develop in this direction and for about 6 months I've been
            actively studying the necessary technologies. Self-learning,
            attentive and responsible.
          </p>
        </div>
      </div>
    </section>
  );
};
