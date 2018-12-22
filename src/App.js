import React, { Component } from 'react';
import './App.css';
import './profile.jpg';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import twitter from './assets/icons/twitter.svg';

export default App => 
<div className = 'container'> 
  <img className = 'container_image' src='https://avatars0.githubusercontent.com/u/6611514?s=460&v=4'></img>
  <div className = 'content'>
    <h1 className = 'content_name'>Raquel Oliveira</h1>
    <p className = 'content_description'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
    </p>
    <ul className = 'content_social_medias_list'>

      <li className = 'content_social_medias_item'>
        <a className = 'content_social_medias_link' href = 'https://github.com/RaquelOliveira' target = '_blank'>
        <img src={github}/>
        </a>
      </li>

      <li className = 'content_social_medias_item'>
        <a className = 'content_social_medias_link' href = '' >
          <img src = {linkedin}></img>
        </a>
      </li>

      <li className = 'content_social_medias_item'>
        <a className = 'content_social_medias_link' href = '' target = '_blank'>
          <img src = {twitter}></img>
        </a>
      </li>
    </ul>

  </div>
</div> 
