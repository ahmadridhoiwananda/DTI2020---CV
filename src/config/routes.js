import {
  AboutPage,
  EducationPage,
  ExperiencePage,
  ContactPage,
} from '../component/pages/index';

const routes = [
  {
    path: '/about',
    component: AboutPage,
    isPublic: true,
  },
  {
    path: '/education',
    component: EducationPage,
    isPublic: true,
  },
  {
    path: '/experience',
    component: ExperiencePage,
    isPublic: true,
  },
  {
    path: '/contact',
    component: ContactPage,
    isPublic: true,
  },
  {
    path: '/',
    component: AboutPage,
    isPublic: true,
  },
];

export default routes;
