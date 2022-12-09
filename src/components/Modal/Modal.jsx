import React from 'react';
import './modal.scss';

const Modal = (props) => {
  //Extracting the data in a variable so it is shorter to call in the return statement
  const { data } = props;

  //Handler to close the modal only if the close button or the space outside the modal is clicked
  const handleClick = (e) => {
    if (e.target.id === 'outer-modal' || e.target.id === 'modal-close') {
      props.handleClose();
    } else {
      return;
    }
  };

  return (
    <div
      className={`modal ${props.show}`}
      id="outer-modal"
      onClick={handleClick}>
      <div className="modal-container">
        <h1>{data?.pl_name}</h1>
        <table>
          <tr>
            <td>Discovery Facility:</td>
            <td>{data?.disc_facility}</td>
          </tr>
          <tr>
            <td>Discovery Method:</td>
            <td>{data?.discoverymethod}</td>
          </tr>
          <tr>
            <td>Discovery Date:</td>
            <td>{data?.releasedate}</td>
          </tr>
          <tr>
            <td>Metallicity Ratio:</td>
            <td>{data?.st_metratio ? data?.st_metratio : 'N/A'}</td>
          </tr>
        </table>
        <button className="modal-close" id="modal-close">
          Back
        </button>
        <p>*This record was last updated on {data?.rowupdate}</p>
      </div>
    </div>
  );
};

export default Modal;
