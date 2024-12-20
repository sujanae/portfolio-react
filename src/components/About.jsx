import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
    

      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* Image Section */}
        <motion.div
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Replace 'img' with actual image or styling */}
        </motion.div>

        {/* Text Section */}
        <motion.div
          className='flex-1'
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
        >
          <h2 className='text-4xl font-bold text-gradient mb-4'>About Me</h2>
          <h3 className='h3 mb-4'>
               I am a passionate software developer with expertise in Flutter and web technologies. 
          </h3>
          <p className='mb-6'>
           eligendi necessitatibus. Mollitia minima, reiciendis, numquam, temporibus odio reprehenderit sunt quod eveniet consequuntur enim dolor assumenda velit.
          </p>

          {/* Stats Section */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div className='text-center'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={5} duration={3}  />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Technologies Learned</div>
            </div>

            <div className='text-center'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={20} duration={3}  />:null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={5} duration={3}  />:null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Certification Completed</div>
            </div>
          </div>
           <motion.div 
                      variants={fadeIn('up', 0.7)} 
                      initial='hidden' 
                      whileInView={'show'} 
                      viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'><button className='btn btn-lg'>Contact Me</button>
                      <a href="#" className='text-gradient btn-link'>
                         MY PORTFOLIO
                        </a>
                        </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About;
