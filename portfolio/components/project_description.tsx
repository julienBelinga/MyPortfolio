import React from "react";

interface ProjectDescriptionProps {
  title: string;
  description: React.ReactNode;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div id="description">
      <h3>{title}</h3>
      {description}
    </div>
  );
};

export default ProjectDescription;
