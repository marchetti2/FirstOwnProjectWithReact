/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import React from 'react';

import tables from '../../data/tables';

import { Container, POne, PTwo, PTree, PFour, PFive } from './styles';

function TableResult(props) {
  const { division, area, situation, height } = props;

  function compare() {
    function old(value) {
      return (
        value !== 'Acesso de Viaturas' &&
        value !== 'Segurança Estrutural contra Incêndio' &&
        value !== 'Compartimentação Horizontal' &&
        value !== 'Compartimentação Vertical' &&
        value !== 'Chuveiros Automáticos' &&
        value !== 'Controle de Fumaça'
      );
    }
    function brigAndAlarm(value) {
      return value !== 'Brigada de Incêndio' && value !== 'Alarme de Incêndio';
    }
    function alarm(value) {
      return value !== 'Alarme de Incêndio';
    }
    function plan(value) {
      return value !== 'Plano de Intervenção de Incêndio';
    }
    function cmar(value) {
      return value !== 'Controle de Materiais de Acabamento e de Revestimento';
    }

    if (area <= 750 && height === 'H ≤ 12m') {
      const s = tables.tabA.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          if (situation === 'Construida') {
            const indexX = tables.tabA.div.indexOf(r);

            return tables.tabA.medidas[indexX].filter(old).map(v => (
              <POne key={v} name={v} id={division}>
                {v}
                <span>
                  Somente para edificações com população superior a 200 pessoas.
                </span>
                <span>
                  Estão isentas as edificações térreas com área menor ou igual a
                  200m2 e população inferior a 50 pessoas.
                </span>
                <span>
                  Estão isentos os motéis que não possuam corredores internos
                  cobertos.
                </span>
                <span>
                  Para a divisão F-3 (estádios), H-2 (hospitais psiquiátricos e
                  reformatórios) e H-5, os extintores deverão ser instalados em
                  locais com acesso privativo.
                </span>
                <span>
                  Somente para edificações com população superior a 500 pessoas
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
              </POne>
            ));
          }
          const indexX = tables.tabA.div.indexOf(r);
          return tables.tabA.medidas[indexX].map(v => (
            <POne key={v} name={v} id={division}>
              {v}
              <span>
                Somente para edificações com população superior a 200 pessoas.
              </span>
              <span>
                Estão isentas as edificações térreas com área menor ou igual a
                200m2 e população inferior a 50 pessoas.
              </span>
              <span>
                Estão isentos os motéis que não possuam corredores internos
                cobertos.
              </span>
              <span>
                Para a divisão F-3 (estádios), H-2 (hospitais psiquiátricos e
                reformatórios) e H-5, os extintores deverão ser instalados em
                locais com acesso privativo.
              </span>
              <span>
                Somente para edificações com população superior a 500 pessoas
              </span>
              <span>
                Somente para edificação com área igual ou maior que 200 m2.
              </span>
              <span>Luminárias à prova de explosão.</span>
              <span>Devem ficar localizados externamente à edificação.</span>
              <span>
                Dispensada em centrais de distribuição ou transmissão de energia
                elétrica.
              </span>
              <span>
                Somente para eventos classificados a partir de risco médio
                (observando critérios da Instrução Técnica específica).
              </span>
              <span>
                Aplicável às construções provisórias destinadas a receber
                público.
              </span>
            </POne>
          ));
        }
      }
    } else if (area > 750 && height === 'H ≤ 12m') {
      if (
        (division === 'A-2' && area <= 1200) ||
        (division === 'A-3' && area <= 1200) ||
        (situation === 'Construida' && area <= 1200)
      ) {
        const s = tables.tabA.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabA.div.indexOf(r);
            return tables.tabA.medidas[indexX].filter(old).map(v => (
              <POne key={v} name={v} id={division}>
                {v}
                <span>
                  Somente para edificações com população superior a 200 pessoas.
                </span>
                <span>
                  Estão isentas as edificações térreas com área menor ou igual a
                  200m2 e população inferior a 50 pessoas.
                </span>
                <span>
                  Estão isentos os motéis que não possuam corredores internos
                  cobertos.
                </span>
                <span>
                  Para a divisão F-3 (estádios), H-2 (hospitais psiquiátricos e
                  reformatórios) e H-5, os extintores deverão ser instalados em
                  locais com acesso privativo.
                </span>
                <span>
                  Somente para edificações com população superior a 500 pessoas
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
              </POne>
            ));
          }
        }
      } else if (situation === 'Construida') {
        const s = tables.tabB.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            if (
              (division === 'C-1' && area <= 2000) ||
              (division === 'C-2' && area <= 2000) ||
              (division === 'C-3' && area <= 2000) ||
              (division === 'I-1' && area <= 2000) ||
              (division === 'I-2' && area <= 2000) ||
              (division === 'J-1' && area <= 2000) ||
              (division === 'J-2' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(brigAndAlarm)
                .filter(old)
                .map(v => (
                  <PTwo key={v} name={v} id={division}>
                    {v}
                    <span>Pode ser substituída por chuveiros automáticos.</span>
                    <span>
                      Pode ser substituída por chuveiros automáticos exceto para
                      as compartimentações das fachadas e selagens dos shafts e
                      dutos de instalações.
                    </span>
                    <span>
                      Somente para edificações de divisão C-3, que possuírem
                      divisão F-6 com população superior a 500 pessoas.
                    </span>
                    <span>
                      Somente para edificações com lotação superior a 500
                      pessoas.
                    </span>
                    <span>
                      Somente para eventos classificados a partir de risco médio
                      (observando critérios da Instrução Técnica específica).
                    </span>
                    <span>
                      Aplicável às construções provisórias destinadas a receber
                      público.
                    </span>
                    <span>
                      Para os hospitais psiquiátricos e reformatórios,
                      pertencentes à divisão H-2, e para todas as edificações da
                      divisão H-5, os equipamentos deverão ser instalados em
                      locais com acesso privativo.
                    </span>
                    <span>Exceto para edificações térreas.</span>
                    <span>
                      Para a divisão I-1, verificar casos de isenção conforme IT
                      específica.
                    </span>
                    <span>
                      Para a divisão J-1, não será exigida a cobertura por
                      extintores nos locais destinados exclusivamente ao
                      armazenamento de materiais incombustíveis, desde que não
                      embalados.
                    </span>
                    <span>
                      Para a divisão J-1, verificar casos de isenção conforme IT
                      específica.
                    </span>
                    <span>
                      A medida deverá será exigida quando a área utilizada
                      exclusivamente como depósito for superior a 3.000 m2 e
                      poderá ser instalada apenas nessa área.
                    </span>
                    <span>
                      Somente para edificação com área igual ou maior que 200
                      m2.
                    </span>
                    <span>Luminárias à prova de explosão.</span>
                    <span>
                      Devem ficar localizados externamente à edificação.
                    </span>
                    <span>
                      Dispensada em centrais de distribuição ou transmissão de
                      energia elétrica.
                    </span>
                    <span>
                      Estão isentos os motéis que não possuam corredores
                      internos cobertos.
                    </span>
                    <span>
                      Os acionadores manuais devem ser instalados nos
                      corredores.
                    </span>
                  </PTwo>
                ));
            }
            // eslint-disable-next-line no-else-return
            else if (
              (division === 'D-1' && area <= 2000) ||
              (division === 'D-2' && area <= 2000) ||
              (division === 'D-3' && area <= 2000) ||
              (division === 'D-4' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(alarm)
                .filter(old)
                .map(v => <p key={v}>{v}</p>);
            } else if (division === 'G-5' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(plan)
                .filter(old)
                .map(v => <p key={v}>{v}</p>);
            } else if (division === 'I-3' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(cmar)
                .filter(old)
                .map(v => <p key={v}>{v}</p>);
            }

            const indexX = tables.tabB.div.indexOf(r);

            return tables.tabB.medidas[indexX].filter(old).map(v => (
              <PTwo key={v} name={v} id={division}>
                {v}
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Pode ser substituída por chuveiros automáticos exceto para as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>
                  Somente para edificações de divisão C-3, que possuírem divisão
                  F-6 com população superior a 500 pessoas.
                </span>
                <span>
                  Somente para edificações com lotação superior a 500 pessoas.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>Exceto para edificações térreas.</span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  A medida deverá será exigida quando a área utilizada
                  exclusivamente como depósito for superior a 3.000 m2 e poderá
                  ser instalada apenas nessa área.
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  Estão isentos os motéis que não possuam corredores internos
                  cobertos.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
              </PTwo>
            ));
          }
        }
      } else {
        const s = tables.tabB.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            if (
              (division === 'C-1' && area <= 2000) ||
              (division === 'C-2' && area <= 2000) ||
              (division === 'C-3' && area <= 2000) ||
              (division === 'I-1' && area <= 2000) ||
              (division === 'I-2' && area <= 2000) ||
              (division === 'J-1' && area <= 2000) ||
              (division === 'J-2' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);
              return tables.tabB.medidas[indexX].filter(brigAndAlarm).map(v => (
                <PTwo key={v} name={v} id={division}>
                  {v}
                  <span>Pode ser substituída por chuveiros automáticos.</span>
                  <span>
                    Pode ser substituída por chuveiros automáticos exceto para
                    as compartimentações das fachadas e selagens dos shafts e
                    dutos de instalações.
                  </span>
                  <span>
                    Somente para edificações de divisão C-3, que possuírem
                    divisão F-6 com população superior a 500 pessoas.
                  </span>
                  <span>
                    Somente para edificações com lotação superior a 500 pessoas.
                  </span>
                  <span>
                    Somente para eventos classificados a partir de risco médio
                    (observando critérios da Instrução Técnica específica).
                  </span>
                  <span>
                    Aplicável às construções provisórias destinadas a receber
                    público.
                  </span>
                  <span>
                    Para os hospitais psiquiátricos e reformatórios,
                    pertencentes à divisão H-2, e para todas as edificações da
                    divisão H-5, os equipamentos deverão ser instalados em
                    locais com acesso privativo.
                  </span>
                  <span>Exceto para edificações térreas.</span>
                  <span>
                    Para a divisão I-1, verificar casos de isenção conforme IT
                    específica.
                  </span>
                  <span>
                    Para a divisão J-1, não será exigida a cobertura por
                    extintores nos locais destinados exclusivamente ao
                    armazenamento de materiais incombustíveis, desde que não
                    embalados.
                  </span>
                  <span>
                    Para a divisão J-1, verificar casos de isenção conforme IT
                    específica.
                  </span>
                  <span>
                    A medida deverá será exigida quando a área utilizada
                    exclusivamente como depósito for superior a 3.000 m2 e
                    poderá ser instalada apenas nessa área.
                  </span>
                  <span>
                    Somente para edificação com área igual ou maior que 200 m2.
                  </span>
                  <span>Luminárias à prova de explosão.</span>
                  <span>
                    Devem ficar localizados externamente à edificação.
                  </span>
                  <span>
                    Dispensada em centrais de distribuição ou transmissão de
                    energia elétrica.
                  </span>
                  <span>
                    Estão isentos os motéis que não possuam corredores internos
                    cobertos.
                  </span>
                  <span>
                    Os acionadores manuais devem ser instalados nos corredores.
                  </span>
                </PTwo>
              ));
              // eslint-disable-next-line no-else-return
            } else if (
              (division === 'D-1' && area <= 2000) ||
              (division === 'D-2' && area <= 2000) ||
              (division === 'D-3' && area <= 2000) ||
              (division === 'D-4' && area <= 2000)
            ) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(alarm)
                .map(v => <p key={v}>{v}</p>);
            } else if (division === 'G-5' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(plan)
                .map(v => <p key={v}>{v}</p>);
            } else if (division === 'I-3' && area <= 5000) {
              const indexX = tables.tabB.div.indexOf(r);

              return tables.tabB.medidas[indexX]
                .filter(cmar)
                .map(v => <p key={v}>{v}</p>);
            }

            const indexX = tables.tabB.div.indexOf(r);
            return tables.tabB.medidas[indexX].map(v => (
              <PTwo key={v} name={v} id={division}>
                {v}
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Pode ser substituída por chuveiros automáticos exceto para as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>
                  Somente para edificações de divisão C-3, que possuírem divisão
                  F-6 com população superior a 500 pessoas.
                </span>
                <span>
                  Somente para edificações com lotação superior a 500 pessoas.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>Exceto para edificações térreas.</span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  A medida deverá será exigida quando a área utilizada
                  exclusivamente como depósito for superior a 3.000 m2 e poderá
                  ser instalada apenas nessa área.
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  Estão isentos os motéis que não possuam corredores internos
                  cobertos.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
              </PTwo>
            ));
          }
        }
      }
    } else if (area > 750 && height === '12m < H ≤ 30m') {
      if (situation === 'Construida') {
        const s = tables.tabC.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabC.div.indexOf(r);

            return tables.tabC.medidas[indexX].filter(old).map(v => (
              <PTree key={v} name={v} id={division}>
                {v}
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Pode ser substituída por chuveiros automáticos exceto para as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
                <span>
                  Para a divisão F-3 a compartimentação vertical será
                  considerada para as fachadas e selagens dos shafts e dutos de
                  instalações.
                </span>
                <span>
                  Somente para edificações com lotação superior a 500 pessoas.
                </span>
                <span>
                  Para a divisão G-1, pode haver apenas um acionador manual por
                  pavimento, no máximo a 10 m da saída de Emergência.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>Exceto para prisões em geral.</span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  O sistema de chuveiros automáticos para a divisão M-3 pode ser
                  substituído por sistema de gases, através de supressão total
                  do ambiente.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
              </PTree>
            ));
          }
        }
      } else {
        const s = tables.tabC.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabC.div.indexOf(r);
            return tables.tabC.medidas[indexX].map(v => (
              <PTree key={v} name={v} id={division}>
                {v}
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Pode ser substituída por chuveiros automáticos exceto para as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
                <span>
                  Para a divisão F-3 a compartimentação vertical será
                  considerada para as fachadas e selagens dos shafts e dutos de
                  instalações.
                </span>
                <span>
                  Somente para edificações com lotação superior a 500 pessoas.
                </span>
                <span>
                  Para a divisão G-1, pode haver apenas um acionador manual por
                  pavimento, no máximo a 10 m da saída de Emergência.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>Exceto para prisões em geral.</span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  O sistema de chuveiros automáticos para a divisão M-3 pode ser
                  substituído por sistema de gases, através de supressão total
                  do ambiente.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
              </PTree>
            ));
          }
        }
      }
    } else if (area > 750 && height === '30m < H ≤ 54m') {
      if (situation === 'Construida') {
        const s = tables.tabD.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabD.div.indexOf(r);

            return tables.tabD.medidas[indexX].filter(old).map(v => (
              <PFour key={v} name={v} id={division}>
                {v}
                <span>
                  Os detectores de incêndio devem ser instalados inclusive nos
                  quartos.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
                <span>
                  Para a divisão F-3 a compartimentação vertical será
                  considerada para as fachadas e selagens dos shafts e dutos de
                  instalações.
                </span>
                <span>
                  Para a divisão G-1, pode haver apenas um acionador manual por
                  pavimento, no máximo a 10 m da saída de Emergência.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  O sistema de chuveiros automáticos para a divisão M-3 pode ser
                  substituído por sistema de gases, através de supressão total
                  do ambiente.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Pode ser substituída por chuveiros automáticos, exceto as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
              </PFour>
            ));
          }
        }
      } else {
        const s = tables.tabD.div;
        for (const r of s) {
          const d = r.indexOf(division);
          if (d !== -1) {
            const indexX = tables.tabD.div.indexOf(r);
            return tables.tabD.medidas[indexX].map(v => (
              <PFour key={v} name={v} id={division}>
                {v}
                <span>
                  Os detectores de incêndio devem ser instalados inclusive nos
                  quartos.
                </span>
                <span>
                  Os acionadores manuais devem ser instalados nos corredores.
                </span>
                <span>
                  Para a divisão F-3 a compartimentação vertical será
                  considerada para as fachadas e selagens dos shafts e dutos de
                  instalações.
                </span>
                <span>
                  Para a divisão G-1, pode haver apenas um acionador manual por
                  pavimento, no máximo a 10 m da saída de Emergência.
                </span>
                <span>
                  Para os hospitais psiquiátricos e reformatórios, pertencentes
                  à divisão H-2, e para todas as edificações da divisão H-5, os
                  equipamentos deverão ser instalados em locais com acesso
                  privativo.
                </span>
                <span>
                  Para a divisão I-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Para a divisão J-1, não será exigida a cobertura por
                  extintores nos locais destinados exclusivamente ao
                  armazenamento de materiais incombustíveis, desde que não
                  embalados.
                </span>
                <span>
                  Para a divisão J-1, verificar casos de isenção conforme IT
                  específica.
                </span>
                <span>
                  Dispensada em centrais de distribuição ou transmissão de
                  energia elétrica.
                </span>
                <span>
                  O sistema de chuveiros automáticos para a divisão M-3 pode ser
                  substituído por sistema de gases, através de supressão total
                  do ambiente.
                </span>
                <span>
                  Somente para eventos classificados a partir de risco médio
                  (observando critérios da Instrução Técnica específica).
                </span>
                <span>
                  Aplicável às construções provisórias destinadas a receber
                  público.
                </span>
                <span>
                  Pode ser substituída por chuveiros automáticos, exceto as
                  compartimentações das fachadas e selagens dos shafts e dutos
                  de instalações.
                </span>
                <span>Pode ser substituída por chuveiros automáticos.</span>
                <span>
                  Somente para edificação com área igual ou maior que 200 m2.
                </span>
                <span>Luminárias à prova de explosão.</span>
                <span>Devem ficar localizados externamente à edificação.</span>
              </PFour>
            ));
          }
        }
      }
    } else if (situation === 'Construida') {
      const s = tables.tabE.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          const indexX = tables.tabE.div.indexOf(r);

          return tables.tabE.medidas[indexX].filter(old).map(v => (
            <PFive key={v} name={v} id={division}>
              {v}
              <span>
                Os detectores de incêndio devem ser instalados inclusive nos
                quartos.
              </span>
              <span>
                Os acionadores manuais devem ser instalados nos corredores.
              </span>
              <span>
                Para a divisão F-3 a compartimentação vertical será considerada
                para as fachadas e selagens dos shafts e dutos de instalações.
              </span>
              <span>
                Para a divisão G-1, pode haver apenas um acionador manual por
                pavimento, no máximo a 10 m da saída de Emergência.
              </span>
              <span>
                Para os hospitais psiquiátricos e reformatórios, pertencentes à
                divisão H-2, e para todas as edificações da divisão H-5, os
                equipamentos deverão ser instalados em locais com acesso
                privativo.
              </span>
              <span>
                Para a divisão I-1, verificar casos de isenção conforme IT
                específica.
              </span>
              <span>
                Para a divisão J-1, não será exigida a cobertura por extintores
                nos locais destinados exclusivamente ao armazenamento de
                materiais incombustíveis, desde que não embalados.
              </span>
              <span>
                Para a divisão J-1, verificar casos de isenção conforme IT
                específica.
              </span>
              <span>
                Dispensada em centrais de distribuição ou transmissão de energia
                elétrica.
              </span>
              <span>
                O sistema de chuveiros automáticos para a divisão M-3 pode ser
                substituído por sistema de gases, através de supressão total do
                ambiente.
              </span>
              <span>
                Somente para eventos classificados a partir de risco médio
                (observando critérios da Instrução Técnica específica).
              </span>
              <span>
                Aplicável às construções provisórias destinadas a receber
                público.
              </span>
              <span>
                Somente para edificação com área igual ou maior que 200 m2.
              </span>
              <span>Luminárias à prova de explosão.</span>
              <span>Devem ficar localizados externamente à edificação.</span>
            </PFive>
          ));
        }
      }
    } else {
      const s = tables.tabE.div;
      for (const r of s) {
        const d = r.indexOf(division);
        if (d !== -1) {
          const indexX = tables.tabE.div.indexOf(r);
          return tables.tabE.medidas[indexX].map(v => (
            <PFive key={v} name={v} id={division}>
              {v}
              <span>
                Os detectores de incêndio devem ser instalados inclusive nos
                quartos.
              </span>
              <span>
                Os acionadores manuais devem ser instalados nos corredores.
              </span>
              <span>
                Para a divisão F-3 a compartimentação vertical será considerada
                para as fachadas e selagens dos shafts e dutos de instalações.
              </span>
              <span>
                Para a divisão G-1, pode haver apenas um acionador manual por
                pavimento, no máximo a 10 m da saída de Emergência.
              </span>
              <span>
                Para os hospitais psiquiátricos e reformatórios, pertencentes à
                divisão H-2, e para todas as edificações da divisão H-5, os
                equipamentos deverão ser instalados em locais com acesso
                privativo.
              </span>
              <span>
                Para a divisão I-1, verificar casos de isenção conforme IT
                específica.
              </span>
              <span>
                Para a divisão J-1, não será exigida a cobertura por extintores
                nos locais destinados exclusivamente ao armazenamento de
                materiais incombustíveis, desde que não embalados.
              </span>
              <span>
                Para a divisão J-1, verificar casos de isenção conforme IT
                específica.
              </span>
              <span>
                Dispensada em centrais de distribuição ou transmissão de energia
                elétrica.
              </span>
              <span>
                O sistema de chuveiros automáticos para a divisão M-3 pode ser
                substituído por sistema de gases, através de supressão total do
                ambiente.
              </span>
              <span>
                Somente para eventos classificados a partir de risco médio
                (observando critérios da Instrução Técnica específica).
              </span>
              <span>
                Aplicável às construções provisórias destinadas a receber
                público.
              </span>
              <span>
                Somente para edificação com área igual ou maior que 200 m2.
              </span>
              <span>Luminárias à prova de explosão.</span>
              <span>Devem ficar localizados externamente à edificação.</span>
            </PFive>
          ));
        }
      }
    }
  }

  return <Container>{compare()}</Container>;
}

export default TableResult;
