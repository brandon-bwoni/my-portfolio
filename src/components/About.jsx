import React from 'react';

function About() {
  return (
    <div className='h-full pb-8  bg-orange-200 mx-12'>
      <div className='flex flex-row'>
        <div className='w-20 h-8  ml pl-1 border-l-4 border-orange-600'>
          <h1 className='font-bold text-slate-700 text-xl'>About</h1>
        </div>

        <div className='w-1/2 h-56 mt-8 bg-slate-700 bg-opacity-50 p-4'>
          <h1 className='text-white font-bold text-3xl mb-2'>Designer</h1>
          <p className='text-orange-50 text-xl' >
            I believe a digital product’s design and interactivity makes users enjoy using it. I enjoy creating user-friendly mobile and web designs with user interaction at heart while keeping elegance.
          </p>
        </div>

        <div className='w-1/2  h-56 bg-slate-700 bg-opacity-50 p-4 mt-64 '>
          <h1 className='text-white font-bold text-3xl mb-2'>Developer</h1>
          <p className='text-orange-50 text-xl'>
            I’m keen about developing robust and scalable applications that are purposeful. I have worked with JavaScript for a while building software and exploring. I’m familiar with most of industry standard tools and concepts
          </p>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default About;