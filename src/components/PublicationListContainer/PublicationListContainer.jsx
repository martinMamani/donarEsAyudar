import React, { useState,useEffect } from 'react'
import PublicationList from '../PublicationList/PublicationList'
import donors from './../../utils/api'
const PublicationListContainer = ({hospital}) => {
    const [donation, setDonation] = useState([])
    useEffect(() => {
      if(hospital){
        if(hospital!=="Todos"){
          const donationFilter=donors.filter((donor)=>{
            return donor.hospital.replaceAll(" ", "") === hospital.replaceAll(" ", "")
          })
          setDonation(donationFilter)
        }else{
          setDonation(donors)
        }
      }else{
        setDonation(donors)
      }
    }, [hospital])
    
  return (
    <div>
        <PublicationList donation={donation}></PublicationList>
    </div>
  )
}

export default PublicationListContainer