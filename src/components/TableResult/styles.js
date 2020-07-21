import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const POne = styled.p.attrs(props => ({
  disabled: props.name,
  enabled: props.id,
}))`
  span {
    display: none;
  }
  ${props =>
    props.id !== 'F-7' &&
    props.id !== 'L-1' &&
    props.id !== 'L-2' &&
    props.id !== 'L-3' &&
    props.id !== 'M-3' &&
    props.name === 'Iluminação de emergência' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(2) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      (props.id === 'B-1' || props.id === 'B-2') &&
      props.name === 'Iluminação de emergência' &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(2) {
            display: block;
            z-index: 1;
          }
          span:nth-child(3) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        (props.id === 'B-1' || props.id === 'B-2') &&
        props.name === 'Sinalização de Emergência' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(3) {
              display: block;
              z-index: 1;
            }
          }
        `}

      ${props =>
        (props.id === 'F-5' || props.id === 'F-6' || props.id === 'F-11') &&
        props.name === 'Plano de Intervenção de Incêndio' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(5) {
              display: block;
              z-index: 1;
            }
          }
        `}


  ${props =>
    (props.id === 'H-2' ||
      props.id === 'H-3' ||
      props.id === 'H-5' ||
      props.id === 'F-1' ||
      props.id === 'F-2' ||
      props.id === 'F-3' ||
      props.id === 'F-4' ||
      props.id === 'F-8' ||
      props.id === 'F-9' ||
      props.id === 'F-10') &&
    props.name === 'Extintores' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(4) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      (props.id === 'F-1' ||
        props.id === 'F-2' ||
        props.id === 'F-3' ||
        props.id === 'F-4' ||
        props.id === 'F-5' ||
        props.id === 'F-6' ||
        props.id === 'F-8' ||
        props.id === 'F-9' ||
        props.id === 'F-10' ||
        props.id === 'F-11') &&
      (props.name === 'Controle de Materiais de Acabamento e de Revestimento' ||
        props.name === 'Brigada de incendio') &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(1) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        props.id === 'L-1' &&
        props.name === 'Iluminação de emergência' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(6) {
              display: block;
              z-index: 1;
            }
          }
        `}
        ${props =>
          (props.id === 'L-2' || props.id === 'L-3') &&
          props.name === 'Iluminação de emergência' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(6) {
                display: block;
                z-index: 1;
              }
              span:nth-child(7) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Alarme de Incêndio' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(6) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Extintores' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(8) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              props.id === 'M-3' &&
              props.name === 'Hidrantes e Mangotinhos' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(9) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}

              ${props =>
                props.id === 'F-7' &&
                (props.name === 'Plano de Intervenção de Incêndio' ||
                  props.name === 'Brigada de Incêndio' ||
                  props.name === 'Iluminação de emergência') &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(10) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
        ${props =>
          props.id === 'F-7' &&
          props.name ===
            'Controle de Materiais de Acabamento e de Revestimento' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(11) {
                display: block;
                z-index: 1;
              }
            }
          `}
`;

export const PTwo = styled.p.attrs(props => ({
  disabled: props.name,
  enabled: props.id,
}))`
  span {
    display: none;
  }
  ${props =>
    (props.id === 'C-1' ||
      props.id === 'C-2' ||
      props.id === 'C-3' ||
      props.id === 'I-3' ||
      props.id === 'J-2' ||
      props.id === 'J-3' ||
      props.id === 'J-4') &&
    props.name === 'Compartimentação Horizontal' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(1) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      (props.id === 'B-1' || props.id === 'B-2') &&
      (props.name === 'Iluminação de emergência' ||
        props.name === 'Sinalização de Emergência') &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(17) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        (props.id === 'B-1' || props.id === 'B-2') &&
        props.name === 'Alarme de Incêndio' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(18) {
              display: block;
              z-index: 1;
            }
          }
        `}


  ${props =>
    (props.id === 'C-1' || props.id === 'C-2' || props.id === 'C-3') &&
    props.name === 'Controle de Fumaça' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(3) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      (props.id === 'F-5' || props.id === 'F-6' || props.id === 'F-11') &&
      (props.name === 'Plano de Intervenção de Incêndio' ||
        props.name === 'Detecçao de Incêndio' ||
        props.name === 'Controle de Fumaça') &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(4) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        props.id === 'F-7' &&
        (props.name === 'Plano de Intervenção de Incêndio' ||
          props.name === 'Brigada de Incêndio' ||
          props.name === 'Iluminação de emergência') &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(5) {
              display: block;
              z-index: 1;
            }
          }
        `}
        ${props =>
          props.id === 'F-7' &&
          props.name ===
            'Controle de Materiais de Acabamento e de Revestimento' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(6) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'H-2' || props.id === 'H-5') &&
            (props.name === 'Extintores' ||
              props.name === 'Hidrantes e Mangotinhos') &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(7) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              (props.id === 'I-1' || props.id === 'I-2') &&
              props.name === 'Compartimentação Horizontal' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(1) {
                    display: block;
                    z-index: 1;
                  }
                  span:nth-child(8) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
            ${props =>
              props.id === 'I-1' &&
              props.name === 'Hidrantes e Mangotinhos' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(9) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
              ${props =>
                props.id === 'J-1' &&
                props.name === 'Extintores' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(10) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
                ${props =>
                  props.id === 'J-1' &&
                  props.name === 'Hidrantes e Mangotinhos' &&
                  css`
                    &:hover {
                      background: rgba(255, 255, 255, 0.1);
                      span:nth-child(11) {
                        display: block;
                        z-index: 1;
                      }
                    }
                  `}
                  ${props =>
                    (props.id === 'J-3' || props.id === 'J-4') &&
                    props.name === 'Chuveiros Automáticos' &&
                    css`
                      &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        span:nth-child(12) {
                          display: block;
                          z-index: 1;
                        }
                      }
                    `}
                    ${props =>
                      props.id === 'L-1' &&
                      props.name === 'Iluminação de emergência' &&
                      css`
                        &:hover {
                          background: rgba(255, 255, 255, 0.1);
                          span:nth-child(13) {
                            display: block;
                            z-index: 1;
                          }
                        }
                      `}
        ${props =>
          (props.id === 'L-2' || props.id === 'L-3') &&
          props.name === 'Iluminação de emergência' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(13) {
                display: block;
                z-index: 1;
              }
              span:nth-child(14) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Alarme de Incêndio' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(13) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Extintores' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(15) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              props.id === 'M-3' &&
              props.name === 'Hidrantes e Mangotinhos' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(16) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
`;

export const PTree = styled.p.attrs(props => ({
  disabled: props.name,
  enabled: props.id,
}))`
  span {
    display: none;
  }
  ${props =>
    (props.id === 'B-1' ||
      props.id === 'B-2' ||
      props.id === 'C-1' ||
      props.id === 'C-2' ||
      props.id === 'C-3' ||
      props.id === 'D-1' ||
      props.id === 'D-2' ||
      props.id === 'D-3' ||
      props.id === 'D-4' ||
      props.id === 'G-4' ||
      props.id === 'H-3' ||
      props.id === 'I-1' ||
      props.id === 'I-2' ||
      props.id === 'J-2') &&
    props.name === 'Compartimentação Horizontal' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(1) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      (props.id === 'B-1' ||
        props.id === 'B-2' ||
        props.id === 'C-1' ||
        props.id === 'C-2' ||
        props.id === 'C-3' ||
        props.id === 'D-1' ||
        props.id === 'D-2' ||
        props.id === 'D-3' ||
        props.id === 'D-4' ||
        props.id === 'E-1' ||
        props.id === 'E-2' ||
        props.id === 'E-3' ||
        props.id === 'E-4' ||
        props.id === 'E-5' ||
        props.id === 'E-6' ||
        props.id === 'F-1' ||
        props.id === 'F-2' ||
        props.id === 'F-3' ||
        props.id === 'F-4' ||
        props.id === 'F-8' ||
        props.id === 'F-9' ||
        props.id === 'F-10' ||
        props.id === 'G-4' ||
        props.id === 'H-1') &&
      props.name === 'Compartimentação Vertical' &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(2) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        props.id === 'I-2' &&
        props.name === 'Compartimentação Vertical' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(1) {
              display: block;
              z-index: 1;
            }
          }
        `}
  ${props =>
    (props.id === 'B-1' || props.id === 'B-2') &&
    props.name === 'Alarme de Incêndio' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(3) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      props.id === 'F-3' &&
      props.name === 'Compartimentação Vertical' &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(2) {
            display: block;
            z-index: 1;
          }
          span:nth-child(4) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        (props.id === 'F-5' || props.id === 'F-6' || props.id === 'F-11') &&
        props.name === 'Controle de Fumaça' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(5) {
              display: block;
              z-index: 1;
            }
          }
        `}
        ${props =>
          props.id === 'G-1' &&
          props.name === 'Alarme de Incêndio' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(6) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'H-2' || props.id === 'H-5') &&
            (props.name === 'Extintores' ||
              props.name === 'Hidrantes e Mangotinhos') &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(7) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'H-2' || props.id === 'H-5') &&
            props.name === 'Controle de Fumaça' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(8) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              props.id === 'I-1' &&
              props.name === 'Hidrantes e Mangotinhos' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(9) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
              ${props =>
                props.id === 'J-1' &&
                props.name === 'Extintores' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(10) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
              ${props =>
                props.id === 'J-1' &&
                props.name === 'Hidrantes e Mangotinhos' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(11) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
                ${props =>
                  props.id === 'M-3' &&
                  props.name === 'Hidrantes e Mangotinhos' &&
                  css`
                    &:hover {
                      background: rgba(255, 255, 255, 0.1);
                      span:nth-child(12) {
                        display: block;
                        z-index: 1;
                      }
                    }
                  `}
                  ${props =>
                    props.id === 'M-3' &&
                    props.name === 'Chuveiros Automaticos' &&
                    css`
                      &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        span:nth-child(13) {
                          display: block;
                          z-index: 1;
                        }
                      }
                    `}
                    ${props =>
                      props.id === 'F-7' &&
                      (props.name === 'Plano de Intervenção de Incêndio' ||
                        props.name === 'Brigada de Incêndio' ||
                        props.name === 'Iluminação de emergência') &&
                      css`
                        &:hover {
                          background: rgba(255, 255, 255, 0.1);
                          span:nth-child(14) {
                            display: block;
                            z-index: 1;
                          }
                        }
                      `}
        ${props =>
          props.id === 'F-7' &&
          props.name ===
            'Controle de Materiais de Acabamento e de Revestimento' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(15) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            props.id === 'L-1' &&
            props.name === 'Iluminação de emergência' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(16) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
        ${props =>
          (props.id === 'L-2' || props.id === 'L-3') &&
          props.name === 'Iluminação de emergência' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(16) {
                display: block;
                z-index: 1;
              }
              span:nth-child(17) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Alarme de Incêndio' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(16) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Extintores' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(18) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
`;

export const PFour = styled.p.attrs(props => ({
  disabled: props.name,
  enabled: props.id,
}))`
  span {
    display: none;
  }
  ${props =>
    (props.id === 'B-1' || props.id === 'B-2') &&
    props.name === 'Detecçao de Incêndio' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(1) {
          display: block;
          z-index: 1;
        }
      }
    `}
  ${props =>
    (props.id === 'B-1' || props.id === 'B-2') &&
    props.name === 'Alarme de Incêndio' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(2) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      props.id === 'F-3' &&
      props.name === 'Compartimentação Vertical' &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(3) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        props.id === 'G-1' &&
        props.name === 'Alarme de Incêndio' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(4) {
              display: block;
              z-index: 1;
            }
          }
        `}
        ${props =>
          (props.id === 'H-2' || props.id === 'H-5') &&
          (props.name === 'Extintores' ||
            props.name === 'Hidrantes e Mangotinhos') &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(5) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            props.id === 'I-1' &&
            props.name === 'Hidrantes e Mangotinhos' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(6) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              props.id === 'J-1' &&
              props.name === 'Extintores' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(7) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
              ${props =>
                props.id === 'J-1' &&
                props.name === 'Hidrantes e Mangotinhos' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(8) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
                ${props =>
                  props.id === 'M-3' &&
                  props.name === 'Hidrantes e Mangotinhos' &&
                  css`
                    &:hover {
                      background: rgba(255, 255, 255, 0.1);
                      span:nth-child(9) {
                        display: block;
                        z-index: 1;
                      }
                    }
                  `}
                  ${props =>
                    props.id === 'M-3' &&
                    props.name === 'Chuveiros Automaticos' &&
                    css`
                      &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        span:nth-child(10) {
                          display: block;
                          z-index: 1;
                        }
                      }
                    `}
                    ${props =>
                      props.id === 'F-7' &&
                      (props.name === 'Plano de Intervenção de Incêndio' ||
                        props.name === 'Brigada de Incêndio' ||
                        props.name === 'Iluminação de emergência') &&
                      css`
                        &:hover {
                          background: rgba(255, 255, 255, 0.1);
                          span:nth-child(11) {
                            display: block;
                            z-index: 1;
                          }
                        }
                      `}
        ${props =>
          props.id === 'F-7' &&
          props.name ===
            'Controle de Materiais de Acabamento e de Revestimento' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(12) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            props.id === 'H-1' &&
            props.name === 'Compartimentação Vertical' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(13) {
                  display: block;
                  z-index: 1;
                }
              }
            `}

            ${props =>
              props.id === 'J-2' &&
              props.name === 'Compartimentação Horizontal' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(14) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
              ${props =>
                props.id === 'L-1' &&
                props.name === 'Iluminação de emergência' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(15) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
        ${props =>
          (props.id === 'L-2' || props.id === 'L-3') &&
          props.name === 'Iluminação de emergência' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(15) {
                display: block;
                z-index: 1;
              }
              span:nth-child(16) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Alarme de Incêndio' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(15) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Extintores' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(17) {
                  display: block;
                  z-index: 1;
                }
              }
            `}

`;

export const PFive = styled.p.attrs(props => ({
  disabled: props.name,
  enabled: props.id,
}))`
  span {
    display: none;
  }
  ${props =>
    (props.id === 'B-1' || props.id === 'B-2') &&
    props.name === 'Detecçao de Incêndio' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(1) {
          display: block;
          z-index: 1;
        }
      }
    `}
  ${props =>
    (props.id === 'B-1' || props.id === 'B-2') &&
    props.name === 'Alarme de Incêndio' &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        span:nth-child(2) {
          display: block;
          z-index: 1;
        }
      }
    `}
    ${props =>
      props.id === 'F-3' &&
      props.name === 'Compartimentação Vertical' &&
      css`
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          span:nth-child(3) {
            display: block;
            z-index: 1;
          }
        }
      `}
      ${props =>
        props.id === 'G-1' &&
        props.name === 'Alarme de Incêndio' &&
        css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            span:nth-child(4) {
              display: block;
              z-index: 1;
            }
          }
        `}
        ${props =>
          (props.id === 'H-2' || props.id === 'H-5') &&
          (props.name === 'Extintores' ||
            props.name === 'Hidrantes e Mangotinhos') &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(5) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            props.id === 'I-1' &&
            props.name === 'Hidrantes e Mangotinhos' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(6) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
            ${props =>
              props.id === 'J-1' &&
              props.name === 'Extintores' &&
              css`
                &:hover {
                  background: rgba(255, 255, 255, 0.1);
                  span:nth-child(7) {
                    display: block;
                    z-index: 1;
                  }
                }
              `}
              ${props =>
                props.id === 'J-1' &&
                props.name === 'Hidrantes e Mangotinhos' &&
                css`
                  &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    span:nth-child(8) {
                      display: block;
                      z-index: 1;
                    }
                  }
                `}
                ${props =>
                  props.id === 'M-3' &&
                  props.name === 'Hidrantes e Mangotinhos' &&
                  css`
                    &:hover {
                      background: rgba(255, 255, 255, 0.1);
                      span:nth-child(9) {
                        display: block;
                        z-index: 1;
                      }
                    }
                  `}
                  ${props =>
                    props.id === 'M-3' &&
                    props.name === 'Chuveiros Automaticos' &&
                    css`
                      &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        span:nth-child(10) {
                          display: block;
                          z-index: 1;
                        }
                      }
                    `}
                    ${props =>
                      props.id === 'F-7' &&
                      (props.name === 'Plano de Intervenção de Incêndio' ||
                        props.name === 'Brigada de Incêndio' ||
                        props.name === 'Iluminação de emergência') &&
                      css`
                        &:hover {
                          background: rgba(255, 255, 255, 0.1);
                          span:nth-child(11) {
                            display: block;
                            z-index: 1;
                          }
                        }
                      `}
        ${props =>
          props.id === 'F-7' &&
          props.name ===
            'Controle de Materiais de Acabamento e de Revestimento' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(12) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            props.id === 'L-1' &&
            props.name === 'Iluminação de emergência' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(13) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
        ${props =>
          (props.id === 'L-2' || props.id === 'L-3') &&
          props.name === 'Iluminação de emergência' &&
          css`
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              span:nth-child(13) {
                display: block;
                z-index: 1;
              }
              span:nth-child(14) {
                display: block;
                z-index: 1;
              }
            }
          `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Alarme de Incêndio' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(13) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
          ${props =>
            (props.id === 'L-2' || props.id === 'L-3') &&
            props.name === 'Extintores' &&
            css`
              &:hover {
                background: rgba(255, 255, 255, 0.1);
                span:nth-child(15) {
                  display: block;
                  z-index: 1;
                }
              }
            `}
`;
