import React from 'react'

export default function Noteitem(props) {
    const {note}=props;
  return (
    <div className='col-md-3 my-2'>
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-regular fa-pen-to-square mx-2"></i>
                </div>
                <p className="card-text">{note.descripition}</p>
            </div>
        </div>
    </div>
  )
}
