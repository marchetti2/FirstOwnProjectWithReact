import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineSafetyCertificate,
  AiOutlineCalculator,
} from 'react-icons/ai';
import { GoBook } from 'react-icons/go';
import { Container, MainList } from './styles';
import Card from '../../styles/components/Card';

function Main() {
  return (
    <Container>
      <MainList>
        <li>
          <Link to="/security">
            <Card color="red">
              <AiOutlineSafetyCertificate size={125} />
              <h2>Verificador de medidas de segurança</h2>
              <p>
                Preencha os campos para verificar qual as medidas de segurança
                contra incendio para a edificaçao
              </p>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Card color="purple">
              <AiOutlineCalculator size={125} />
              <h2>Calculo de carga de incendio</h2>
              <p>Calcule a carga de incendio da edificaçao.</p>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Card color="cyan">
              <GoBook size={125} />
              <h2>Instruçoes técnicas</h2>
              <p>Consulte a legislaçao do CBMMG</p>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Card color="green">
              <GoBook size={125} />
              <h2>Instruçoes técnicas</h2>
              <p>Consulte a legislaçao do CBMMG</p>
            </Card>
          </Link>
        </li>
      </MainList>
    </Container>
  );
}

export default Main;
