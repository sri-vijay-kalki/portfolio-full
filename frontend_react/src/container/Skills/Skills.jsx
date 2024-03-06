import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [frontendSkills, setFrontendSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);
  const [devopsSkills, setDevopsSkills] = useState([]);

  useEffect(() => {
    const frontendSkillsQuery = '*[_type == "frontendSkills"]';
    const backendSkillsQuery = '*[_type == "backendSkills"]';
    const devopsSkillsQuery = '*[_type == "devopsSkills"]';

    client.fetch(frontendSkillsQuery).then((data) => {
      setFrontendSkills(data);
    });
    client.fetch(backendSkillsQuery).then((data) => {
      setBackendSkills(data);
    });
    client.fetch(devopsSkillsQuery).then((data) => {
      setDevopsSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className='app__skills-sub-section'>
        <div>
          <h3 className='sub-text'>Front-End</h3>
          <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {frontendSkills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </div>
          <div >
            <h3 className='sub-text'>Back-End</h3>
            <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {backendSkills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </div>
          <div className='app__section'>
            <h3 className='sub-text'>Cloud Technologies</h3>
            <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {devopsSkills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </div>
        </div>
        {/* <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
