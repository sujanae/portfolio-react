import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


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
  <div className='section' id='project'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>
        {/* text ND IMAGE  */}
        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='text-4xl font-bold text-gradient mb-4'>
            What I Do.
          </h2>
          <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt.</h3>
          <button className='btn btn-sm'>See More..</button>
        </div>
      </div>
    </div>
    
  </div>

  );
};

export default Skills;
