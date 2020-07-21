function FormataValor(campo, tammax, teclapres, prec) {
  //pegar tecla e definir valor de virgula

  var tecla = teclapres.keyCode;

  var virgula = ',';

  //pegar valor do campo atual e remover todas virgulas, pontos, barras etc...

  vr = campo.value;

  vr = vr.replace('/', '');

  vr = vr.replace('/', '');

  vr = vr.replace(',', '');

  vr = vr.replace('.', '');

  vr = vr.replace('.', '');

  vr = vr.replace('.', '');

  vr = vr.replace('.', '');

  //se precisao for 0 definir virgula como inexistente para n?o aparecer

  if (prec == 0) virgula = '';

  //antes de checar tamanho do campo remover 0s da frente do campo

  for (k = 0; k < prec; k++) {
    if (vr.substr(0, 1) == '0') vr = vr.substr(1, prec + 1);
  }
  //pegar tamanho dos valores j? limpos

  tam = vr.length;
  //se tamanho for zero n?o fazer nada

  if (tam == 0) return;
  //se teclas apertadas forem numericas, backspace, del etc.... entrar em if

  if (
    !tecla ||
    tecla == 8 ||
    tecla == 46 ||
    (tecla <= 57 && tecla >= 48) || (tecla <= 105 && tecla >= 96)
  ) {
    //if para campos de valores fracionais ate 0,999

    if (tam <= prec + 1) {
      campo.value = '0' + virgula;

      for (k = 1; k <= prec - tam; k++) {
        campo.value += '0';
      }

      campo.value += vr;
    }

    //if para campos com valores at? 999,999

    if (tam > prec && tam <= prec + 3) {
      campo.value =
        vr.substr(0, tam - prec) + virgula + vr.substr(tam - prec, prec + 1);
    }

    //if para campos com valores at? 999.999,999

    if (tam > prec + 3 && tam <= prec + 6) {
      campo.value =
        vr.substr(0, tam - (prec + 3)) +
        '.' +
        vr.substr(tam - (prec + 3), 3) +
        virgula +
        vr.substr(tam - prec, prec + 1);
    }

    //if para campos com valores at? 999.999.999,999  (9 casas)

    if (tam > prec + 6 && tam <= prec + 9) {
      campo.value =
        vr.substr(0, tam - (prec + 6)) +
        '.' +
        vr.substr(tam - (prec + 6), 3) +
        '.' +
        vr.substr(tam - (prec + 3), 3) +
        virgula +
        vr.substr(tam - prec, prec + 1);
    }

    //if para campos com valores at? 999.999.999.999,999
    if (tam > prec + 9 && tam <= prec + 12) {
      campo.value =
        vr.substr(0, tam - (prec + 9)) +
        '.' +
        vr.substr(tam - (prec + 9), 3) +
        '.' +
        vr.substr(tam - (prec + 6), 3) +
        '.' +
        vr.substr(tam - (prec + 3), 3) +
        virgula +
        vr.substr(tam - prec, prec + 1);
    }

    //if para campos com valores at? 999.999.999.999.999,999

    if (tam > prec + 12 && tam <= prec + 15) {
      campo.value =
        vr.substr(0, tam - (prec + 12)) +
        '.' +
        vr.substr(tam - (prec + 12), 3) +
        '.' +
        vr.substr(tam - (prec + 9), 3) +
        '.' +
        vr.substr(tam - (prec + 6), 3) +
        '.' +
        vr.substr(tam - (prec + 3), 3) +
        virgula +
        vr.substr(tam - prec, prec + 1);
    }

    if (tam >= 15 && tam <= 17) {
      campo.value =
        vr.substr(0, tam - 14) +
        '.' +
        vr.substr(tam - 14, 3) +
        '.' +
        vr.substr(tam - 11, 3) +
        '.' +
        vr.substr(tam - 8, 3) +
        '.' +
        vr.substr(tam - 5, 3) +
        virgula +
        vr.substr(tam - 2, tam);
    }
  }

  // Codigo Fabiano Carrijo
  if (tecla == 9) {
    setCursor(document.getElementById(campo.id), 20, 20);
  }
  return;
}

function setCursor(el, st, end) {
  if (el.setSelectionRange) {
    el.focus();
    el.setSelectionRange(st, end);
  } else {
    if (el.createTextRange) {
      range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', st);
      range.select();
    }
  }
}

<input
  id="corpo:formulario:regiao:0:areaConstruida"
  name="corpo:formulario:regiao:0:areaConstruida"
  title="Área Construída(m²)"
  onkeyup="FormataValor(this,10,event,2); return CheckNumerico(this,10,event);"
  onkeypress="FormataValor(this,10,event,2);return CheckNumerico(this,10,event);"
  onblur="validaOcupacao2(0);"
  onfocus="insereValorCampo('detCorrPlc', 'regiao');"
  onchange="FormataValor(this,10,'',2);"
  class="af_inputText_content"
  size="10"
  maxlength="10"
  style="text-align:right; padding:1px;"
  type="text"
  value="0,00"
></input>;
