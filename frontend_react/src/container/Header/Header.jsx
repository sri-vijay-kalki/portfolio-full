import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

import images from '../../constants/images';
import './Header.scss';
import AppWrap from '../../wrapper/AppWrap';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
// import { client } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  // useEffect(() => {
  // const temp = {
  //   _type:'siteSettings',
  //   namVal:'siteSettings'
  //   };
  //   client.create(temp)
  //     .then(() => {console.log('Thank you')});

  // },[])
  return (
    <div id = "home" className="app__header app__flex">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sri Vijay Kalki</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full-stack Developer</p>
            <p className="p-text">Cloud Engineer</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.googleCloud, images.springBoot].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>

      <div className="app__social_home">
        <div className="app__hyperlinks">
          <a href="https://github.com/sri-vijay-kalki" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
        <div className="app__hyperlinks">
          <a href="https://www.linkedin.com/in/srivijaykalki/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div  className="app__hyperlinks">
          <a href="https://www.instagram.com/sri_vj_kalki/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Header,"header")