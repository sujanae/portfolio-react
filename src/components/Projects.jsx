import React from 'react';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const Projects = () => {
  return (
    <section className='section' id='project'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10'>
            {/* text */}
            <div>
              <h2 className='text-4xl font-bold text-gradient mb-4'>My Latest <br />
              Projects
              </h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, quia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sapiente.
                </p>
                <button className='btn btn-sm'>View all Projects</button>
            </div>
            {/* images */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500' src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-2xl '>
               <span className='text-gradient'>UI/UX Design</span> 
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-2xl'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;
