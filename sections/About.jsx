'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Our Event Management" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold text-white">Dream Events</span>, we
        specialize in turning your vision into reality. Whether it's an intimate
        gathering or a large-scale corporate event, we ensure every detail is
        carefully planned and executed to perfection. Our expert team works
        tirelessly to create unforgettable experiences that captivate and inspire
        your guests. From themed parties to corporate retreats and weddings, we
        manage every aspect—venue selection, catering, entertainment, and
        logistics. We are passionate about delivering seamless events that leave
        a lasting impression.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="mt-[20px] font-normal sm:text-[24px] text-[18px] text-center text-secondary-white"
      >
        What sets us apart is our unwavering commitment to innovation. We bring
        fresh ideas, creative solutions, and a personal touch to every event. Our
        goal is to help you craft a truly unique event that aligns with your
        vision and exceeds expectations. We pride ourselves on our attention to
        detail, our ability to adapt to any challenges, and our dedication to
        creating memorable moments for you and your guests.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.6, 1)}
        className="mt-[20px] font-normal sm:text-[24px] text-[18px] text-center text-secondary-white"
      >
        Let us handle the stress of event planning while you focus on what matters most—
        enjoying the experience. From the first idea to the last toast, we will
        be by your side, ensuring everything goes smoothly. Explore the endless
        possibilities with Dream Events and let's create something truly magical
        together.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
