import React from "react";

const CardDetails = (props) => {
    return(
        <div className="max-w-sm bg-pink rounded-lg border shadow-md p-4 hover:shadow-lg transition duration-200">
          <img src={props.image} alt='' />
          <h5 className="text-xl font-bold mb-2">{props.name}</h5>
          <p className="text-gray-600 mb-4">Age: {props.age}</p>
          <p className="text-gray-600 mb-4">{props.jobTitle}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">{props.details}</button>
        </div>
    )
}

export default CardDetails;

