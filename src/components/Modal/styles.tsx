import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-height: 95%;
  z-index: 4;
  background-color: #ccc;
  padding: 1rem;
  border-radius: 3px;
  overflow: auto;
  max-width: 425px;
  //> svg {
  //  display: flex;
  //  margin-left: auto;
  //  font-size: 40px;
  //  font-weight: bold;
  //  color: ;
  //  cursor: pointer;
  //}
  
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.85;
`;