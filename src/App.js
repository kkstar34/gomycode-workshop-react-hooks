import './App.css';
import  PetsList  from './components/PetsList';
import {useState} from 'react';



function App() {



  const [filter, setFilter] = useState('');
  const handleFilter = (filter) =>{
    setFilter(filter.target.value);
    console.log(filter.target.value);
  }
  
  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col"> 
            <select className="form-select" aria-label="Default select example" onChange={handleFilter}>
              <option value="">Filtrer</option>
              <option value="type" >Type</option>
              <option value="race" >Race</option>
              <option value="location" >Location</option>
            </select>
          </div>
          
          <PetsList filter={filter}/>
        </div>
        
    </div>
  );
}

export default App;
