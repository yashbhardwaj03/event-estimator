import React, { useState } from "react";
import '../Event/Event.css'
import { Link } from "react-router-dom";

export default function EventTypes() {
  // Group parties by category
    const [trending, setTrending] = useState({
      'Celebrations':['Birthdays','Anniversaries'],
      'Weddings and Engagements':['Destination Weddings','Training Sessions'],
      'Gatherings': ['Family Reuinouns', 'Meetups', 'social events'],
    })
    
    return (
        <div className="MainWrapper">
          <div className="sectionHead"> 🔥 Trending Events 🔥 </div>
          { <div className="sectionItemsContainer">
              {Object.entries(trending).map(([category, parties]) => (
                    parties.map(party => (
                      <Link to={`/event/${category}`} className='partyBox' key={party}>{party}</Link>
                    ))
              ))}
            </div>
          }
        </div>
    )
}