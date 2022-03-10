import React from 'react'
import './Publication.css'
const Publication = ({donor}) => {
  return (
    <div className='publication'>
        <br></br>
        <br></br>
        <br />
        	<ul >
				<br />
				<br />
				<li>{donor.donor}</li>
				<li>{donor.factor}</li>
				<br />
				<li>{donor.amountDonors} dadores</li>
				<br />
				<li>{donor.hospital}</li>
			</ul>
			<div>
				<button>Donar</button>
			</div>
        </div>
  )
}

export default Publication