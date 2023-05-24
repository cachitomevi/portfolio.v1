import React from 'react';

const Project = ({ title, description, previewImage }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectPreview>
        <img src={previewImage} alt={`Vista previa de ${title}`} />
      </ProjectPreview>
    </ProjectContainer>
  );
};


export default Project;
