
import PetCard from './PetCard';
import {useState, useEffect} from 'react';
const PetsList = ({filter}) => {

    const [pets, setPets] = useState([
        {
          id : 1,
          name: 'Rex',
          race : 'chien',
          type : 'blanc',
          location : 'Abidjan',
          image : 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',
          adopted : false
        }, 
        
        {
            id : 2,
            name : 'Cokers',
            race : 'chien',
            type : 'black',
            location : 'Korhogo',
            image : 'https://cdn.pixabay.com/photo/2019/04/02/22/42/dog-4099123_960_720.jpg',
            adopted : false
        }, 


        {
            id : 3,
            name : 'Coq',
            race : 'poulet',
            type : 'black',
            location : 'Abidjan',
            image : 'https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_960_720.jpg',
            adopted : false
        },

      ])

      
    
      const  handleAdopted = (id) =>{
        let newPets = [...pets];
        let index = newPets.findIndex(pet => pet.id === id);
        newPets[index].adopted = newPets[index].adopted ? false : true;

        setPets(newPets);
      }

      useEffect(()=> {
        let newPets = [...pets];
        switch(filter) {

            case "type" : newPets.sort((a, b) =>  ('' + a.type).localeCompare(b.type));
                            break;
            case "race" : newPets.sort((a, b) =>('' + a.race).localeCompare(b.race));
                            break;
            case "location" : newPets.sort((a, b) =>('' + a.location).localeCompare(b.location))
                        break;
            default : setPets(newPets);
        }
        
        setPets(newPets);
      }, [filter])
    return (
        <>
        {pets.map(pet => 
            
            <PetCard pet={pet}  handleAdopted={handleAdopted} key={pet.id}/>
            
            
            )}
        </>
        
        
    )

}

export default PetsList;