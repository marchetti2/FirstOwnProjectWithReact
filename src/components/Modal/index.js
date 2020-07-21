import React from 'react';
import PropTypes from 'prop-types';

import database from '../../data/database';
import Table from '../TableModal';

import { ContainerCard, TextBtn, InputArea } from './styles';

function Modal(props) {
  const {
    show,
    handleChange,
    modalContent,
    occupation,
    division,
    handleCharge,
    details,
    closeModal,
  } = props;

  function handleModalContent() {
    const indexOccupation = database.occupation.indexOf(occupation);

    function handleArea(e) {
      const d = e.target.value.replace(/[^0-9]/gi, '');
      e.target.value = d;
      // setArea(d);
    }

    switch (modalContent) {
      case 'occupation':
        return database.occupation.map(p => (
          <TextBtn type="button" key={p} value={p} onClick={handleChange}>
            {p}
          </TextBtn>
        ));

      case 'division':
        return <Table occupation={occupation} handleChange={handleChange} />;

      case 'details': {
        const indexDivision = database.division[indexOccupation].indexOf(
          division
        );
        const indexCharge = database.details[indexOccupation][
          indexDivision
        ].indexOf(details);

        const char =
          database.charge[indexOccupation][indexDivision][indexCharge];

        return database.details[indexOccupation][indexDivision].map(p => (
          <TextBtn type="button" key={p} value={p} onClick={handleChange}>
            {p}
            {indexOccupation < 9 ? handleCharge(char) : null}
          </TextBtn>
        ));
      }
      case 'charge':
        return database.charge[12].map(p => (
          <TextBtn type="button" key={p} value={p} onClick={handleChange}>
            {p} MJ/m²
          </TextBtn>
        ));
      case 'area':
        return (
          <>
            <InputArea
              type="text"
              placeholder="0"
              onKeyDown={handleArea}
              onChange={handleChange}
            />
            <TextBtn type="button" onClick={closeModal}>
              ok
            </TextBtn>
          </>
        );

      case 'height':
        return database.heigth.map(p => (
          <TextBtn type="button" key={p} value={p} onClick={handleChange}>
            {p}
          </TextBtn>
        ));

      case 'situation':
        return database.situation.map(p => (
          <TextBtn type="button" key={p} value={p} onClick={handleChange}>
            {p}
          </TextBtn>
        ));

      default:
        return null;
    }
  }

  return (
    <ContainerCard hide={show} center={modalContent}>
      {handleModalContent()}
    </ContainerCard>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  modalContent: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  division: PropTypes.string.isRequired,
  handleCharge: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Modal;
