import myImage from '../assets/my-image.png';

function About() {
  return (
    <div className='h-screen bg-black bg-opacity-10 '>
      <div className='flex flex-col'>
        <div className='mx-auto h-8 mb-2 mt-2 border-b-4 border-orange-600'>
          <h1 className='font-bold text-orange-5s0 text-xl'>About Me</h1>
        </div>
        <div className='flex flex-row mt-6'>
          <div className='w-1/2 bg-opacity-50 p-4'>
            <h1 className='text-white font-bold text-3xl mb-2'>Developer</h1>
            <p className='text-orange-50 text-xl'>
              I’m keen about developing robust and scalable applications that are purposeful. I have worked with JavaScript for a while building software and exploring. I’m familiar with most of industry standard tools and concepts
            </p>
          </div>
          <div className='w-1/2 mt-8'>
            <img src={myImage} alt='My Image' className=' h-96' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;