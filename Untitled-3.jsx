// App.js

import React from 'react';
import '<div className="" />
<style2></style2>.css'; // Import the CSS file

// Header component
const Header = () => (
  <header>
    <div className="header-image">
      <img src="imagesbanner.jpg" alt="Banner" />
      <div className="banner-content">
        <p>Découvrez les merveilles de la faune et apprenez-en davantage sur nos initiatives en matière de changement climatique.</p>
      </div>
    </div>
  </header>
);

// Navigation component
const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#A_propos">Qui sommes nous ?</a></li>
      <li><a href="#Nos_animaux">Nos animaux</a></li>
      <li><a href="#Conservation">Conservation</a></li>
      <li><a href="#Gallerie_photo">Galerie</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><a href="#Connexion">Connexion</a></li>
      <li><a href="#plan">Plan du site</a></li>
    </ul>
  </nav>
);

// Section component
const Section = ({ id, title, image, content }) => (
  <section id={id}>
    <div className="section-content">
      <h2>{title}</h2>
      <img src={image} alt={`${title} image`} />
      <p>{content}</p>
    </div>
  </section>
);

// Footer component
const Footer = () => (
  <footer id="footer">
    <div className="content">
      <p>&copy; 2024 Arcadia Nature Zoo. Tous droits réservés.</p>
    </div>
  </footer>
);

// App component
const App = () => (
  <div>
    <div className="topnav">
      <a href="#home" className="active">Arcadia</a>
      <a href="#habitats">habitats</a>
      <a href="#restauration">restauration</a>
      <a href="#nous_trouver">nous trouver</a>
      <a href="#connexion">connexion</a>
    </div>

    <Header />
    <Navigation />

    <Section
      id="A_propos"
      title="À propos"
      image="imageapropos.jpg"
      content="Contenu à propos de Arcadia..."
    />
    <Section
      id="Nos_animaux"
      title="Nos animaux"
      image="nos animaux.jpg"
      content="Contenu sur nos animaux..."
    />
    <Section
      id="Conservation"
      title="Conservation"
      image="conservation.jpg"
      content="Contenu sur la conservation..."
    />
    <Section
      id="Gallerie_photo"
      title="Galerie"
      image="gallerie photo.jpg"
      content="Galerie de photos..."
    />
    <Section
      id="Contact"
      title="Contact"
      image="contact.jpg"
      content="Informations de contact..."
    />
    <Section
      id="Connexion"
      title="Connexion"
      image="connection.jpg"
      content="Page de connexion..."
    />

    <Footer />
  </div>
);

export default App;