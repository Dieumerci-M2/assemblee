import React, {ReactNode} from 'react'

interface IProps {
  title : string,
  subtitle : string,
  iconHeure : ReactNode,
  heure : string,
  timeZoneTitle : string,
  timeZoneResponse : string,
  iconAdress : ReactNode,
  adressChurch : string
}
const CulteSemaine = (props : IProps) => {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <h6>{props.subtitle}</h6>
      </div>
      <div>
      <span>{props.iconHeure}</span>
          <div>
            <span>{props.heure}</span>
            <div>
              <span>{props.timeZoneTitle}</span>
              <span>{props.timeZoneResponse}</span>
            </div>
          </div>
        </div>
        <div>
          <span>{props.iconAdress}</span>
          <span>{props.adressChurch}</span>
      </div>
    </div>
  )
}

export default CulteSemaine
