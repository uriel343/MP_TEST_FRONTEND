import React from "react"
import axios from "axios"

const Form = ({ location, setLocation }) => {
    
    const handleChange = e => {
        setLocation({
            ...location,
            [e.target.name] : e.target.value
        })
    }

    let { location_name, location_address, location_phone } = location
  
    const handleSubmit = () => {
        if(location_name === '' || location_address === '' || location_phone === ''){
            alert('Todos los campos son obligatorios')
            return
        }

        axios.post('http://localhost:8080/api/create-location', {"location_name": location_name, "location_address": location_address, "location_phone": location_phone})
            .then( res => console.log(res))
            .catch( err => console.log(err) )

        /*setLocation({
            location_name: '',
            location_address: '',
            location_phone: ''
        })*/
    }

    return (
    <>
        <div className="container mt-4">
            <h1>Register a New Location</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="location_name" className="form-label">Location Name</label>
                    <input type="text" className="form-control" id="location_name" value={location_name} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location_address" className="form-label">Location Address</label>
                    <input type="text" className="form-control" id="location_address" value={location_address} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location_phone" className="form-label">Location Phone</label>
                    <input type="text" className="form-control" id="location_phone" value={location_phone} onChange={handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>     
        </div>
    </>
  )
}

export default Form
