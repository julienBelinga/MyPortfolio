import React from 'react';
import Description from 'components/project_description';
import Device from 'components/project_device';

export default function Project(props) {
  const even = props.even ? 'even' : 'odd';

  // Définir img3 sur img2 si img3 n'est pas renseigné
  const img3 = props.img3 || props.img2;

  return (
    <>
      <div id="project" className={`${even}`}>
        <Device
          img1={props.img1}
          img2={props.img2}
          img3={img3}
          legend={props.legend} 
        />
        <Description
          title={props.title} 
          description={props.description} 
        />
      </div>
    </>
  );
}
