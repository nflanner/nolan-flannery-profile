import React from 'react';
import githubImage from './../Assets/Images/github.jpg';
import linkedinImage from './../Assets/Images/linkedin.jpg';

function Footer() {
  return (
    <footer class="bg-light text-center text-lg-start">
        {/* <!-- Copyright --> */}
        <div class="text-center p-3 footer">
          <div className='col-12' id='links'>
            <a href='https://github.com/nflanner'>
              <img className='links' src={githubImage} alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/nolan-flannery-421b3294/'>
              <img className='links' src={linkedinImage} alt='LinkedIn' />
            </a>
          </div>
        </div>
        {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
