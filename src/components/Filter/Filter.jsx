import React from 'react'

const Filter = ({handleInputHospital}) => {
  return (
    <section>
		<label>Filtrar </label>
		<select name= "Localidad" onChange={(e)=>handleInputHospital(e)}>
                <option value="Todos"> Todos </option>
            		<option value="Hospital Almirante Brown"> Almirante Brown </option>
            		<option value="Hospital Avellaneda"> Avellaneda </option>
            		<option value="Hospital Quilmes"> Quilmes </option>
            		<option value="Hospital Florencio Varela"> Florencio Varela</option>
            		<option value="Hospital Lanús"> Lanús </option>
            		<option value="Hospital Berazategui"> Berazategui </option>
            		<option value="Hospital Lomas de Zamora"> Lomas de Zamora </option>
            		<option value="Hospital Esteban Echeverria"> Esteban Echeverria</option>
            		<option value="Hospital Adrogué"> Adrogué</option>
            		<option value="Hospital Banfield"> Banfield</option>
            		<option value="Hospital Bernal"> Bernal </option>
            		<option value="Hospital Burzaco"> Burzaco </option>
            		<option value="Hospital Ezeiza"> Ezeiza </option>
            		<option value="Hospital Lavallol"> Lavallol</option>
            		<option value="Hospital Monte grande"> Monte grande </option>
            		<option value="Hospital Platanos"> Platanos </option>
            		<option value="Hospital Rafael Calzada"> Rafael Calzada </option>
            		<option value="Hospital Ranelagh"> Ranelagh </option>
            		<option value="Hospital San Francisco Solano"> San Francisco Solano </option>
            		<option value="Hospital Sarandi"> Sarandi </option>
            		<option value="Hospital Wilde"> Wilde </option>
		</select>
	</section>
  )
}

export default Filter