import React from 'react'
import LinksExternal from '../LinkExternal/LinksExternal'
import PublicationListContainer from '../PublicationListContainer/PublicationListContainer'
import './Body.css'
const Body = () => {
    return (
        <div className='body-container'>
          <LinksExternal></LinksExternal>
          <PublicationListContainer></PublicationListContainer>
      </div>
  )
}

export default Body