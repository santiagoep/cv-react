import React from 'react';

import HomeImage from '../assets/static/home.jpg';

import '../assets/styles/containers/Home.scss';

const App = () => (
  <div className="home">
    <div className="home__text">
      <div className="home__text--title"><p>Full-stack developer, enjoy learn self-taught and teach.</p></div>
      <div className="home__text--location"><p>Bogotá D.C., Colombia</p></div>
      <div className="home__text--description"><p>
        More than 3 years of experience developing software solutions. Passionate, self-taught and collaborative. I consider that the knowledge areas intersection make a better professional. For this reason i masterize and learn about marketing digial, audiovisual production, photography and more in parallel. I search participation in ambitious projects that boost the technology of the world.
      </p></div>
    </div>
    <div className="home__hero">
      <img src={HomeImage} />
    </div>
  </div>
)

export default App;
