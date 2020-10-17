import {
  aboutPage,
  educationPage,
  experiencePage,
  contactPage,
} from '../component/pages/index';

const routes = [
  {
    path: '/about',
    component: aboutPage,
    isPublic: true,
  },
  {
    path: '/education',
    component: educationPage,
    isPublic: true,
  },
  {
    path: '/experience',
    component: experiencePage,
    isPublic: true,
  },
  {
    path: '/contact',
    component: contactPage,
    isPublic: true,
  },
  {
    path: '/',
    component: aboutPage,
    isPublic: true,
  },
];

export default routes;
