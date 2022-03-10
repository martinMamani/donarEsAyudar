import React from 'react'
import Publication from '../Publication/Publication'

const PublicationList = ({donation}) => {
  return (
    <div>
       {
           donation.map((donor)=>{
               return(
                   <Publication donor={donor} key={donor.donor}></Publication>
               )
           })
       }
    </div>
  )
}

export default PublicationList