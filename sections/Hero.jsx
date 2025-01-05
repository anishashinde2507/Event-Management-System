'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row items-center`}
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start text-left md:w-1/2">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Your Gateway to Memorable Events!
        </motion.h1>
        <motion.p
          variants={textVariant(1.3)}
          className="mt-4 text-white text-lg sm:text-xl"
        >
          Plan, manage, and enjoy your events with ease and style.
        </motion.p>
        <a href="#explore" className="mt-6 text-blue-500 ">
          Explore Events
        </a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative md:w-1/2 w-full mt-8 md:mt-0"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="https://media1.tenor.com/m/tlceri6zsQMAAAAC/concert.gif"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
