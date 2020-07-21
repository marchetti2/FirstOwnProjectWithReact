import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MdSort } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import Modal from '../../components/Modal/index';
import TableResult from '../../components/TableResult';
import ExitAndStairType from '../../components/ExitAndStairType';

import Card from '../../styles/components/CardTwo';

import { Container, ButtonBack, SubmitBtn, ChoiceList, Html } from './styles';

function SecurityMeasures() {
  const [height, setHeight] = useState('');
  const [division, setDivision] = useState('');
  const [details, setDetails] = useState('');
  const [occupation, setOccupation] = useState('');
  const [situation, setSituation] = useState('');
  const [area, setArea] = useState('');
  const [charge, setCharge] = useState('');
  // const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [send, setSend] = useState(false);

  /*  function handleDelete() {
    setList([]);
  }
*/
  function handleSend() {
    setSend(true);
  }

  /*
  function handleSubmit(e) {
    e.preventDefault();
    async function submit() {
      await handleDelete();
      setList([
        ...list,
        occupation,
        division,
        details,
        charge,
        area,
        height,
        situation,
      ]);
    }
    submit();

    // await this.condition();
  }
  */

  function showModal() {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
  }

  function handleCharge(char) {
    setCharge(char);
  }

  function handleChange(e) {
    switch (modalContent) {
      case 'occupation':
        setOccupation(e.target.value);
        closeModal();
        break;
      case 'division':
        setDivision(e.target.textContent);
        closeModal();
        break;
      case 'height':
        setHeight(e.target.value);
        closeModal();
        break;
      case 'situation':
        setSituation(e.target.value);
        closeModal();
        break;
      case 'charge':
        setCharge(e.target.value);
        closeModal();
        break;
      case 'details':
        setDetails(e.target.value);
        closeModal();
        break;
      case 'area':
        setArea(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleChoice(e) {
    setModalContent(e.target.name);
    showModal();
  }

  return (
    <Html>
      <Modal
        show={show}
        handleChange={handleChange}
        modalContent={modalContent}
        occupation={occupation}
        division={division}
        charge={charge}
        details={details}
        closeModal={closeModal}
        handleCharge={handleCharge}
      />

      <Container
        hide={show}
        onKeyDown={event => (event.keyCode === 27 ? closeModal(event) : null)}
      >
        <ButtonBack>
          <Link to="/">
            <FaPlus size={24} color="#9a9da3" />
          </Link>
        </ButtonBack>
        <div>
          <h1>
            <MdSort size={35} color="#fff" />
            Definir medidas de segurança
          </h1>
          <p>
            preencha os campos para verificar as medidas de segurança para a
            edificaçao
          </p>
        </div>

        <ChoiceList>
          <li>
            <Card
              verif="active"
              name="occupation"
              value={occupation}
              onClick={handleChoice}
            >
              {!occupation ? 'Selecione a ocupação' : occupation}
            </Card>
          </li>
          <li>
            <Card
              verif={occupation ? 'active' : 'blocked'}
              name="division"
              value={division}
              onClick={handleChoice}
            >
              {!division ? 'Selecione a divisao' : division}
            </Card>
          </li>

          <li>
            <Card
              verif={division ? 'active' : 'blocked'}
              name="details"
              value={details}
              onClick={handleChoice}
            >
              {!details ? 'Selecione a descriçao' : details}
            </Card>
          </li>
          <li>
            <Card
              verif={details || charge ? 'active' : 'blocked'}
              name="charge"
              value={charge}
              onClick={handleChoice}
            >
              {!charge ? 'Selecione a Carga de Incendio' : charge}
              {' MJ/m²'}
            </Card>
          </li>
          <li>
            <Card
              verif={charge ? 'active' : 'blocked'}
              name="area"
              value={area}
              onClick={handleChoice}
            >
              {!area ? 'Selecione a area' : area}
            </Card>
          </li>
          <li>
            <Card
              verif={area ? 'active' : 'blocked'}
              name="height"
              value={height}
              onClick={handleChoice}
            >
              {!height ? 'Selecione a altura' : height}
            </Card>
          </li>
          <li>
            <Card
              verif={height ? 'active' : 'blocked'}
              name="situation"
              value={situation}
              onClick={handleChoice}
            >
              {!situation ? 'Selecione a situaçao' : situation}
            </Card>
          </li>
        </ChoiceList>

        <SubmitBtn type="button" onClick={handleSend}>
          Enviar
        </SubmitBtn>
        {send ? (
          <>
            <TableResult
              division={division}
              area={area}
              situation={situation}
              height={height}
            />
            <ExitAndStairType />
          </>
        ) : null}
      </Container>
    </Html>
  );
}

export default SecurityMeasures;
