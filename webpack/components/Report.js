import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// EmotionReport component that contains the list of emotions
const Report = () => {
  // Mock data for emotions and their levels
  const emotions = [
    { name: '😨 Miedo', level: 'Alto', percentage: 78, description: 'Tu emoción más fuerte ahora mismo.', color: '#EB5757' },
    { name: '😱 Estrés', level: 'Medio', percentage: 68, description: 'Te sientes en alerta e irritable.', color: '#F2994A' },
    { name: '😰 Ansiedad', level: 'Alta', percentage: 89, description: 'Sientes bastantes nervios o preocupación.', color: '#EB5757' },
    { name: '😔 Depresión', level: 'Baja', percentage: 7, description: 'A penas te sientes triste o culpable.', color: '#27AE60' },
  ];

  return (
    <Container>
      <Header>¡Tu informe de salud emocional!</Header>
      {emotions.map((emotion, index) => (
        <EmotionItem key={index} emotion={emotion} />
      ))}
      <AdviceSection>
        <AdviceHeader>Consejos</AdviceHeader>
        <AdviceItem>🧘 Practica ejercicios de relajación.</AdviceItem>
        <AdviceItem>🥰 Haz actividades que disfrutes.</AdviceItem>
        <AdviceItem>🗣️ Habla sobre tus sentimientos.</AdviceItem>
      </AdviceSection>
      <Footer>Iridis puede cometer errores. Consulta con tu interior.</Footer>
      <ShareButton>
        <a class="feature-button button button-primary btn-lg animate__animated animate__pulse"
        onclick="gtag('event', 'start_app_download', { event_category: 'Start App Download', event_action: 'Button Clicked to Store', event_label:'app'})">
          <i data-feather="share"></i> Compartir </a>
      </ShareButton>
    </Container>
  );
};

// Component to render each emotion with its level and progress bar
const EmotionItem = ({ emotion }) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilled(emotion.percentage);
    }, 500); // Delay to start the progress bar animation
    return () => clearTimeout(timeout);
  }, [emotion.percentage]);

  return (
    <EmotionContainer>
      <EmotionHeader>
        <b>{emotion.name} </b> · <EmotionLevel pct={emotion.percentage}>{emotion.level}</EmotionLevel> · {emotion.percentage}%
      </EmotionHeader>
      <ProgressBar color={emotion.percentage} percentage={filled} />
      <EmotionDescription>{emotion.description}</EmotionDescription>
    </EmotionContainer>
  );
};

// Progress bar styled component
const ProgressBar = ({ color, percentage }) => (
  <BarContainer>
    <Bar color={color} percentage={percentage} />
  </BarContainer>
);

// Styled components for layout and styling
const Container = styled.div`
  justify-content: center;
  text-align: center;
  color: #333;
`;

const Header = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const EmotionContainer = styled.div`
  margin-bottom: 20px;
`;

const EmotionHeader = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const EmotionLevel = styled.span`
  color: ${({ pct }) => (pct < 33 ? '#27AE60' : pct < 75 ? '#F2994A' : '#EB5757')};
  margin-left: 4px;
`;

const BarContainer = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 8px;
  width: 100%;
`;

const Bar = styled.div`
  background: ${({ color }) => (color < 33 ? '#27AE60' : color < 75 ? '#F2994A' : '#EB5757')};
  border-radius: 10px;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  transition: width 2s ease-in-out;
`;

const EmotionDescription = styled.p`
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
`;

const AdviceSection = styled.div`
  margin-top: 20px;
`;

const AdviceHeader = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

const AdviceItem = styled.p`
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
`;

const Footer = styled.footer`
  text-align: left;
  font-size: 14px;
  color: #aaa;
  margin-top: 20px;
`;

const ShareButton = styled.div`
  margin-top: 30px;
`;

export default Report;
