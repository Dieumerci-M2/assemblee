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
    <div 
      className='flex flex-col gap-6 w-[25%] border-t after:absolute after:w-full after:h-[0.5rem]
       overflow-hidden relative shadow-md p-12 after:bottom-0 after:left-0 after:bg-cblue'
    >
      <div className='flex flex-col gap-6'>
        <h3 className='font-semibold'>{props.title}</h3>
        <h6>{props.subtitle}</h6>
      </div>
      <div className='flex font-semibold gap-2'>
        <span className='mt-3'>{props.iconHeure}</span>
          <div>
            <span>{props.heure}</span>
            <div>
              <span>{props.timeZoneTitle}</span>
              <span>{props.timeZoneResponse}</span>
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <span>{props.iconAdress}</span>
          <span>{props.adressChurch}</span>
      </div>
    </div>
  )
}

export default CulteSemaine
