import React from 'react';
import { photo } from '../assets';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <img className="photo" alt="photo" src={photo} />
      <p>
        <b>Name :</b> Ahmad Ridho Iwananda <br></br>
        <b>TTL :</b> Sidoarjo, 25 Oktober 1999 <br></br>
        <b>Motto :</b> Jangan kalah dengan keadaan <br></br>
        <b>Hobby :</b> Swimming and Cycling
      </p>
    </div>
  );
};

export default About;
