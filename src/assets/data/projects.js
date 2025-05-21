import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.jpg';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'ImageFinder',
    desc: 'A modern portfolio website built with React to showcase my projects, skills, and design sense in a clean and responsive layout.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'MovieScope',
    desc: 'A sleek React app for discovering trending movies and exploring detailed info by searching titles or browsing categories, powered by The Movie Database API.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc: 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: CavinImg,
  },
];

export default projects;
