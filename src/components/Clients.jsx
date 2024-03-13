import React, { useState } from 'react';
import styles from "../style"; 
import { clients } from "../constants"; 

const Clients = () => {
   // Create state to track hovered logo for each client
   const [hoveredLogos, setHoveredLogos] = useState({});

   // Function to handle mouse enter
   const handleMouseEnter = (clientId) => {
     setHoveredLogos(prevState => ({...prevState,[clientId]: true }));
   };

     // Function to handle mouse leave
  const handleMouseLeave = (clientId) => {
    setHoveredLogos(prevState => ({...prevState,[clientId]: false}));
  };


return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client)=>(
               <div 
                key={client.id} 
                className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] relative`} 
                onMouseEnter={() => handleMouseEnter(client.id)}
                onMouseLeave={() => handleMouseLeave(client.id)}
                >

              <img 
                src={hoveredLogos[client.id] ? client.whiteLogo : client.logo} 
                alt="client" 
                className="sm:w-[192px] w-[100px] object-contain" 
              />
          </div>
          ))}
      </div>

    </section>
  )
}


export default Clients;