import myImage from '../assets/my-image.png';
import { PrimaryButton, SecondaryButton, Socials } from './UI/index';

function Hero() {
  return (
    <div className="h-screen flex flex-row mx-12 gap-32 bg-orange-200">
      <div className='flex flex-col w-2/5 justify-center pl-24 
      text-xl font-medium'>
        <p>HI,</p>
        <h1>I'M BRANDON BWONI</h1>
        <h1>A CREATIVE <b>DEVELOPER</b> * <b className='text-orange-600'>UI/UX DESIGNER</b></h1>
        <p>I'm passionate about building and exploring with  coding and designing</p>
        <div className='flex gap-4 mt-4'>
          <SecondaryButton name='Hire Me' />
          <PrimaryButton name='My Work' />
        </div>
        <Socials />
      </div>
      <div>
        <img src={myImage} alt='My Image' className=' h-96' />
      </div>
    </div>
  );
}

export default Hero;