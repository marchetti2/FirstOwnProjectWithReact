import React from 'react';
import database from '../../data/database';

import { Tablew } from './styles';

function Row(props) {
  const { a, b, i, handleChange } = props;

  return (
    <tr id="info">
      <td onClick={handleChange}>{a[i]}</td>
      <td id="info">{b[i]}</td>
    </tr>
  );
}

function Cell(props) {
  const { a, b, handleChange } = props;
  const rows = [];

  a.forEach((product, index) => {
    rows.push(
      <Row a={a} b={b} i={index} key={product} handleChange={handleChange} />
    );
  });

  return (
    <Tablew>
      <thead>
        <tr id="info">
          <td id="info">Divisão</td>
          <td id="info">Descrição</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Tablew>
  );
}

function TableModal(props) {
  const { a, b, handleChange } = props;
  return <Cell a={a} b={b} handleChange={handleChange} />;
}

function Table(props) {
  const { occupation, handleChange } = props;
  const indexOccupation = database.occupation.indexOf(occupation);

  const a = database.division[indexOccupation];
  const b = database.description[indexOccupation];

  return <TableModal a={a} b={b} handleChange={handleChange} />;
}

export default Table;
