import React, { useState, useEffect } from "react";
import partyData from '../../assets/Party to Category.json';
import './Event.css'
import { Link } from "react-router-dom";

export default function Event() {
    // useState hook to manage the party data state
    const [groupedParties, setGroupedParties] = useState(null);

    // useEffect hook to run once when the component mounts
    useEffect(() => {
        // Group parties by category
        const groupPartiesByCategory = () => {
        const groupedParties = {};
        Object.entries(partyData).forEach(([party, category]) => {
            if (!groupedParties[category]) {
            groupedParties[category] = [];
            }
            groupedParties[category].push(party);
        });
        return groupedParties;
        };

        // Set grouped parties state
        setGroupedParties(groupPartiesByCategory());
    }, []);

    return (
        <div className="MainWrapper">
          <div className="sectionHead"> Select Your Party </div>
          <div className="searchWrapper">
            <input className="searchParties" type="text" placeholder="Search Parties here" />
          </div>
          {groupedParties && (
            <div style={{display:'flex',gap:'10px', flexDirection:'column'}}>
              {Object.entries(groupedParties).map(([category, parties]) => (
                <div className="sectionCategoryBox" key={category}>
                  <div className="sectionCategoryHead">{category}</div>
                  <div className="sectionItemsContainer">
                    {parties.map(party => (
                      <Link to={`/event/${category}`} className='partyBox' key={party}>{party}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    )
}