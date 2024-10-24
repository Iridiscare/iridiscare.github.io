import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <LoaderContainer>
    <CircleWrapper>
      <AnimatedCircle isRecording={false} />
      <Spinner />
    </CircleWrapper>
    <Title>Analizando tu voz</Title>
    <Subtitle>Espera unos segundos</Subtitle>
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

// Estilo para el contenedor general
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 25px 0;
`;

// Contenedor para la imagen y el spinner superpuestos
const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilo para la imagen
const AnimatedCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid #f3f3f3; /* Color del fondo */
  background: url('/assets/images/landings/space.png') center center/cover no-repeat;
  box-shadow: 0px 4px 10px 10px rgba(164, 96, 221, 0.3);
  transition: box-shadow 0.5s ease;
  ${({ isRecording }) =>
    isRecording &&
    css`
      animation: ${pulse} 1.5s infinite;
      box-shadow: 0px 4px 10px 10px rgba(164, 96, 221, 0.3);
    `}
`;

// Estilo para el spinner superpuesto
const Spinner = styled.div`
  border: 9px solid #f3f3f3; /* Color del fondo */
  border-top: 8px solid #9B51E0; /* Color del spinner */
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${spin} 2s linear infinite; /* Animación */
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 34px;
  width: 100%;
  opacity: 0;
  animation: fadeIn 0.6s forwards;
  text-align: center !important;
`;

const Subtitle = styled.h6`
  color: #333;
  text-align: center !important;
  width: 100%;
  font-weight: normal;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export default Loading;
