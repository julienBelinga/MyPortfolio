import React from "react";
import Description from "@components/project_description";
import Device from "@components/project_device";
import { StaticImageData } from "next/image";

interface ProjectProps {
  even?: boolean;
  img1: string | StaticImageData;
  img2: string | StaticImageData;
  img3?: string | StaticImageData;
  legend?: string;
  title: string;
  description: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({
  even,
  img1,
  img2,
  img3,
  legend,
  title,
  description,
}) => {
  const evenClass = even ? "even" : "odd";
  const finalImg3 = img3 || img2;

  return (
    <div id="project" className={evenClass}>
      <Device img1={img1} img2={img2} img3={finalImg3} legend={legend} />
      <Description title={title} description={description} />
    </div>
  );
};

export default Project;
