import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './table.scss';
import Modal from '../Modal/Modal';

const Table = (props) => {
  const { planets } = props;
  //Sorting config based on the name of the column and Ascending/Descending order
  const [sortConfig, setSortConfig] = useState({
    key: 'releasedate',
    direction: 'descending',
  });

  //Store and update modal data based on user input
  const [modalData, setModalData] = useState();
  const [show, setShow] = useState('d-none');

  //Click handler to change the settings for the sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      !sortConfig ||
      (sortConfig.key === key && sortConfig.direction === 'ascending')
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  //Planets Sorted based on user input
  let sortedPlanets = [...planets];
  if (sortConfig !== null) {
    sortedPlanets.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  //Display data for modal
  const handleSelectRow = (e) => {
    const record = e.target.getAttribute('data-index');
    setModalData(sortedPlanets[record]);
    setShow('d-block');
  };

  //Close Modal and reset data
  const handleCloseModal = () => {
    setShow('d-none');
    setModalData(null);
  };

  return (
    <>
      <Modal show={show} handleClose={handleCloseModal} data={modalData} />
      <div className="Table-Container">
        <table className="Planets-Table">
          <thead>
            <tr>
              <th width="40%">
                <button type="button" onClick={() => requestSort('pl_name')}>
                  Planet Name
                  <span>
                    {sortConfig.key === 'pl_name' &&
                    sortConfig.direction === 'descending' ? (
                      <AiOutlineArrowDown />
                    ) : sortConfig.key === 'pl_name' &&
                      sortConfig.direction === 'ascending' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      ' '
                    )}
                  </span>
                </button>
              </th>
              <th width="30%">
                <button
                  type="button"
                  onClick={() => requestSort('releasedate')}>
                  Release date
                  <span>
                    {sortConfig.key === 'releasedate' &&
                    sortConfig.direction === 'descending' ? (
                      <AiOutlineArrowDown />
                    ) : sortConfig.key === 'releasedate' &&
                      sortConfig.direction === 'ascending' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      ' '
                    )}
                  </span>
                </button>
              </th>
              <th width="30%">
                <button type="button" onClick={() => requestSort('pl_rade')}>
                  Planet radius
                  <span>
                    {sortConfig.key === 'pl_rade' &&
                    sortConfig.direction === 'descending' ? (
                      <AiOutlineArrowDown />
                    ) : sortConfig.key === 'pl_rade' &&
                      sortConfig.direction === 'ascending' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      ' '
                    )}
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPlanets.map((planet, i) => (
              <tr key={i} onClick={handleSelectRow}>
                <td data-index={i}>{planet.pl_name}</td>
                <td data-index={i}>{planet.releasedate}</td>
                <td data-index={i}>{planet.pl_rade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
