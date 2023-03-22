import { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import Form from './Components/Form'
import LocationList from './Components/LocationList'
import axios from 'axios'

function App() {
  const [location, setLocation] = useState({

  })
  const [locations, setLocations] = useState([])
  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getLocations = () => {
      axios.get('http://localhost:8080/api/get-locations')
              .then( res => setLocations(res.data.result) )
    }
    getLocations()
    setListUpdated(false)
  }, [listUpdated])
  

  return (
    <>
      <Navbar></Navbar>
      <Form location={location} setLocation={setLocation}></Form>
      <LocationList location={location} setLocation={setLocation} locations={locations} setListUpdated={setListUpdated}></LocationList>
    </>
    
  )
}

export default App
