import React, { useState, useEffect } from 'react';
import './planetInfo.scss';
import Table from '../Table/Table';
import Tooltip from '../Tooltip/Tooltip';
import { FiInfo } from 'react-icons/fi';
import { SlMagnifier } from 'react-icons/sl';
import { VscClose } from 'react-icons/vsc';

const PlanetInfo = () => {
  //Holds the result of the API call
  const [planets, setPlanets] = useState([]);

  //Holds the search term
  const [search, setSearch] = useState('');

  //Holds the filtered list
  const [filterList, setFilter] = useState([]);

  //Holds the state of the search bar
  const [isActive, setIsActive] = useState(false);

  //API call to get planet data
  useEffect(() => {
    fetch('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
      .then((response) => response.json())
      .then((data) => setPlanets(data));
  }, []);

  //Filter the list of planets every time there is a change in the search term
  useEffect(() => {
    const result = planets.filter((planet) =>
      planet.pl_name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilter(result);
  }, [planets, search]);

  //Handle click on the serch bar
  const toggleSearch = () => {
    if (isActive) {
      setIsActive(false);
      setSearch('');
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="container-sm">
      <section className="d-flex justify-content-between align-items-center">
        <h1>Planets Discovered in 2022</h1>
        <Tooltip
          content="Click on the column name to organise the data in Ascending or Descending order."
          content2="Click on each discovery to find some additional info."
          direction="left">
          <FiInfo />
        </Tooltip>
      </section>
      <section className="search-box">
        <input
          type="text"
          id="planetSearch"
          className={isActive ? 'open' : 'close'}
          name="planetSearch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span
          className={`search ${!isActive ? 'open' : 'close'}`}
          onClick={toggleSearch}>
          <SlMagnifier />
        </span>
        <span
          className={`close-search ${isActive ? 'open' : 'close'}`}
          onClick={toggleSearch}>
          <VscClose />
        </span>
        <span
          className={`search-label ${!isActive ? 'open' : 'close'}`}
          onClick={toggleSearch}>
          Search for a planet
        </span>
      </section>

      {filterList.length > 0 ? (
        <Table planets={filterList} />
      ) : (
        <p>No Planets with this name, try another name!</p>
      )}
    </div>
  );
};

export default PlanetInfo;
