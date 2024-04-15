// components/EventTypes.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';

function EventTypes({ events, searchTerm }) {
  const [categories, setCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    // Extract unique categories from the events data
    const uniqueCategories = [...new Set(events.map((event) => event.category))];
    setCategories(uniqueCategories);
  }, [events]);

  const handleSearch = (searchTerm) => {
    // Filter events based on the search term
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Types of Events</h2>
      <div className="flex justify-end">
      <SearchBar onSearch={handleSearch} />
      </div>
      <div className="px-5 pt-2 flex flex-row justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <FilterButton key={index} category={category} />
        ))}
      </div>
      <div className="flex justify-end">
        <a href="/events" className="mt-4 mb-1 font-bold text-blue-700 hover:text-black">
          See All...
        </a>
      </div>
      <div className="px-3 flex flex-row gap-8 overflow-x-scroll scrollbar-hide">
        {filteredEvents.map((event, index) => (
          <div key={index}>
            <Card {...event} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventTypes;
