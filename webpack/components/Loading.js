import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <LoaderContainer>
    <Spinner />
    <Subtitle>Analizando tu voz...</Subtitle>
  </LoaderContainer>
);


// Animación para el spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilo para el contenedor del spinner
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-size: 20px;
  color: #555;
`;

// Estilo para el spinner
const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Color del fondo */
  border-top: 8px solid #9B51E0; /* Color del spinner */
  border-radius: 50%;
  width: 60px; /* Tamaño del spinner */
  height: 60px; /* Tamaño del spinner */
  animation: ${spin} 2s linear infinite; /* Animación */
  margin-bottom: 10px
`;

const Subtitle = styled.h6`
  color: #bdbdbd;
  margin-top: 8px;
  text-align: center !important;
  width: 100%;
  font-weight: normal;
`;

export default Loading;
