import React from 'react';
import { motion } from 'framer-motion';
import './Introduction.scss';
import { images } from '../../constants';

const Introduction = () => {
  return (
    <motion.div 
      className="app__introduction"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="head-text">I come in peace from a galaxy far, far away 👽</h2>      
      <div className="app__introduction-content">
        <h4 className="p-text">
          No, not that one, but one even more spectacular! 
          I've traveled light-years across the cosmos, braving asteroid fields and narrowly escaping black holes, 
          all to arrive at this fascinating blue marble you call Earth. 
        </h4><br/>
        <h4 className="p-text">
          My mission? To study the curious art of "web development" and the mysterious language of "JavaScript." 
          It seems you humans have created a virtual universe within your computers, and I'm here to master its secrets!
        </h4><br/>
        <h4 className="p-text">
          Join me on this interstellar journey as I navigate the treacherous waters of CSS, conquer the DOM, 
          and attempt to understand why Earthlings are so obsessed with making things "responsive." 
          Together, we'll explore the vast universe of code, one commit at a time!
        </h4><br/>
        <h4 className="p-text">
          Don't worry, I've shapeshifted into human form to blend in – though I'm still trying to figure out why 
          you all don't have antennae. They're quite useful, you know!
        </h4>        
      </div>
    </motion.div>
  );
};

export default Introduction;