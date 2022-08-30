import React from 'react';
import nolanPortrait from './../../Assets/Images/Nolan.jpg';

export default function About() {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='title'>About Me</h1>
      </div>
      <div className='col-3'>
        <img src={nolanPortrait} alt={'Nolan portrait'} className="img-thumbnail"/>
      </div>
      <div className='col-8'>
        <p>
          I have always had an interest in mathematics which led me to engineering in college. 
          I held two engineering internship positions at Boeing during my undergraduate but found 
          that physics and mathematics was my true passion in my studies. After graduating with a BA 
          in mathematics and BS in Physics from University of Washington, I then decided to take a 
          year off to work at the applied physics lab at UW. This further excelled my engineering 
          experience via circuit design, sensor calibration, lab testing, and analysis. As a graduate 
          student of physics at Northeastern, I eventually discovered a new interest in machine 
          learning and computer programming/software engineering.
        </p>
        <p>
          I then went on to study physics and eventually recieved my Masters in Science for Physics at 
          Northeastern University while reseaching with the CMS group with a focus on machine learning 
          and large data analytics. This naturally exposed me to the experience I would need to then get 
          a job as a Software Development Engineer at Blue Origin, which I currently hold. My current job 
          title is a full stack developer for the Enterprise Manufacturing Execution team. As such, I 
          utilize various programming languages to fix and improve all aspects of web applications from 
          front-to-backend. While working and learning as a new software engineer, I will continue to 
          push my boundaries and learn all that I can within the field of full stack development.
        </p>
        <p>
          Outside of education and work, I love to play golf (when it's not raining), hike with my wife 
          and giant dog, visit local breweries with friends, and play video games (favorites are Elden 
          Ring and Halo Infinite at the moment).
        </p>
      </div>
    </div>
  );
}
