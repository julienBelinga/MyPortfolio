import React from 'react'

export default function project_description(props) {
  return (
    <>
        <div>
            <h3>{props.title}</h3>
            {props.description}
        </div>
    </>
  )
}
