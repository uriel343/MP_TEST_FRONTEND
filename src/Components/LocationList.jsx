import axios from "axios";
const LocationList = ({ location, setLocation, locations, setListUpdated }) => {
    
    const handleDelete = id => {
        axios.delete('http://localhost:8080/api/delete-location/' + id)
            .then( res => alert('Prodcuto eliminado') )  

            setListUpdated(true)
    }

    let { location_name, location_address, location_phone } = location
    const handleUpdate = id => {
        if(location_name === '' || location_address === '' || location_phone === ''){
            alert('Todos los campos son obligatorios')
            return
        }
        const update = {
            location_name: location_name,
            location_address: location_address,
            location_phone: location_phone
        }
        axios.put('http://localhost:8080/api/edit-location/' + id, update)
                .then(res => console.log(res))

           /* setLocation({
                location_name: '',
                location_address: '',
                location_phone: ''
            })*/
            setListUpdated(true)
    }
  
    return (
    <>
    <div className="container mt-4">
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Location Name</th>
            <th scope="col">Location Address</th>
            <th scope="col">Location Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                locations.map(location => (
                    <tr key={location.id}>
                        <th scope="row">{location.id}</th>
                        <td>{location.location_name}</td>
                        <td>{location.location_address}</td>
                        <td>{location.location_phone}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(location.id)} className="btn btn-danger">Delete</button>
                                <button onClick={() => handleUpdate(location.id)} className="btn btn-primary">Update</button>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    </>
  );
};

export default LocationList;
