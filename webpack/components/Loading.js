import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <LoaderContainer>
    <CircleWrapper>
      <AnimatedCircle isRecording={false} />
      <Spinner />
    </CircleWrapper>
    <TextContainer>
      <Title>Analizando tu voz</Title>
      <Subtitle>Espera unos segundos</Subtitle>
    </TextContainer>
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
  font-size: 20px;
  color: #555;
  margin: 50px 0;
  justify-content: center;
`;

// Contenedor para la imagen y el spinner superpuestos
const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
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

// Estilo para el contenedor de texto
const TextContainer = styled.div`
  margin-top: 34px;
`;

// Estilo para el título
const Title = styled.h3`
  font-size: 24px;
  color: #333;
  width: 100%;
`;

// Estilo para el subtítulo
const Subtitle = styled.p`
  color: #333;
  margin-top: 8px;
  text-align: center !important;
  font-weight: normal;
  width: 100% !important;

`;

export default Loading;
