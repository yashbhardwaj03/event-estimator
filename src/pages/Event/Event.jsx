import React, { useState, useEffect } from "react";
import partyData from '../../assets/Party to Category.json';
import './Event.css'
import { Link } from "react-router-dom";

export default function Event() {
  // Group parties by category
    const [groupedParties, setGroupedParties] = useState(null);
    const [trending, setTrending] = useState({
      'Celebrations':['Birthdays','Anniversaries'],
      'Weddings and Engagements':['Destination Weddings','Training Sessions'],
    })
    useEffect(() => {
        const groupPartiesByCategory = () => {
        const groupedParties = {};
        Object.entries(partyData).forEach(([party, category]) => {
            if (!groupedParties[category]) groupedParties[category] = [];
            groupedParties[category].push(party);
        });
        return groupedParties;
        };
        let res = groupPartiesByCategory();
        setGroupedParties(res);
        setSearchRes(res);
    }, []);

    // Search results Algo
    const [searchQ, setSearchQ] = useState('');
    const [searchRes, setSearchRes] = useState(groupedParties);
    const updateResults = (val) => {
      setSearchQ(val);
      if (val === '') {setSearchRes(groupedParties); return;}
      const updatedSearchRes = {};
      Object.entries(groupedParties).forEach(([category, parties]) => {
        const matchingParties = parties.filter(p => p.toLowerCase().includes(val.toLowerCase()));
        if (matchingParties.length > 0) updatedSearchRes[category] = matchingParties;
      });
      setSearchRes(updatedSearchRes);
    };
    
    return (
        <div className="MainWrapper">
          <div className="sectionHead"> Select Your Event </div>
          <div className="searchWrapper">
            <input className="searchParties" type="text" placeholder="Search Parties here"
            onChange={(e) => {updateResults(e.target.value)}} value={searchQ} />
            <div className="trendingSection">
              {Object.entries(trending).map(([category, parties]) => (
                parties.map(party => (
                  <Link to={`/event/${category}`} className="trendingItem" key={party}>{party}</Link>
                ))
              ))}
            </div>
          </div>
          {searchRes && (
            <div style={{display:'flex',gap:'10px', flexDirection:'column'}}>
              {Object.entries(searchRes).map(([category, parties]) => (
                <div className="sectionCategoryBox" key={category}>
                  <div className="sectionCategoryHead">{category}</div>
                  <div className="sectionItemsContainer">
                    {parties.map(party => (
                      <Link to={`/event/${category}`} className='partyBox' key={party}>{party}</Link>
                    ))}
                  </div>
                </div>
              ))}
              {Object.keys(searchRes).length <= 0 && <div className="sectionCategoryHead" style={{alignItems:'center', justifyContent:'center', fontSize:'40px'}}>No Matching Results</div>}
            </div>
          )}
        </div>
    )
}