import React from 'react';
import nolanResume from './../../Assets/Images/nolanResume.pdf';

const educationList = [
  {
    school: 'University of Washington',
    degree: 'Bachelors of Science',
    major: 'Physics',
    location: 'Seattle, WA',
    start: 'December, 2016',
    end: 'September, 2019',
  },
  {
    school: 'University of Washington',
    degree: 'Bachelors of Arts',
    major: 'Mathemtics',
    location: 'Seattle, WA',
    start: 'September, 2016',
    end: 'September, 2019',
  },
  {
    school: 'Northeastern University',
    degree: 'Masters of Science',
    major: 'Physics',
    location: 'Seattle, WA',
    start: 'September, 2020',
    end: 'December, 2021',
  },
  {
    school: 'University of Washington',
    degree: 'Certificate',
    major: 'Full Stack Engineering',
    location: 'Seattle, WA',
    start: 'March, 2022',
    end: 'September, 2022',
  },
]

const experienceList = [
  {
    employer: 'Boeing',
    location: 'Everett, WA',
    title: 'Electrical Engineering Intern',
    start: 'June 2016',
    end: 'September 2016',
    desc: 'While interning in the electrical engineering department supporting the 767-2C Tanker, I learned how to read and revise released engineering drawings and use various engineering databases and tools including Catia',
  },
  {
    employer: 'Boeing',
    location: 'Everett, WA',
    title: 'Electrical Engineering Intern',
    start: 'June 2017',
    end: 'September 2017',
    desc: 'Open ended, project-based internship that allowed me to support various interiors groups at Boeing by using physics, mathematics, and engineering. My role was to design and prototype various sensors to meet rigorous airplane design specifications.',
  },
  {
    employer: 'University of Washington Applied Physics Lab',
    location: 'Seattle, WA',
    title: 'Polar Science Center Student Assistant',
    start: 'September 2019',
    end: 'June 2020',
    desc: 'Assisted polar science research in conjunction with NASAs Jet Propulsion Laboratory for a deep sea diver melt probe. Responsibilities included lab testing, thermistor calibration, data munging/analysis, circuit design and fabrication.',
  },
  {
    employer: 'Blue Origin',
    location: 'Seattle, WA',
    title: 'Software Development Engineer',
    start: 'February 2022',
    end: 'Current',
    desc: 'I am currently working as a full stack software development engineer for the Enterprise Technology department at Blue Origin. Currently, this includes assisting in the build/maintenance of new and existing software services for internal company use.Tools, frameworks, etc. that I currently utilize include: Java, JavaScript, TypeScript,HTML, CSS, Angular, React, PostgreSQL, Mongo, and graphQL',
  },
];

const skillsList = [
'Algorithms',
'Performance',
'Time complexity',
'Big O notation',
'Data structures',
'HTML/CSS',
'JavaScript/jQuery',
'Responsive design',
'Bootstrap',
'PWAs',
'Local storage, session storage, IndexedDB',
'React.js ',
'MySQL',
'MongoDB',
'User authentication',
'Template engines',
'MERN stack',
'Client-server model',
'API',
'Rest',
'JSON',
'AJAX',
'HTTP request methods',
'GraphQL',
'Heroku',
'Git',
'GitHub pages',
'Shell scripting',
'Unit testing',
'Linting',
'Continuous integration',
]

const getEducation = (props) => {
  return (
    <li key={props.major}>
      <p><h6>{props.degree} of {props.major}</h6></p>
      <p>{props.school}, {props.location}</p>
      <p>{props.start} - {props.end}</p>
    </li>
  );
};

const getExperience = (props) => {
  return (
    <li key={props.title}>
      <p><h6>{props.title}</h6></p>
      <p>{props.employer}, {props.location}</p>
      <p>{props.start} - {props.end}</p>
      <p>{props.desc}</p>
    </li>
  );
};

const getSkills = (props) => {
  return (
    <li key={props}>
      {props}
    </li>
  );
};

export default function Resume() {
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='title'>My Resume</h1>
      </div>
      <div className='col-12'>
        Download my resume <a href={nolanResume} target="_blank">here</a>
      </div>
      <div className='col-4 education'>
        <h3 className='title'>Education</h3>
        <ul>
          {educationList.map(ed => getEducation(ed))}
        </ul>
      </div>
      <div className='col-4 experience'>
        <h3 className='title'>Experience</h3>
        <ul>
          {experienceList.map(exp => getExperience(exp))}
        </ul>
      </div>
      <div className='col-4 skills'>
        <h3 className='title'>Skills</h3>
          <ul>
            {skillsList.map(skill => getSkills(skill))}
          </ul>
      </div>
    </div>
  );
}
