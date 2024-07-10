import React from 'react'

function content(props) {
  return (
    <div>
    <p>
        I am a content container {props.xyz} {props.abc}
    </p>
    </div>
  )
}

export default content