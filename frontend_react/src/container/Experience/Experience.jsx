import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Experience.scss';

const Experience = () => {
    const [experiences,setExperiences] = useState([]);

    useEffect(() => {
        const experienceQuery ='*[_type == "experiences"] | order(priority desc)';

        client.fetch(experienceQuery).then((data) => {
            setExperiences(data);
            console.log(data);
          });
    },[]);
    return (
    <>
    <h2 className="head-text">Experiences</h2>
    <div className='app__experiences'>
        {experiences.map((experience, index) => (
            <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
              className="app__skills-exp-item"
              key={experience.year + '-'+ index}
            >
                <div className="app__exp-item">
                    <div className="app__exp-head app__flex">
                        <img src={urlFor(experience.company_logo)} alt={experience.company} />
                        <div className="app__exp-company-head-details">
                            <span className='sub-text'>{experience.company}</span>
                            <p className='app__exp_role'>{experience.role}</p>
                            <p className='p-text'>{experience.duration}</p>
                        </div>
                    </div>
                    <div className="app__exp-body">
                        <div className="p-text">{experience.description}</div>
                        <div className="app__exp_skills">
                            <span>Skills:</span>

                            {
                            experience.skills.map((skill,index) => (
                                <span className='app__skill-name'  key={skill + '-'+ index}>{skill}</span>
                            ))
                            }

                        </div>
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
    </>
    )
}

export default AppWrap(
    MotionWrap(Experience, 'app__experiences'),
    'experience',
  );