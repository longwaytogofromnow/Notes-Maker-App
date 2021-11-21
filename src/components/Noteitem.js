import React from 'react'

const Noteitem = (props) => {
    const { element } = props;
    return (
        <div className="col-md-3">
            <div className="card my-2" >
                <div className="card-body ">
                <h5 className="card-title"> {element.title}</h5>
                <p className="card-text">  {element.description} </p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
