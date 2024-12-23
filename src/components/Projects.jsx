import React from 'react';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'



const Projects = () => {
  return (
    <section className="py-16 lg:py-24" id="project">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div  variants={fadeIn('right', 0.3)} 
                                initial='hidden' 
                                whileInView={'show'} 
                                viewport={{ once: false, amount: 0.7 }} 
                                className="flex-1 flex flex-col gap-y-14 mb-10 lg:mb-0">
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-4">
                My Latest <br />
                Projects
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
                quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, sapiente.
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </div>

            {/* Project Card 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Image */}
              <img
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"
                src={Img1}
                alt="Project 1"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div  variants={fadeIn('left', 0.2)} 
                                initial='hidden' 
                                whileInView={'show'} 
                                viewport={{ once: false, amount: 0.7 }}
                                 className="flex-1 flex flex-col gap-y-10">
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"
                src={Img2}
                alt="Project 2"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Development</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"
                src={Img3}
                alt="Project 3"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-2xl">Web Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
