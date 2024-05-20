import React from 'react'

export default function Noteitem(props) {
    const {note}=props;
  return (
    <div className='col-md-3 my-2'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.descripition} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque accusamus culpa neque perferendis veniam amet aut consequatur. Id animi voluptatem ab nihil cupiditate minus voluptas explicabo quaerat, laboriosam asperiores.</p>
            </div>
        </div>
    </div>
  )
}
