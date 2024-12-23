import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-4xl font-bold text-gradient mb-4 tracking-wide">Get In Touch</h4>
              <h2 className="text-[45px] lg:text-[45px] leading-none mb-12">
              Let's{' '}
                <TypeAnimation
                  sequence={[
                    'connect on Instagram!', // Type this
                    2000, // Keep it for 2 seconds
                    'connect on Youtube!', // Replace and type this
                    2000, // Keep it for 2 seconds
                    'connect on LinkedIn!', // Replace and type this
                    2000, // Keep it for 2 seconds
                    'connect on GitHub!', // Replace and type this
                    2000, // Keep it for 2 seconds
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />              </h2>
            </div>
          </motion.div>
          {/* social links */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 items-start mt-12 lg:mt-0"
          >
            <a
              href="https://www.instagram.com/_.sujan._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaYoutube /> Youtube
            </a>
            <a
              href="https://www.linkedin.com/in/sujan-loganathan"
              
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.github.com/sujanae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
