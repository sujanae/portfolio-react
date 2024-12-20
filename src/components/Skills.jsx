import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {BsArrowUpRight} from 'react-icons/bs'


const skills =[
  {
    name:'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim ea debitis, inventore excepturi numquam animi deserunt. Itaque, saepe ab.',
    link: 'Learn more'
  },
  {
    name:'App Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim ea debitis, inventore excepturi numquam animi deserunt. Itaque, saepe ab.',
    link: 'Learn more'
  },
  {
    name:'Front-End Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim ea debitis, inventore excepturi numquam animi deserunt. Itaque, saepe ab.',
    link: 'Learn more'
  },
]
const Skills = () => {
  return (
  <div className='section' id='skills'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>
        {/* text ND IMAGE  */}
        <motion.div  variants={fadeIn('right', 0.3)} 
                              initial='hidden' 
                              whileInView={'show'} 
                              viewport={{ once: false, amount: 0.3 }}
                               className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='text-4xl font-bold text-gradient mb-4'>
            What I Do.
          </h2>
          <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt.</h3>
          <button className='btn btn-sm'>See More..</button>
        </motion.div>
        {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} 
                              initial='hidden' 
                              whileInView={'show'} 
                              viewport={{ once: false, amount: 0.3 }} 
                              className='flex-1'>
            {/* list */}
            <div >
              {skills.map((skill, index) => {
                const { name, description, link } = skill;
                  return (
                  <div className= 'border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                  );
              })}
            </div>
          </motion.div>
      </div>
    </div>
    
  </div>

  );
};

export default Skills;
