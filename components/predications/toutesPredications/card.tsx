import React from 'react'
interface Iprops{
  nomEglise : string,
  theme : string,
  summary : string,
  author : string,
  date : string
}
const ToutePredication = (props : Iprops) => {
  return (
    <div>
      <div>
        <span>{props.nomEglise}</span>
      </div>
      <div>
        <h3>{props.theme}</h3>
      </div>
      <div>
        <span>{props.summary}</span>
      </div>
      <div>
        <span>{props.author}</span>
        <span>{props.date}</span>
      </div>
    </div>
  )
}

export default ToutePredication
