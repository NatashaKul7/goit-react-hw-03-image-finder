import styled from 'styled-components';

const ModalBox = styled.div`
  position: absolute;
  width: 100%;
  max-width: 550px;
  height: 100%;
  max-height: 400px;
  border-radius: 10px;
  padding: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* p {
    color: #000;
    z-index: 1000;
  } */
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { ModalBox, Overlay };
