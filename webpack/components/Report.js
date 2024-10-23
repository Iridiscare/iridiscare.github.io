import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { FiShare } from "react-icons/fi";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCloseSharp } from 'react-icons/io5';
import { MdOutlineMail } from "react-icons/md";

import { reportSharing } from './Sharing';
import { report, pctToTextSecondPerson, ProgressBarLabel } from './Copies';

const Report = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  const key = getMaxKey(data.analysisData.vemotions)
  const emotions = [
    { name: report.emotions[key], percentage: Math.round(data.analysisData.vemotions[key]*100), description: 'Tu emoción más fuerte ahora mismo.'},
    { name: '😱 Estrés', percentage: Math.round(data.analysisData.stress.high*100), description: pctToTextSecondPerson("stress", data.analysisData.stress.high)},
    { name: '😰 Ansiedad', percentage: Math.round(data.analysisData.vemotions.fearful*100), description: pctToTextSecondPerson("anxiety", data.analysisData.vemotions.fearful)},
    { name: '😔 Depresión', percentage: Math.round(data.analysisData.depression.high*100), description: pctToTextSecondPerson("depression", data.analysisData.depression.high)},
  ];

  const reportMessage = `${reportSharing(data.analysisData)}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(reportMessage)}`,
    email: `mailto:?subject=Informe%20emocional&body=${encodeURIComponent(reportMessage)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(reportMessage)}`
  };

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
      <Footer>Iridis puede cometer errores. Consulta los resultados con tu interior.</Footer>
      <ShareButton onClick={toggleModal}>
        <a className="feature-button button button-primary btn-lg animate__animated animate__pulse"
        onclick="gtag('event', 'share_report', { event_category: 'Share Report', event_action: 'Sharing Button Opened', event_label:'sharing'})">
          <FiShare size={18}/>&nbsp;&nbsp;Compartir
        </a>
      </ShareButton>

      {/* Modal de compartir */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseIcon onClick={toggleModal} />
            <TitleModal>Comparte tu informe</TitleModal>
            <SubtitleModal>Elige dónde compartir o cópialo al portapapeles.</SubtitleModal>
            <SocialLinks>
              <SocialLink href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={32} /></SocialLink>
              <SocialLink href={shareLinks.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter size={32} /></SocialLink>
              <SocialLink href={shareLinks.email} target="_blank" rel="noopener noreferrer"><MdOutlineMail size={32} /></SocialLink>
              <SocialLink onClick={() => {navigator.clipboard.writeText(reportMessage)}} target="_blank" rel="noopener noreferrer"><FaRegCopy size={32} /></SocialLink>
            </SocialLinks>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

const EmotionItem = ({ emotion }) => {
  const [filled, setFilled] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setFilled(emotion.percentage), 1000);

    // Animate the displayed percentage value
    let incrementTimeout;
    if (filled < emotion.percentage) {
      incrementTimeout = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= emotion.percentage) {
            clearInterval(incrementTimeout);
            return emotion.percentage;
          }
          return prev + 1;
        });
      }, 10);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(incrementTimeout);
    };
  }, [emotion.percentage, filled]);

  return (
    <EmotionContainer>
      <EmotionHeader>
        <b>{emotion.name}</b>&nbsp;· <EmotionLevel pct={emotion.percentage}>{ProgressBarLabel(emotion.percentage)}</EmotionLevel>&nbsp;·&nbsp;<Percentage>{percentage}%</Percentage>
      </EmotionHeader>
      <ProgressBar color={emotion.percentage} percentage={filled} />
      <EmotionDescription>{emotion.description}</EmotionDescription>
    </EmotionContainer>
  );
};

const ProgressBar = ({ color, percentage }) => (
  <BarContainer>
    <Bar color={color} percentage={percentage} />
  </BarContainer>
);

const getMaxKey = (obj) => {
  return Object.keys(obj).reduce((maxKey, currentKey) =>
    obj[currentKey] > obj[maxKey] ? currentKey : maxKey
  );
};
 
const Percentage = styled.span`
  color: #BDBDBD;
`;

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
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const EmotionLevel = styled.span`
  color: ${({ pct }) => (pct < 33 ? '#27AE60' : pct < 75 ? '#F2994A' : '#EB5757')};
  margin-left: 4px;
`;

const BarContainer = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 10px;
  width: 100%;
`;

const Bar = styled.div`
  background: ${({ color }) => (color < 33 ? '#27AE60' : color < 75 ? '#F2994A' : '#EB5757')};
  border-radius: 10px;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  transition: width 1.5s ease-in-out;
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
  font-size: 12px;
  margin-top: 20px;
  color: #333;
`;

const ShareButton = styled.div`
  margin-top: 30px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  max-width: 90%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  padding: 15px;
  font-size: 30px;
  color: #555;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CloseIcon = styled(IoCloseSharp)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  &:hover {
    color: #9B51E0;
  }
`;

const TitleModal = styled.h3`
  font-size: 24px;
  color: #333;
  width: 100%;
`;

const SubtitleModal = styled.h6`
  margin-top: 8px;
  text-align: center !important;
  width: 100%;
  font-weight: normal;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

export default Report;
