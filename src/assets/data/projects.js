import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.jpg';
import UTrackerImg from '../images/utracker.webp';
import GreenCtgImg from '../images/greenctg.webp';
import CoinTrackerImg from '../images/cointracker.webp';
import CavinImg from '../images/cavinimg.webp';
import MyChock from '../images/mychock.webp';

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
    name: 'Portfolio website',
    desc: 'A team landing page project built with HTML, CSS, and JS, where I created the Reviews section with a focus on layout and styling.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Puzzle Game',
    desc: 'A collaborative landing page project built with React, where I developed the Privacy Policy, Cookies pages, and three key homepage sections.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Phone book',
    desc: 'A full-featured phonebook app built with React, Redux Toolkit, and React Router, featuring user authentication, contact management, and persistent backend integration via MockAPI.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'My Chocklet',
    desc: 'An e-commerce landing page for handcrafted chocolate, built with HTML, CSS, and JavaScript, featuring product showcase sections, responsive layout, and smooth scrolling navigation.',
    img: MyChock,
  },
];

export default projects;
