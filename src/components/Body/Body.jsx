import React,{useState} from 'react'
import Filter from '../Filter/Filter'
import LinksExternal from '../LinkExternal/LinksExternal'
import PublicationListContainer from '../PublicationListContainer/PublicationListContainer'
import './Body.css'
const Body = () => {
  const [valueHospital, setvalueHospital] = useState("")

  const handleInputHospital =(e)=>{
    setvalueHospital(e.target.value)
  }
    return (
        <div className='body-container'>
          <LinksExternal></LinksExternal>
          <Filter handleInputHospital={handleInputHospital}></Filter>
          <PublicationListContainer hospital={valueHospital}></PublicationListContainer>
      </div>
  )
}

export default Body