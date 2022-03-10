import React, { useState,useEffect } from 'react'
import PublicationList from '../PublicationList/PublicationList'
import donors from './../../utils/api'
const PublicationListContainer = () => {
    const [donation, setDonation] = useState([])
    useEffect(() => {
      setDonation(donors)
    }, [])
    
  return (
    <div>
        <PublicationList donation={donation}></PublicationList>
    </div>
  )
}

export default PublicationListContainer