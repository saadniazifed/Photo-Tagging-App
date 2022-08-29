This is the [First Firebase Project](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app) from The Odin Project's Full Stack Javascript curriculum.

## Project Objective

1. use react with a firebase backend to build a photo-tagging game reminiscent of a "where's waldo" puzzle.
2. leverage firebase's firestore NoSQL cloud storage to validate targets.

## technologies used

<p align="left"> 
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://firebase.google.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg" alt="firebase" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
</p>

## app features

1. the backend stores the targets' location data so the user can't cheat in the game.
2. validates target locations dynamically by coupling the backend's relative location data of the targets with the frontend's absolute positioning data.
3. feedback is given to the user when targets are correctly located.

## bugs
1. Firebase's quota gets exceeded by 50,000 in a small amount of time. After several days of constantly looking at different solutions, the quota keeps on exceeding which doesn't let the backend work as intended. Hence the green check marks that appear on correct findings of the characters don't appear as they are linked with the backend. In the near future i will come back and fix this.

## areas for improvement

1. improve responsiveness across browsers and devices.
