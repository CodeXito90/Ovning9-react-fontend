import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

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
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello World!, I am</p>
                <h1 className="head-text">Jama</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <h4 className="p-text">Currently studying fullstack development At Lexikon-IT proffs. .NET framework for backend and React for frontend</h4>
          </div>
        </div>
      </motion.div>
    
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.Profile3}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.node, images.html].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  )
}

export default AppWrap(Header, 'home')