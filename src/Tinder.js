import { SwipeableDrawer } from '@material-ui/core';
import React  , { useState,useEffect} from 'react';
import TinderCard from "react-tinder-card"
import "./Card.css";
import axios from './axios'
function Tinder() {
   const [people,setpeople] = useState([]);

   useEffect(() => {
       async function fetchData(){
           const req = await axios.get('/tinder/card');

           setpeople(req.data);

       }
       fetchData();

   },[]);

   const swiped=(direction,nameToDelete)=>{
       console.log("removing"+ nameToDelete);
   };

   const outofFrame =(name)=>{
       console.log(name+"left the screen!")
   };



    return (
        <div className="cards" >
            <div className='tinderCards__cardcontainer'>
            {people.map((person) => (
                 <TinderCard className="swip" key={person.name} preventSwipe={["up","down"]} onSwipe={(dir)=>swiped(dir,person.name)} onCardLeftScreen={()=> outofFrame(person.name) }  >
                  <div style={{backgroundImage:`url(  ${person.imgUrl})`}} className="card" >
            <h3>{person.name}</h3>

                  </div>

                 </TinderCard>
            ))} 
            </div>


            
            
        </div>
    )
}

export default Tinder;
