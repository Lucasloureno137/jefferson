import React from 'react';


const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      <h1>Sobre o Criador</h1>
      <div className="profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__O5G5u-Jeh69lcCeCMvNjBEGtdJqwECbkw&s" 
          alt="Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>Lucas Lourenço</h2>
          <h3>Estudante de engenharia de software</h3>
          <p>
           Meu nome é Lucas, e estou no sexto período de engenharia de software na FAG, nasci em são paulo e vim para o paraná ainda muito novo, resido em cascavel a pouco mais de 10 anos.
          </p>
          <a href="https://github.com/Lucasloureno137" target="_blank" rel="noopener noreferrer">
            Visite meu GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
