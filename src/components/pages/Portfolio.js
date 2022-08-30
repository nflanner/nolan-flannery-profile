import React from 'react';
import movieRouletteApp from './../../Assets/Images/movieRouletteApp.JPG';
import recipeSaverApp from './../../Assets/Images/recipeSaver.JPG';
import weatherDashboardApp from './../../Assets/Images/weatherDashboard.JPG';

const subsequentApps = [
  {
    deployedAppLink: "https://group-2-recipe-saver.herokuapp.com/",
    imagePath: recipeSaverApp,
    altText: 'Recipe Saver',
    gitHubLink: "https://github.com/nflanner/Recipe-Saver",
    appName: 'Recipe Saver',
  },
  {
    deployedAppLink: "https://nflanner.github.io/weather-dashboard/",
    imagePath: weatherDashboardApp,
    altText: 'Weather Dashboard',
    gitHubLink: "https://github.com/nflanner/weather-dashboard",
    appName: 'Weather Dashboard',
  }
]

const subsequentCard = (deployedAppLink, imagePath, altText, gitHubLink, appName) => {
  return (
    <div className='col-6 subsequent-app' key={deployedAppLink}>
        <div className="card subsequent-card">
          <a href={deployedAppLink}>
            <img className="card-img-top" src={imagePath} alt={altText} />
          </a>
          <div className="card-body subsequent">
            <a href={gitHubLink}>{appName} GitHub Repo</a>
          </div>
        </div>
      </div>
  );
};

export default function Portfolio() {
  return (
    <div className='row'>

      <div className='col-12'>
        <h1 className='title'>My Portfolio</h1>
      </div>

      <div className='col-10'>
        <p>
          Below are three of my deployed applications. Each featured application includes a 
          link to their respective GitHub repositories. Additionally, clicking on the image of 
          each of the applications will re route you to the selected deployed application.
        </p>
      </div>

      <div className='col-12 first-app'>
        <div className="card main-card">
          <a href="https://nflanner.github.io/project-1/">
            <img className="card-img-top" src={movieRouletteApp} alt="Movie Roulette" />
          </a>
          <div className="card-body">
            <a href="https://github.com/nflanner/project-1">Movie Routlette GitHub Repo</a>
          </div>
        </div>
      </div>

      {subsequentApps.map(app => subsequentCard(app.deployedAppLink, app.imagePath, app.altText, app.gitHubLink, app.appName))}
    </div>
  );
}
