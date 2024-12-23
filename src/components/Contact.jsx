import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

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
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's connect <br /> on social media!
              </h2>
            </div>
          </motion.div>
          {/* social links */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6 items-start"
          >
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-x-3 hover:text-accent transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.github.com/your-profile"
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
