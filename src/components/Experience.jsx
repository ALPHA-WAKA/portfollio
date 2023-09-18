import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { myvideo } from '../assets';


const Experience = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    const video = document.getElementById('myVideo');
    if (isVideoPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I come from</p>
        <h2 className={styles.sectionHeadText}>My Story.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <video
          id='myVideo'
          controls
          onClick={toggleVideoPlay}
          style={{ width: '85%', height: '85%' }}
        >
          <source src={myvideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
