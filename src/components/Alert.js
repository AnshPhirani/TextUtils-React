import React from 'react'

export default function Alert(props) {
    
  return (
    props.info && <div className={`alert alert-${props.info.type} alert-dismissible fade show`} role="alert">
        <strong>{props.info.type.toUpperCase()}!</strong> {props.info.message}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
