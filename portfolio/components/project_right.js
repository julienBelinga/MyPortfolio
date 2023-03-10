import React from 'react'
import Description from 'components/project_description'
import Device from 'components/project_device'

export default function project(props) {
  return (
    <>
        <div id="project">
            <Description 
                title={props.title}
                description={props.description}
            />
            <Device
                img1={props.img1}
                img2={props.img2}
                legend={props.legend}
            />
        </div>
    </>
  )
}
