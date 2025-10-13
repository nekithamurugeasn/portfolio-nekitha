/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Data  <br /> Analyst </h3>
                </div>

                <div>
                    <span className="exp__comp">EXA AG</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Data Analyst <br /> May'24 - Nov'24🧑🏻‍💻</h3>
                        <p className="exp__modal-description">To improve AI model accuracy, my primary responsibility as an NLP
analyst is to assess and choose contextually relevant rapid replies.LIDAR technology uses laser beams to measure distances between
objects.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">NLP Projets</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Annotator Projects </p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Lidar Projects.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title"> <br /> Developer <br/> </h3>
                </div>

                <div>
                    <span className="exp__comp">EXA AG</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Developer Intern <br /> Nov'24 - Present🧑🏻‍💻</h3>
                        <p className="exp__modal-description">WDeveloped a system to manage Aavin milk packet
distribution, tracking morning and evening deliveries. It records
consumer purchases and handles sales of Aavin products.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I developed the User Interfaces.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Web Page Development.</p>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience