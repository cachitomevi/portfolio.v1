import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import previewImage from './image/image.png';
import previewImage2 from './image/404.png';
import iconImage from './image/focoON.png';




import profileImage from './image/cachito (2).jpg'; // Ruta de tu imagen de perfil

const lightTheme = {
  background: 'linear-gradient(to bottom, #FFFFFF, #E0E0E0)',
  lastColor: '#E0E0E0',
  color: '#333',
};

const darkTheme = {
  background: 'linear-gradient(to bottom, #333333, #000000)',
  lastColor: '#000000',
  color: '#fff',
};



const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    /* Agrega otros estilos globales si los necesitas */
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px; /* Agregamos margen superior automático para centrar el botón */
`;

const ButtonMOC = styled.button`
  width: 50px; /* Ajusta el tamaño del icono según tus necesidades */
  height: 50px;
  background: url(${iconImage}) no-repeat center center;
  background-size: cover;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 5px;
  right: 5px;
  /* Resto de los estilos */
`;


const Container = styled.div`
  background: ${({ theme }) => theme.background};
  max-width: 100%;
  margin: 0 auto;
  padding: 12rem;
  display: flex;
  flex-direction: column; /* Ajusta la dirección según tus necesidades */
  justify-content: center; /* Ajusta la alineación vertical según tus necesidades */
  align-items: center; /* Ajusta la alineación horizontal según tus necesidades */
  /* Resto de los estilos */
  @media (max-width: 768px) {
    padding: 150px;
  }
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 28px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 40px;
  display: flex;
  padding: 0.50vh;
  align-self: center; /* Ajusta la posición vertical a la parte superior */
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const LinkButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;


const ProfileImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
  @media (max-width: 768px) {
    max-width: 150px;
    margin-right: 10px;
  }
  @media (max-width: 480px) {
    max-width: 100px;
    margin-right: 5px;
  }
`;

const BioContainer = styled.div`
  flex: 1;
`;

const BioText = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
`;

const LinkButton = styled.a`
  padding: 10px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 10px;
`;

const ProjectContainer = styled.div`
  color: ${({ theme }) => theme.color};
  background-color: #fff1;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;


const ProjectTitle = styled.h2`
  font-size: 22px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.color};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  //color: #888;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: columns;
  justify-content: space-between;
  
  /* Añade margen vertical */
  margin-top: 10px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  
  /* Resto de los estilos */
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.lastColor};
  color: ${({ theme }) => theme.color};
  padding: 8px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center; /* Centra el texto en todos los dispositivos */
  
  @media (max-width: 480px) {
    text-align: center; /* Centra el texto solo en dispositivos con ancho máximo de 480px (versión móvil) */
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const ProjectPreview = styled.img`
  width: 100%;
  max-width: 700px; /* Ajusta el tamaño máximo de la vista previa según tus necesidades */
  height: auto;
  margin-bottom: 10px;
`;

const Project = ({ title, description, link, previewImage }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectPreview src={previewImage} alt={`Vista previa de ${title}`} />
      <Button as="a" href={link} target="_blank" rel="noopener noreferrer">
       Mira el proyecto
      </Button>
    </ProjectContainer>
  );
};


const Portfolio = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Heading>[PORTAFOLIO DE TRABAJOS]</Heading>
        <ProfileContainer>
          <ProfileImage src={profileImage} alt="Imagen de perfil" />
          <BioContainer>
            <BioText>
              ¡Hola! Soy Roy Méndez, un apasionado y futuro ingeniero de sistemas con un poco de experiencia en desarrollo FrontEnd.
            </BioText> 
            <BioText> 
              Estoy entusiasmado por crear aplicaciones web increíbles y brindar soluciones creativas a los desafíos tecnológicos del dia a dia.
            </BioText>
            <BioText> 
              Si quieres saber mas sobre mi persona, te dejo un link que te llevara a mi perfil en la plataforma LinkedIn y Github.
            </BioText>
            </BioContainer>
            <LinkButtonsContainer>
              <LinkButton href="https://www.linkedin.com/in/roy-william-méndez-villalba/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </LinkButton>
              <LinkButton href="https://github.com/cachitomevi" target="_blank" rel="noopener noreferrer">
                GitHub
              </LinkButton>
            </LinkButtonsContainer>
        </ProfileContainer>
        <ButtonMOC src={iconImage} alt="Icono" onClick={toggleTheme}>
          {theme === lightTheme ? 'ON' : 'OFF'}
        </ButtonMOC>
        <PortfolioContainer>
        <Project
          title="Proyecto #1"
          description="El sitio web muestra la estructura y los cursos del grupo ONE de Oracle utilizando un organigrama interactivo."
          link="https://org-olive.vercel.app"
          previewImage={previewImage}
        />

        <Project
          title="Proyecto #2"
          description="EN CONSTRUCCION"
          //link="https://www.ejemplo-proyecto2.com"
          previewImage={previewImage2}
        />
        <Project
          title="Proyecto #3"
          description="EN CONSTRUCCION"
          //link="https://www.ejemplo-proyecto3.com"
          previewImage={previewImage2}
        />
      </PortfolioContainer>

      </Container>
      <Footer>
        <Copyright>
          &copy; {new Date().getFullYear()} Todos los derechos reservados
        </Copyright>
      </Footer>
    </ThemeProvider>
  );
};

export default Portfolio;
